import { html } from "../lib.js";
import { create } from "../api/data.js";
import { notifyTemplate } from "../notifications.js";

// @submit=${onSubmit}
const createTemplate = (onSubmit, error) => html`
  <section id="create-meme">
    <form id="create-form" @submit=${onSubmit}>
      <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
        ></textarea>
        <label for="imageUrl">Meme Image</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter meme ImageUrl"
          name="imageUrl"
        />
        <input type="submit" class="registerbtn button" value="Create Meme" />
      </div>
    </form>
  </section>
  ${error ? notifyTemplate(error) : null}
`;

export async function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));

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

      await create({
        title,
        description,
        imageUrl,
      });

      event.target.reset();

      ctx.page.redirect("/catalog");
    } catch (error) {
      ctx.render(createTemplate(onSubmit, error.message));
      document.querySelector("div.notification ").style.display = "block";

      setTimeout(() => {
        ctx.render(createTemplate(onSubmit));
      }, 3000);
    }
  }
}
