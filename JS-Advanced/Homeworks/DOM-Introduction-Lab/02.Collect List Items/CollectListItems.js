function extractText() {
    let ulElement = document.getElementById('items');

    let showText = document.getElementById('result');
    showText.textContent = ulElement.textContent;
}