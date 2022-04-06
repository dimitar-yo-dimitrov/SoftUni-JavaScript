function addItem() {
    let inputTextElement = document.getElementById('newItemText').value;
    let inputValueElement = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.text = inputTextElement;
    option.value = inputValueElement;

    let menu = document.getElementById('menu');

    if (inputTextElement !== '' && inputValueElement !== '') {
        menu.appendChild(option);
    };

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}