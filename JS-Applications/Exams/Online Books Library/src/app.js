import { render, page } from "./lib.js";

import { dashboardPage } from "./views/dashboard.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myBooksPage } from "./views/myBooksCatalog.js";
import { logout } from "./api/data.js";

/* for testing:
import * as api from './api/data.js';
window.api = api; */

const root = document.getElementById('site-content');
//const nav = document.querySelector('nav');

document.getElementById('logoutBtn').addEventListener('click', () => {
  logout();
  setUserNav();
  page.redirect('/');
});

page(decorateContext);
page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myBooks', myBooksPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.setUserNav = setUserNav;

  next();
}

function setUserNav() {
  /*   const user = sessionStorage.getItem('userId');
  
    if (user != null) {
      [...nav.getElementById('user')].forEach(
        (e) => (e.style.display = 'inline-block')
      );
      [...nav.getElementById('guest')].forEach(
        (e) => (e.style.display = 'none')
      );
    } else {
      [...nav.querySelectorAll(".user")].forEach(
        (e) => (e.style.display = 'none')
      );
      [...nav.querySelectorAll('.guest')].forEach(
        (e) => (e.style.display = 'inline-block')
      );
    } */

  const userId = sessionStorage.getItem('userId');

  if (userId != null) {
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('guest').style.display = 'none';
    document.querySelector('div#user > span').textContent = `Welcome, ${sessionStorage.getItem('email')}`;
  } else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'inline-block';
  }
}
