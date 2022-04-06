import { html } from "../lib.js";
import { deleteById, getById } from "../api/data.js";

// @click=${onDelete}
const detailsTemplate = (meme, isOwner, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        ${isOwner
          ? html`
              <a href="/edit/${meme._id}" class="button warning">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="button danger" >Delete</a>`
          : ""}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const memeId = ctx.params.id;

  const meme = await getById(memeId);

  const isOwner = meme._ownerId == sessionStorage.getItem("userId");

  async function onDelete() {
    const confirmed = confirm(
      `Are you sure you want to delete this ${meme.title}?`
    );

    if (confirmed) {
      await deleteById(memeId);
      ctx.page.redirect("/catalog");
    }
  }

  ctx.render(detailsTemplate(meme, isOwner, onDelete));
}
