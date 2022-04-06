function solve(nestedArray) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = nestedArray[0].length - 1;

    nestedArray.forEach(element => {
        firstDiagonal += element[firstIndex++];
        secondDiagonal += element[secondIndex--];
    });

    console.log(firstDiagonal + ' ' + secondDiagonal);
}

//Another solution
function findDiagonalSum(nestedArray) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < nestedArray.length; i++) {
        firstDiagonal += nestedArray[i][i];
        secondDiagonal += nestedArray[i][nestedArray.length - i - 1]
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

solve([[20, 40],
[10, 60]])

findDiagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])