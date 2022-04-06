import { render, page } from "./lib.js";

import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { catalogPage } from "./views/catalog.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myProfilePage } from "./views/myCatalog.js";
import { logout } from "./api/data.js";

const root = document.querySelector("main");
const nav = document.querySelector('nav');

document.getElementById("logoutBtn").addEventListener("click", () => {
  logout();
  setUserNav();
  page.redirect("/");
});

page(decorateContext);
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/catalog", catalogPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/myProfile", myProfilePage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.setUserNav = setUserNav;

  next();
}

function setUserNav() {
  const email = sessionStorage.getItem('email');

  if (email != null) {
      document.getElementById('welcomeMessage').textContent = `Welcome, ${email}`;

      [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'list-item');
      [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
  } else {
      [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
      [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'list-item');
  }
}
