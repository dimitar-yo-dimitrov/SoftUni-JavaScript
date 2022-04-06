function greatestCommonDivisor(a, b) {
    let firstNum = Number(a);
    let secondNum = Number(b);

    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
        } else {
            secondNum -= firstNum;
        }
    }

    console.log(firstNum);
}

greatestCommonDivisor(15, 5)