import { html } from "../lib.js";
import * as data from "../api/data.js";

// @click=${onDelete}
const detailsTemplate = (theater, onDelete, onLike) => html`
  <section id="detailsPage">
    <div id="detailsBox">
      <div class="detailsInfo">
        <h1>Title: ${theater.title}</h1>
        <div>
          <img src=${theater.imageUrl} />
        </div>
      </div>

      <div class="details">
        <h3>Theater Description</h3>
        <p>${theater.description}</p>
        <h4>Date: ${theater.date}</h4>
        <h4>Author: ${theater.author}</h4>
        <div class="buttons">
          ${theater.isOwner
            ? html`<a
                  class="btn-delete"
                  @click=${onDelete}
                  href="javascript:void(0)"
                  >Delete</a>
                <a class="btn-edit" href="/edit/${theater._id}">Edit</a>`
            : ""}
          ${theater.canLike
            ? html`<a
                class="btn-like"
                @click=${onLike}
                href="javascript:void(0)"
                >Like</a>`
            : ""}
        </div>
        <p class="likes">Likes: ${theater.likes}</p>
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const theaterId = ctx.params.id;
  const userId = sessionStorage.getItem("userId");
  
  const theater = await data.getById(theaterId);
  const likes = await data.getLikes(theaterId);
  const userLiked = await data.userLiked(theaterId, userId);

  theater.likes = likes;

  if (userId) {
    theater.hasUser = true;
    theater.isOwner = theater._ownerId == userId;
    theater.canLike = !theater.isOwner && !userLiked;
  }
  
  ctx.render(detailsTemplate(theater, onDelete, onLike));

  async function onDelete() {
    const confirmed = confirm(
      `Are you sure you want to delete this ${theater.title}?`
    );

    if (confirmed) {
      await data.deleteById(theaterId);
      ctx.page.redirect("/myProfile");
    }
  }

  async function onLike() {
    await data.addLike(theaterId);
    ctx.page.redirect(`/details/${theaterId}`);
  }
}
