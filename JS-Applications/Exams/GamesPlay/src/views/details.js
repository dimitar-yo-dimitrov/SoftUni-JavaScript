import { html } from "../lib.js";
import {
  createComment,
  deleteById,
  getById,
  getComments,
} from "../api/data.js";

// @click=${onDelete}
const detailsTemplate = (
  game,
  isOwner,
  onDelete,
  onComment,
  comments,
  user
) => html` <section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">
    <div class="game-header">
      <img class="game-img" src=${game.imageUrl} />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>

    <p class="text">${game.summary}</p>

    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
      <h2>Comments:</h2>

      <ul>
        ${comments.length > 0
          ? comments.map(commentCard)
          : html`<p class="no-comment">No comments.</p>`
         }
      </ul>
    </div>

    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${isOwner
      ? html` <div class="buttons">
          <a href="/edit/${game._id}" class="button">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)"  class="button">Delete</a>
        </div>`
      : ""}
  </div>

  <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
  ${user && user != game._ownerId
    ? html` <article class="create-comment">
        <label>Add new comment:</label>
        <form @click=${onComment} class="form">
          <textarea
            id="commentInput"
            name="comment"
            placeholder="Comment......"
          ></textarea>
          <input class="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>`
    : ""}
</section>`;

const commentCard = (comment) => html` 
<li class="comment">
  <p>Content: ${comment.comment}</p>
</li>`;

export async function detailsPage(ctx) {
  const gameId = ctx.params.id;

  const game = await getById(gameId);

  const isOwner = game._ownerId == sessionStorage.getItem("userId");
  const user = sessionStorage.getItem("userId");

  let comments = await getComments(gameId);

  async function onDelete() {
    const confirmed = confirm(
      `Are you sure you want to delete this ${game.title}?`
    );

    if (confirmed) {
      await deleteById(gameId);
      ctx.page.redirect("/");
    }
  }

  async function onComment() {
    let comment = document.getElementById("commentInput").value;

    if (comment) {
      await createComment(gameId, comment);
    }
  }

  ctx.render(
    detailsTemplate(game, isOwner, onDelete, onComment, comments, user)
  );
}
