import { editPage } from "./edit.js";
import { homePage } from "./home.js";
import { showView, spinner } from "./util.js";

const section = document.querySelector("#movie-example");

export function detailsPage(id) {
  showView(section);
  displayMovie(id);
}

export async function displayMovie(id) {
  section.replaceChildren(spinner);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.accessToken;

  const [movie, likes, ownLike] = await Promise.all([
    getMovie(id),
    getLikes(id),
    getOwnLike(id, user),
  ]);

  section.replaceChildren(createMovieCard(movie, user, likes, ownLike, token));
}

export function createMovieCard(movie, user, likes, ownLike, token) {
  const element = document.createElement("div");
  element.className = "container";
  element.innerHTML = `
    <div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}" alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${movie.description}</p>
        ${createControls(movie, user, ownLike)}
        <span class="enrolled-span">Liked ${likes}</span>
    </div> `;

  const likeBtn = element.querySelector(".likeBtn");
  const deleteBtn = element.querySelector(".deleteBtn");
  const editBtn = element.querySelector(".editBtn");

  if (user._id === movie._ownerId) {
    deleteBtn.style.display = "inline";
    editBtn.style.display = "inline";

    editBtn.addEventListener("click", (event) => {
      event.target.remove();
      editPage(movie._id);
    });

    deleteBtn.addEventListener("click", () => deleteMovie(movie._id, token));
  }

  if (likeBtn) {
    likeBtn.addEventListener("click", (event) => likeMovie(event, movie._id));
  }

  return element;
}

function createControls(movie, user, ownLike) {
  const isOwner = user && user._id == movie._ownerId;

  let controls = [];

  if (isOwner) {
    controls.push('<a class="btn btn-danger deleteBtn" href="#">Delete</a>');
    controls.push('<a class="btn btn-warning editBtn" href="#">Edit</a>');
  } else if (user && !ownLike) {
    controls.push('<a class="btn btn-primary likeBtn" href="#">Like</a>');
  }

  return controls.join("");
}

export async function getMovie(id) {
  const response = await fetch(`http://localhost:3030/data/movies/${id}`);
  return response.json();
}

async function getLikes(id) {
  const response = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
  );
  return response.json();
}

async function getOwnLike(movieId, user) {
  if (!user) {
    return false;
  } else {
    const userId = user._id;
    const response = await fetch(
      `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`
    );
    const like = await response.json();

    return like.length > 0;
  }
}

async function likeMovie(event, movieId) {
  event.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  await fetch(`http://localhost:3030/data/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({ movieId }),
  });

  detailsPage(movieId);
}

export async function deleteMovie(movieId, token) {
  const confirmed = confirm("Are you sure you want to delete this movie?");

  if (confirmed) {
    if (token == null) {
      return alert("You are not authorized!");
    }

    await fetch("http://localhost:3030/data/movies/" + movieId, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
    });

    alert("Movie deleted!");

    homePage();
  }
}
