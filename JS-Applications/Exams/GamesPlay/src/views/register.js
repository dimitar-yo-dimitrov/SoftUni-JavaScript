import { html } from '../lib.js';
import { register } from '../api/data.js';

//@submit=${onSubmit}
const registerTemplate = (onSubmit) => html` 
<section id="register-page" class="content auth">
  <form id="register" @submit=${onSubmit}>
    <div class="container">
      <div class="brand-logo"></div>
      <h1>Register</h1>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="maria@email.com">

      <label for="pass">Password:</label>
      <input type="password" name="password" id="register-password">

      <label for="con-pass">Confirm Password:</label>
      <input type="password" name="confirm-password" id="confirm-password">

      <input class="btn submit" type="submit" value="Register">

      <p class="field">
        <span>If you already have profile click <a href="/login">here</a></span>
      </p>
    </div>
  </form>
</section>`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('confirm-password').trim();

    try {
      if (email == '' || password == '') {
        throw new Error('All fields are required!');
      }

      if (email.length < 3 || password.length < 3) {
        throw new Error('The email and password should be at least 3 characters long!');
      }

      if (password != repeatPassword) {
        throw new Error('Passwords don\'t match!');
      }

      await register(email, password);

      event.target.reset();

      ctx.setUserNav();
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  }
}
