function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let result = firstNumber - secondNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}