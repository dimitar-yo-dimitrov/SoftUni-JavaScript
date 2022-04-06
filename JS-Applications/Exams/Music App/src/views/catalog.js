import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (albums, user) => html`
  <section id="catalogPage">
  <h1>All Albums</h1>

    ${albums.length > 0 
      ? albums.map(x => cardTemplate(x, user))  
      : html`<p>No Albums in Catalog!</p>`}
      
  </section>`;

const cardTemplate = (album, user) => html`
  <section id="catalogPage">
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

  export async function catalogPage(ctx) {
  const albums = await getAll();

  const user = sessionStorage.getItem('userId');

  ctx.render(catalogTemplate(albums, user));
}
