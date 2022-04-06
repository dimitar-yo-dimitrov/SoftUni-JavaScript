import { html } from '../lib.js';
import { login } from '../api/data.js';

//@submit=${onSubmit}
const loginTemplate = (onSubmit) => html`
      <section id="login-page" class="auth">
        <form id="login" @submit=${onSubmit}>
      
          <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
      
            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
              <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
          </div>
        </form>
      </section>`;

export async function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try {
      await login(email, password);

      event.target.reset();

      ctx.setUserNav();
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  }
}