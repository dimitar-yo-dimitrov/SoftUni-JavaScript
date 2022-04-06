function dayOfWeek(firstNum, secondNum, operator) {
    let result;
    switch (operator) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break;
    }
    console.log(result);
}

dayOfWeek(3, 5.5, '*');
dayOfWeek(5, 6, '+');