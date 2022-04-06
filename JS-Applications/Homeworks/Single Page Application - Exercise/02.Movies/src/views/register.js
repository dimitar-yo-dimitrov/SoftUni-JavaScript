import { homePage } from "./home.js";
import { showView, updateNav } from "./util.js";

const section = document.querySelector('#form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function registerPage() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    await register(email, password, repeatPassword);
    form.reset();

    updateNav();
    homePage();
}

async function register(email, password, repeatPassword) {
    try {
        if (!email || !password) {
            return alert('All fields are required!');
        } 
        
        if (password.length < 6) {
            return alert('The password should be at least 6 characters long!');
        }

        if (password !== repeatPassword) {
            return alert('Password don\'t match!');
        }

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message)
        }

        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));

    } catch (error) {
        alert(error.message);
    }
}