import { html } from '../lib.js';
import { create } from '../api/data.js';

// @submit=${onSubmit}
const createTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
  <form id="create" @submit=${onSubmit}>
    <div class="container">

      <h1>Create Game</h1>
      <label for="leg-title">Legendary title:</label>
      <input type="text" id="title" name="title" placeholder="Enter game title...">

      <label for="category">Category:</label>
      <input type="text" id="category" name="category" placeholder="Enter game category...">

      <label for="levels">MaxLevel:</label>
      <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

      <label for="game-img">Image:</label>
      <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

      <label for="summary">Summary:</label>
      <textarea name="summary" id="summary"></textarea>
      <input class="btn submit" type="submit" value="Create Game">
    </div>
  </form>
</section>`;

export async function createPage(ctx) {

  ctx.render(createTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get('title').trim();
    const category = formData.get('category').trim();
    const maxLevel = formData.get('maxLevel').trim();
    const imageUrl = formData.get('imageUrl').trim();
    const summary = formData.get('summary').trim();

    try {
      if (!title || !category || !maxLevel || !imageUrl || !summary) {
        throw new Error('All fields are required!');
      }

      await create({
        title,
        category,
        maxLevel,
        imageUrl,
        summary
      });

      event.target.reset();

      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  }
}
