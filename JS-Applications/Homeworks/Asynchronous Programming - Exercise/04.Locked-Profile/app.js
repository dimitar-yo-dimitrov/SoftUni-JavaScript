async function lockedProfile() {

    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    const res = await fetch(url);
    const data = await res.json();

    const main = document.getElementById('main');

    let index = 0;

    Object.entries(data).forEach(x => {
        index++;

        const img = createElement('img', '', ['src', './iconProfile2.png', 'class', 'userIcon']);
        const labelLock = createElement('label', 'Lock');
        const lock = createElement('input', '', ['type', 'radio', 'name', `user${index}Locked`, 'value', 'lock', 'checked', '']);
        const labelUnlock = createElement('label', 'Unlock');
        const unlock = createElement('input', '', ['type', 'radio', 'name', `user${index}Locked`, 'value', 'unlock']);
        const br = createElement('br');
        const hr1 = createElement('hr');
        const labelUsername = createElement('label', 'Username');
        const inputUser = createElement('input', '', ['type', 'text', 'name', `user${index}Username`, 'value', x[1].username, 'disabled', '', 'readonly', '']);

        const hr2 = createElement('hr');
        const labelEmail = createElement('label', 'Email:');
        const inputEmail = createElement('input', '', ['type', 'email', 'name', `user${index}Email`, 'value', x[1].email, 'disabled', '', 'readonly', '']);
        const labelAge = createElement('label', 'Age:');
        const inputAge = createElement('input', '', ['type', 'email', 'name', `user${index}Age`, 'value', x[1].age, 'disabled', '', 'readonly', '']);

        // append to DOM with function
        const divHiddenInfo = createDivAndAppendChild('hiddenInfo', [
            hr2,
            labelEmail,
            inputEmail,
            labelAge,
            inputAge,
        ]);

        const button = createElement('button', 'Show more');
        button.addEventListener('click', showHideFields);

        // append to DOM with function
        const divProfile = createDivAndAppendChild('profile', [
            img,
            labelLock,
            lock,
            labelUnlock,
            unlock,
            br,
            hr1,
            labelUsername,
            inputUser,
            divHiddenInfo,
            button,
        ]);

        main.appendChild(divProfile);
    });

    document.querySelector('div.profile').remove();

    function showHideFields(ev) {

        const profile = ev.target.parentNode.children[9];
        const isActive = ev.target.parentNode.children[4].checked;

        if (isActive && ev.target.textContent === 'Show more') {

            profile.style.display = 'block';
            profile.classList.remove('hiddenInfo')
            ev.target.textContent = 'Hide it';

        } else if (isActive && ev.target.textContent === 'Hide it') {

            profile.style.display = 'none';
            profile.classList.add('hiddenInfo')
            ev.target.textContent = 'Show more';
        }
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            for (let i = 0; i < attributes.length; i += 2) {
                element.setAttribute(attributes[i], attributes[i + 1]);
            }
        }

        return element;
    }

    function createDivAndAppendChild(classList, arr) {
        const element = document.createElement('div');
        element.classList = classList;

        for (const item of arr) {
            element.appendChild(item);
        }

        return element;
    }
}