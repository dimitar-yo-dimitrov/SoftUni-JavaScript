const aElement = document.getElementsByTagName('a');

const login = document.getElementById('login-form');

window.addEventListener('DOMContentLoaded', async () => {
    login.addEventListener('submit', onLoginSubmit);
});

async function onLoginSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    const url = `http://localhost:3030/users/login`;

    const res = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        const error = await res.json();
        return alert(error.message);
    }

    const data = await res.json();

    let userData = {
        email: data.email,
        id: data._id,
        token: res.accessToken
    }

    document.querySelector('span').value = userData.email;
    sessionStorage.setItem('userData', JSON.stringify(userData));
    login.reset();
    window.location = './index.html';
}



