import * as dataService from "../api/data.js";

import { html } from "../lib.js";

const searchTemplate = (onSearch, cars) => html`
  <section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
      <input
        id="search-input"
        type="text"
        name="search"
        placeholder="Enter desired production year"
      />
      <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
      ${cars
        ? cars.length > 0
          ? cars.map(cardTemplate)
          : html`<p class="no-cars">No result.</p>`
        : ""}
    </div>
  </section>
`;

const cardTemplate = (car) => html`
  <div class="listing">
    <div class="preview">
      <img src=${car.imageUrl} />
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
      <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
      </div>
      <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
      </div>
    </div>
  </div>
`;

export function searchPage(ctx) {
  ctx.render(searchTemplate(onSearch));

  async function onSearch() {
    let searchElementByYear = document.getElementById("search-input");

    try {
      if (!searchElementByYear.value || isNaN(searchElementByYear.value)) {
        throw new Error("Enter valid year!");
      }

      const cars = await dataService.getByYear(Number(searchElementByYear.value));

      ctx.render(searchTemplate(onSearch, cars));

      searchElementByYear.value = "";
    } catch (error) {
      ctx.render(searchTemplate(onSearch));

      searchElementByYear.value = "";

      alert(error.message);
    }
  }
}
