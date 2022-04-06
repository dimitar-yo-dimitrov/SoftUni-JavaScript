import { html } from "../lib.js";
import { register } from "../api/data.js";

//@submit=${onSubmit}
const registerTemplate = (onSubmit) => html`
  <!--Register Page-->
  <section id="registerPage">
    <form class="registerForm" @submit=${onSubmit}>
      <img src="./images/logo.png" alt="logo" />
      <h2>Register</h2>
      <div class="on-dark">
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="steven@abv.bg"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="repeatPassword">Repeat Password:</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <button class="btn" type="submit">Register</button>

      <p class="field">
        <span>If you have profile click <a href="/login">here</a></span>
      </p>
    </form>
  </section>
`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const repeatPassword = formData.get("repeatPassword").trim();

    try {
      if (email == "" || password == "") {
        throw new Error("All fields are required!");
      }

      if (password != repeatPassword) {
        throw new Error("Passwords don't match!");
      }

      await register(email, password);

      event.target.reset();

      ctx.setUserNav();
      ctx.page.redirect("/");
    } catch (error) {
      alert(error.message);
    }
  }
}
