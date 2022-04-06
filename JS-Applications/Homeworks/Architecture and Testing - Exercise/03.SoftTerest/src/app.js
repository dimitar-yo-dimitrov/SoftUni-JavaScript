import { render, page } from './lib.js';
import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { loginPage } from "./views/login.js";
import { dashboardPage } from "./views/dashboard.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { logout } from "./api/data.js";

/* for testing:
import * as api from './api/data.js';
window.api = api; */

const root = document.querySelector('main');
const nav = document.querySelector('nav');

document.getElementById('logoutBtn').addEventListener('click', async () => {
  logout();
  setUserNav();
  page.redirect('/');
});

page(decorateContext);
page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/dashboard', dashboardPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.setUserNav = setUserNav;

  next();
}

function setUserNav() {
  const userId = sessionStorage.getItem('userId');

  if (userId != null) {
    [...nav.querySelectorAll('.user')].forEach(
      (e) => (e.style.display = 'list-item')
    );
    [...nav.querySelectorAll('.guest')].forEach(
      (e) => (e.style.display = 'none')
    );
  } else {
    [...nav.querySelectorAll('.user')].forEach(
      (e) => (e.style.display = 'none')
    );
    [...nav.querySelectorAll('.guest')].forEach(
      (e) => (e.style.display = 'list-item')
    );
  }

  /*   const userId = sessionStorage.getItem('userId');
  
    if (userId != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    } */
}

