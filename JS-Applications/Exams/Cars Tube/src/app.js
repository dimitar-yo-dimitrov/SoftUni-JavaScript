import { render, page } from "./lib.js";

import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myProfilePage } from "./views/myProfile.js";
import { searchPage } from "./views/search.js";
import { logout } from "./api/data.js";

const root = document.getElementById("site-content");
const nav = document.querySelector("nav");

document.getElementById("logoutBtn").addEventListener("click", async () => {
  logout();
  setUserNav();
  page.redirect("/");
});

page(decorateContext);
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/catalog", catalogPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/myProfile", myProfilePage);
page("/search", searchPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.setUserNav = setUserNav;

  next();
}

function setUserNav() {
  // const email = sessionStorage.getItem('email');

  // if (email != null) {
  //     document.getElementById('welcomeMessage').textContent = `Welcome, ${email}`;

  //     [...nav.getElementById('.profile')].forEach(e => e.style.display = 'list-item');
  //     [...nav.getElementById('.guest')].forEach(e => e.style.display = 'none');
  // } else {
  //     [...nav.getElementById('.profile')].forEach(e => e.style.display = 'none');
  //     [...nav.getElementById('.guest')].forEach(e => e.style.display = 'list-item');
  // }

  const userId = sessionStorage.getItem("userId");
  const username = sessionStorage.getItem("username");

  if (userId != null) {
    document.getElementById("welcome").textContent = `Welcome, ${username}`;
    document.getElementById("profile").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
  } else {
    document.getElementById("profile").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
  }
}
