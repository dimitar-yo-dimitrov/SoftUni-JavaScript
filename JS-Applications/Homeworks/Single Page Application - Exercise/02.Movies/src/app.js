import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { updateNav } from "./views/util.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

const routers = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage,
    '/details': detailsPage,
    '/edit': editPage,
};

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(event) {
    if (event.target.tagName == 'A' && event.target.href) {
        event.preventDefault();

        const url = new URL(event.target.href);

        const view = routers[url.pathname]

        if (typeof view == 'function') {
            view();
        }
    }
}

function logout() {
    localStorage.removeItem('user');
    updateNav();
}

//start app in catalog view
updateNav();
homePage();