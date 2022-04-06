function deleteByEmail() {
    let inputEmailElement = document.querySelector('input[name="email"]').value;
    let getEmailElements = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));
    let resultElement = document.getElementById('result');

    let targetElement = getEmailElements.find(x => x.textContent === inputEmailElement);

    if (targetElement) {
        targetElement.parentElement.remove();

        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}