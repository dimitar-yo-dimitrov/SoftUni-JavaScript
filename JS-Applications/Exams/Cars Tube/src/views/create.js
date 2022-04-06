import { html } from "../lib.js";
import { create } from "../api/data.js";

// @submit=${onSubmit}
const createTemplate = (onSubmit) => html`
  <section id="create-listing">
    <div class="container">
      <form id="create-form" @submit=${onSubmit}>
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" />

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" />

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" />

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" />

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" />

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" />

        <hr />
        <input type="submit" class="registerbtn" value="Create Listing" />
      </form>
    </div>
  </section>
`;

export async function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const brand = formData.get("brand").trim();
    const model = formData.get("model").trim();
    const description = formData.get("description").trim();
    const year = Number(formData.get("year"));
    const imageUrl = formData.get("imageUrl").trim();
    const price = Number(formData.get("price"));

    try {
      if (
        !brand ||
        !model ||
        !description ||
        !year ||
        !imageUrl ||
        !price
      ) {
        throw new Error("All fields are required!");
      }

      if (price < 0) {
        throw new Error("Price must be a positive number!");
      }
      if (year < 0) {
        throw new Error("Year must be a positive number!");
      }

      await create({
        brand,
        model,
        description,
        year,
        imageUrl,
        price
      });

      event.target.reset();

      ctx.page.redirect("/catalog");
    } catch (error) {
      alert(error.message);
    }
  }
}
