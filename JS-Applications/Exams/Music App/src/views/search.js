import * as dataService from '../api/data.js';

import { html } from '../lib.js';

const searchTemplate = (onSearch, data, user) => html`
  <section id="searchPage">
  <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>

    ${data.length > 0 
      ? data.map(x => cardTemplate(x, user))  
      : html`<p class="no-result">No result.</p>`}
      
  </section>`;

const cardTemplate = (album, user) => html`
  <section id="search-result">
    <div class="card-box">
      <img src=${album.imgUrl}>
      <div>
        <div class="text-center">
          <p class="name">Name: ${album.name}</p>
          <p class="artist">Artist: ${album.artist}</p>
          <p class="genre">Genre: ${album.genre}</p>
          <p class="price">Price: $${album.price}</p>
          <p class="date">Release Date: ${album.releaseDate}</p>
        </div>

        ${user != null ? html`
        <div class="btn-group">
          <a href="/details/${album._id}" id="details">Details</a>
        </div>` : ''}
      </div>
    </div>
  </section>
    `;

export function searchPage(ctx) {

 function onSearch() {

    const searchElement = document.getElementById('search-input');
  
    dataService.search(searchElement.value)
    .then(data => {
        const user = sessionStorage.getItem('userId');
        ctx.render(searchTemplate(onSearch, data, user));
    });
 }

  ctx.render(searchTemplate(onSearch, []));
}