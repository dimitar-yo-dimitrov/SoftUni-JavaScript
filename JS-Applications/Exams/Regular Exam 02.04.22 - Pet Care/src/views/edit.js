import { edit, getById } from "../api/data.js";
import { html } from "../lib.js";

// @submit=${onSubmit}
const editTemplate = (pet, onSubmit) => html`
  <!--Edit Page-->
  <section id="editPage">
    <form class="editForm" @submit=${onSubmit}>
      <img src=${pet.image} />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" .value=${pet.name} />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" .value=${pet.breed} />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" .value=${pet.age} />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" .value=${pet.weight} />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" .value=${pet.image} />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
      </div>
    </form>
  </section>
`;

export async function editPage(ctx) {
  const petId = ctx.params.id;

  const pet = await getById(petId);

  ctx.render(editTemplate(pet, onSubmit));

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

      await edit(petId, {
        name,
        breed,
        age,
        weight,
        image
      });

      event.target.reset();

      ctx.page.redirect(`/details/${petId}`);
    } catch (error) {
      alert(error.message);
    }
  }
}
