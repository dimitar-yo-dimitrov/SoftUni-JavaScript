import { edit, getById } from "../api/data.js";
import { html } from "../lib.js";
import { notifyTemplate } from "../notifications.js";

// @submit=${onSubmit}
const editTemplate = (meme, onSubmit, error) => html`
  <section id="edit-meme">
    <form id="edit-form" @submit=${onSubmit}>
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title} />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
          .value=${meme.description}
        ></textarea
        >
        <label for="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter Meme ImageUrl"
          name="imageUrl"
          .value=${meme.imageUrl}
        />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
  ${error ? notifyTemplate(error) : null}
`;

export async function editPage(ctx) {
  const memeId = ctx.params.id;

  const meme = await getById(memeId);

  ctx.render(editTemplate(meme, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");

    try {
      if (!title || !description || !imageUrl) {
        throw new Error("All fields are required!");
      }

      await edit(memeId, {
        title,
        description,
        imageUrl,
      });

      event.target.reset();

      ctx.page.redirect(`/details/${memeId}`);
    } catch (error) {
      ctx.render(editTemplate(meme, onSubmit, error.message));
      document.querySelector("div.notification ").style.display = "block";

      setTimeout(() => {
        ctx.render(editTemplate(onSubmit));
      }, 3000);
    }
  }
}
