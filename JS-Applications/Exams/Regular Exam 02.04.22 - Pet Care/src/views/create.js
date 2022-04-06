import { html } from "../lib.js";
import { create } from "../api/data.js";

// @submit=${onSubmit}
const createTemplate = (onSubmit) => html`
  <!--Create Page-->
  <section id="createPage">
    <form class="createForm" @submit=${onSubmit}>
      <img src="./images/cat-create.jpg" />
      <div>
        <h2>Create PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" placeholder="Max" />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" placeholder="Shiba Inu" />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" placeholder="2 years" />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" placeholder="5kg" />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input
            name="image"
            id="image"
            type="text"
            placeholder="./image/dog.jpeg"
          />
        </div>
        <button class="btn" type="submit">Create Pet</button>
      </div>
    </form>
  </section>
`;

export async function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name").trim();
    const breed = formData.get("breed").trim();
    const age = formData.get("age").trim();
    const weight = formData.get("weight").trim();
    const image = formData.get("image").trim();

    try {
      if (!name || !breed || !age || !weight || !image) {
        throw new Error("All fields are required!");
      }

      await create({
        name,
        breed,
        age,
        weight,
        image
      });

      event.target.reset();

      ctx.page.redirect("/");
    } catch (error) {
      alert(error.message);
    }
  }
}
