import { html } from "../lib.js";
import { register } from "../api/data.js";

//@submit=${onSubmit}
const registerTemplate = (onSubmit) => html`
  <section id="register">
    <div class="container">
      <form id="register-form" @submit=${onSubmit}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <p>Username</p>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <p>Password</p>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <p>Repeat Password</p>
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
          required
        />
        <hr />

        <input type="submit" class="registerbtn" value="Register" />
      </form>
      <div class="signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
      </div>
    </div>
  </section>
`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const username = formData.get("username").trim();
    const password = formData.get("password").trim();

    try {
      if (username == "" || password == "") {
        throw new Error("All fields are required!");
      }

      await register(username, password);

      event.target.reset();

      ctx.setUserNav();
      ctx.page.redirect("/catalog");
    } catch (error) {
      alert(error.message);
    }
  }
}
