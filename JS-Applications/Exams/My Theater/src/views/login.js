import { html } from "../lib.js";
import { login } from "../api/data.js";

//@submit=${onSubmit}
const loginTemplate = (onSubmit) => html`
  <section id="loginaPage">
    <form class="loginForm" @submit=${onSubmit}>
      <h2>Login</h2>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="steven@abv.bg"
          value=""
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <button class="btn" type="submit">Login</button>

      <p class="field">
        <span
          >If you don't have profile click <a href="/register">here</a></span
        >
      </p>
    </form>
  </section>
`;

export async function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    try {
      if (email == "" || password == "") {
        throw new Error("All fields are required!");
      }

      await login(email, password);

      event.target.reset();

      ctx.setUserNav();
      ctx.page.redirect("/");
    } catch (error) {
      alert(error.message);
    }
  }
}
