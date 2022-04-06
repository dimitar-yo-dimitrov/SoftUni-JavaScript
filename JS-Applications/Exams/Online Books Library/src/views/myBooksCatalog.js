import { getUserBooks } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (books) => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">
      ${books.length > 0
        ? books.map(cardTemplate)
        : html`<p class="no-books">No books in database!</p>`}
    </ul>
  </section>
`;

const cardTemplate = (book) => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href="/details/${book._id}">Details</a>
  </li>
`;

export async function myBooksPage(ctx) {
  const userId = sessionStorage.getItem("userId");
  //const userId = ctx.user._id;
  const books = await getUserBooks(userId);

  ctx.render(catalogTemplate(books));
}
