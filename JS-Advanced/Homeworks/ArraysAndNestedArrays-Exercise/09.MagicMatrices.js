function solve(nestedArray) {
    for (let row = 0; row < nestedArray.length - 1; row++) {
        let firstRowSum = nestedArray[row].reduce((a, b) => a + b, 0);
        let secondRowSum = nestedArray[row + 1].reduce((a, b) => a + b, 0);

        let firstColSum = 0;
        let secondColSum = 0;

        for (let col = 0; col < nestedArray.length; col++) {
            firstColSum += nestedArray[row][col];
            secondColSum += nestedArray[row + 1][col];
        }

        if (firstRowSum !== secondRowSum || firstColSum !== secondColSum) {
            return false;
        }
    }

    return true;
}

console.log(solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));