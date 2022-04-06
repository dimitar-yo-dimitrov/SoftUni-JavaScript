function solve() {
    const binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    document.getElementById('selectMenuTo').appendChild(binaryOption);
    document.getElementById('selectMenuTo').appendChild(hexadecimalOption);

    const convert = () => {
        let inputNumberToConvert = document.getElementById('input').value;
        let selectMenu = document.getElementById('selectMenuTo').value;
        let result = '';

        if (selectMenu === 'binary') {
            result = Number(inputNumberToConvert).toString(2);
        } else if (selectMenu === 'hexadecimal') {
            result = Number(inputNumberToConvert).toString(16).toUpperCase();
        }

        document.getElementById('result').value = result;
    }

    const buttonElement = document.getElementsByTagName('button')[0];
    buttonElement.addEventListener("click", convert);
}