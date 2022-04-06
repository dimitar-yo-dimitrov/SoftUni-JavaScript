import { homePage } from "./home.js";
import { showView } from "./util.js";

const section = document.querySelector("#add-movie");
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

export function editPage() {
  showView(section);
}

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const title = formData.get("title");
  const description = formData.get("description");
  const img = formData.get("imageUrl");

  await editMovies(title, description, img);
  form.reset();

  homePage();
}

async function editMovies(title, description, img, event) {
  const movieId = event.target._id;

  if (!title || !description || !img) {
    return alert("All fields are required!");
  }

  const user = JSON.parse(localStorage.getItem("user"));

  await fetch(`http://localhost:3030/data/movies/${movieId}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({ title, description, img }),
  });
}
