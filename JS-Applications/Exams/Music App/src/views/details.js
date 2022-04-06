import { html } from '../lib.js';
import { deleteById, getById } from '../api/data.js';

const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
  <div class="wrapper">
    <div class="albumCover">
      <img src=${album.imgUrl}>
    </div>
    <div class="albumInfo">
      <div class="albumText">

        <h1>Name: ${album.name}</h1>
        <h3>Artist: ${album.artist}</h3>
        <h4>Genre: ${album.genre}</h4>
        <h4>Price: $${album.price}</h4>
        <h4>Date: ${album.releaseDate}</h4>
        <p>Description: ${album.description}</p>
      </div>

      ${isOwner ? html`
      <div class="actionBtn">
        <a href="/edit/${album._id}" class="edit">Edit</a>
        <a class="remove" @click=${onDelete} href="javascript:void(0)">Delete</a>
      </div>`: ''}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const album = await getById(ctx.params.id);

  const isOwner = album._ownerId == sessionStorage.getItem('userId');

  ctx.render(detailsTemplate(album, isOwner, onDelete));

  async function onDelete() {
    const confirmed = confirm(`Are you sure you want to delete this ${album.name}?`);

    if (confirmed) {
      await deleteById(album._id);
      ctx.page.redirect('/catalog');
    }
  }
}
