function sameNumbers(input) {
    let inputNumber = input.toString();
    let sum = 0;
    let isSame = true;
    let firstNum = inputNumber[0];

    for (let index = 0; index < inputNumber.length; index++) {
        sum += Number(inputNumber[index]);

        if (firstNum !== inputNumber[index]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(22222)