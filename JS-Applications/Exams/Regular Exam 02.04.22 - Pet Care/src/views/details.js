import { html } from "../lib.js";
import * as data from "../api/data.js";

// @click=${onDelete}
const detailsTemplate = (pet, onDelete, onDonate) => html`
  <!--Details Page-->
  <section id="detailsPage">
    <div class="details">
      <div class="animalPic">
        <img src=${pet.image} />
      </div>
      <div>
        <div class="animalInfo">
          <h1>Name: ${pet.name}</h1>
          <h3>Breed: ${pet.breed}</h3>
          <h4>Age: ${pet.age}</h4>
          <h4>Weight: ${pet.weight}</h4>
          <h4 class="donation">Donation: ${pet.donations * 100}$</h4>
        </div>
        <!-- if there is no registered user, do not display div-->
        <div class="actionBtn">

        ${pet.isOwner
            ? html`
                <a class="edit" href="/edit/${pet._id}">Edit</a>
                <a class="delete" @click=${onDelete} href="javascript:void(0)">Delete</a>`
            : ""}
          ${pet.canDonate
            ? html`<a class="donate" @click=${onDonate} href="javascript:void(0)">Donate</a>`
            : ""}
        </div>
      </div>
    </div>
  </section>
`;


export async function detailsPage(ctx) {
  const petId = ctx.params.id;
  const userId = sessionStorage.getItem("userId");

  const pet = await data.getById(petId);
  const donations = await data.getDonations(petId);
  const userDonation = await data.userDonation(petId, userId);

  pet.donations = donations;

  if (userId) {
    pet.hasUser = true;
    pet.isOwner = pet._ownerId == userId;
    pet.canDonate = !pet.isOwner && !userDonation;
  }
  
  ctx.render(detailsTemplate(pet, onDelete, onDonate));

  async function onDelete() {
    const confirmed = confirm(
      `Are you sure you want to delete this ${pet.name}?`
    );

    if (confirmed) {
      await data.deleteById(petId);
      ctx.page.redirect("/");
    }
  }

  async function onDonate() {

    await data.addDonation(petId);

    ctx.page.redirect(`/details/${petId}`);
  }
}
