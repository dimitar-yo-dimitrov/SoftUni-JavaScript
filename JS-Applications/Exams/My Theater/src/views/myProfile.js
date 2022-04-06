import { getUserTheaters } from "../api/data.js";
import { html } from "../lib.js";

const myCatalogTemplate = (theaters, email) => html`
  <section id="profilePage">
    <div class="userInfo">
      <div class="avatar">
        <img src="./images/profilePic.png" />
      </div>
      <h2>${email}</h2>
    </div>
    <div class="board">

      ${theaters.length > 0
        ? theaters.map(cardTemplate)
        : html` <div class="no-event">
            <p>This user has no events yet!</p>
          </div>`}
          
    </div>
  </section>
`;

const cardTemplate = (theater) => html`
  <div class="eventBoard">
    <div class="event-info">
      <img src=${theater.imageUrl} />
      <h2>${theater.title}</h2>
      <h6>${theater.date}</h6>
      <a href="/details/${theater._id}" class="details-button">Details</a>
    </div>
  </div>
`;

export async function myProfilePage(ctx) {
  const userId = sessionStorage.getItem("userId");
  const email = sessionStorage.getItem("email");

  const theaters = await getUserTheaters(userId);

  ctx.render(myCatalogTemplate(theaters, email));
}
