import * as data from "../api/data.js";
import { html } from "../lib.js";

// @submit=${onSubmit}
const editTemplate = (theater, onSubmit) => html`
  <section id="editPage">
    <form class="theater-form" @submit=${onSubmit}>
      <h1>Edit Theater</h1>
      <div>
        <label for="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Theater name"
          .value=${theater.title}
        />
      </div>
      <div>
        <label for="date">Date:</label>
        <input
          id="date"
          name="date"
          type="text"
          placeholder="Month Day, Year"
          .value=${theater.date}
        />
      </div>
      <div>
        <label for="author">Author:</label>
        <input
          id="author"
          name="author"
          type="text"
          placeholder="Author"
          .value=${theater.author}
        />
      </div>
      <div>
        <label for="description">Theater Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          .value=${theater.description}
        ></textarea>
      </div>
      <div>
        <label for="imageUrl">Image url:</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          placeholder="Image Url"
          .value=${theater.imageUrl}
        />
      </div>
      <button class="btn" type="submit">Submit</button>
    </form>
  </section>
`;

export async function editPage(ctx) {
  const theaterId = ctx.params.id;

  const theater = await data.getById(theaterId);

  ctx.render(editTemplate(theater, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));

    if (Object.values(formData).some(x => x == "")) {
      return alert("All fields are required!");
    }

    await data.edit(theaterId, {
      title: formData.title,
      date: formData.date,
      author: formData.author,
      description: formData.description,
      imageUrl: formData.imageUrl,
    });

    event.target.reset();
    ctx.page.redirect(`/details/${theaterId}`);
  }
}
