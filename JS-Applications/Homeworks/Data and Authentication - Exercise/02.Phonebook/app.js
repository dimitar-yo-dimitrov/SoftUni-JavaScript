function attachEvents() {

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', async () => {
        const person = document.getElementById('person');
        const phone = document.getElementById('phone');

        if (person.value && phone.value) {
            const record = {
                person: person.value,
                phone: phone.value,
            };

            await createNewPhoneRecord(record);

            person.value = '';
            phone.value = '';

            await loadPhonebook();
        }
    });

    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadPhonebook);
}

async function loadPhonebook() {
    const url = `http://localhost:3030/jsonstore/phonebook`;

    const res = await fetch(url);
    const data = await res.json();

    const phonebook = document.getElementById('phonebook');

    phonebook.innerHTML = '';

    Object.values(data).forEach(p => {
        const li = createElement('li', `${p.person}: ${p.phone}`);
        const deleteBtn = createElement('button', 'Delete', ['id', p._id]);

        li.appendChild(deleteBtn);
        phonebook.appendChild(li);

        deleteBtn.addEventListener('click', deletePhone);
    });
}

async function deletePhone(ev) {
  const url = `http://localhost:3030/jsonstore/phonebook/${ev.target.id}`;

    const res = await fetch(url, {
        method: 'delete',
    });

    await loadPhonebook();
}

async function createNewPhoneRecord(record) {
    const url = `http://localhost:3030/jsonstore/phonebook`;

    const res = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(record),
    });
}

function createElement(type, content, attributes = []) {
    const element = document.createElement(type);

    if (content) {
        element.textContent = content;
    }

    if (attributes.length > 0) {
        element.setAttribute(attributes[0], attributes[1]);
    }

    return element;
}

attachEvents();