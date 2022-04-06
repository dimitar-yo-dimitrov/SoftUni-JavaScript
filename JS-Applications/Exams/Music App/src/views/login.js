import { html } from '../lib.js';
import { login } from '../api/data.js';

//@submit=${onSubmit}
const loginTemplate = (onSubmit) => html`
      <section id="loginPage">
        <form @submit=${onSubmit}> 
          <fieldset>
            <legend>Login</legend>
      
            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">
      
            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">
      
            <button type="submit" class="login">Login</button>
      
            <p class="field">
              <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
          </fieldset>
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