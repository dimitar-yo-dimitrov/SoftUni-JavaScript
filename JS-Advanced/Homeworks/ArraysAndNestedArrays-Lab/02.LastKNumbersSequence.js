function solve(length, previous) {
    const resultArr = [1];

    for (let i = 1; i < length; i++) {
        let sum = calculatePrev();
        resultArr.push(sum);
    }

    return resultArr;

    function calculatePrev() {
        const len = resultArr.length <= previous ? resultArr.length : previous;
        let result = 0;
        for (let i = 1; i <= len; i++) {
            result += resultArr[resultArr.length - i];
        }

        return result;
    }
}

//Another solution
function numbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let numbers = result.slice().reverse();
        let currentNumber = numbers.slice(0, k).reduce((a, x) => a + x, 0);
        result.push(currentNumber);
    }

    return result;
}

console.log(solve(6, 3));
console.log(numbersSequence(6, 3));