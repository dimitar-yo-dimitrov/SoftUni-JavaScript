function solve(matrix) {
    let countOfNeighbor = 0;

    matrix.forEach((row, i) => {
        row.forEach((element, j) => {
            if (element === row[j + 1]) {
                countOfNeighbor++;
            } if (matrix[i + 1] && element === matrix[i + 1][j]) {
                countOfNeighbor++;
            }
        })
    });

    return countOfNeighbor;
}

function sol(input, st) {
    let result = [];

    for (let index = 0; index < input.length; index += st) {
        result += input[index];
    }

    return result;
}

console.log(sol[5, 10, 20, 30]);

console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));