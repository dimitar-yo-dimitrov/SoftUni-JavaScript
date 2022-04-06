function addItem() {
    let inputElement = document.getElementById('newItemText');
    ulElement = document.getElementById('items');

    liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    inputElement.value = '';

    ulElement.appendChild(liElement);
}