import { html } from "../lib.js";
import * as data from "../api/data.js";

// @click=${onDelete}
const detailsTemplate = (book, onDelete, onLike) => html`
  <!-- Details Page ( for Guests and Users ) -->
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src=${book.imageUrl} /></p>
      <div class="actions">
        ${book.isOwner
          ? html` <div class="buttons">
              <a href="/edit/${book._id}" class="button">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="button"
                >Delete</a
              >
            </div>`
          : ""}
        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${book.canLike
          ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
          : ''}
        <!-- ( for Guests and Users )  -->
        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${book.likes}</span>
        </div>
        <!-- Bonus -->
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const bookId = ctx.params.id;

  const book = await data.getById(bookId);

  const user = sessionStorage.getItem("userId");

  const [likes, userLiked] = await Promise.all([
    data.getLikes(bookId),
    data.userLiked(bookId, user),
  ]);

  book.likes = likes;
  
  if (user) {
    book.hasUser = true;
    book.isOwner = book._ownerId == sessionStorage.getItem("userId");
    book.canLike = !book.isOwner && !userLiked;
  }
  ctx.render(detailsTemplate(book, onDelete, onLike));

  async function onDelete() {
    const confirmed = confirm(
      `Are you sure you want to delete this ${book.title}?`
    );

    if (confirmed) {
      await data.deleteById(bookId);
      ctx.page.redirect("/");
    }
  }

  async function onLike() {
    await data.addLike(bookId);
    ctx.page.redirect(`/details/${bookId}`);
  }
}
