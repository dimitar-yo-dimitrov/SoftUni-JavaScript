function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElementToAdd = document.getElementById('newItemText');

    liElement = document.createElement('li');
    liElement.textContent = inputElementToAdd.value;
    inputElementToAdd.value = '';

    let deleteButtonElement = document.createElement('a');
    deleteButtonElement.href = '#';
    deleteButtonElement.textContent = '[Delete]';
    deleteButtonElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    liElement.appendChild(deleteButtonElement);
    itemsElement.appendChild(liElement);
}