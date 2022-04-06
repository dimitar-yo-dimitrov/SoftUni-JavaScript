import { getUserMemes } from "../api/data.js";
import { html } from "../lib.js";

const myCatalogTemplate = (memes, email, gender, username) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img
        id="user-avatar-url"
        alt="user-profile"
        src=${gender === "male" ? "/images/male.png" : "/images/female.png"}
      />
      <div class="user-content">
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>
        <p>My memes count: ${memes.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      ${memes != undefined && memes.length != 0
        ? memes.map(cardTemplate)
        : html`<p class="no-memes">No memes in database.</p>`}
    </div>
  </section>
`;

const cardTemplate = (meme) => html`
  <div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
    <a class="button" href="/details/${meme._id}">Details</a>
  </div>
`;

export async function myProfilePage(ctx) {
  const userId = sessionStorage.getItem("userId");
  const email = sessionStorage.getItem("email");
  const gender = sessionStorage.getItem("gender");
  const username = sessionStorage.getItem("username");

  const memes = await getUserMemes(userId);

  ctx.render(myCatalogTemplate(memes, email, gender, username));
}
