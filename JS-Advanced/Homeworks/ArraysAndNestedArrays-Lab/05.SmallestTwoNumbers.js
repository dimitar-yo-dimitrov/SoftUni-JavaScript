function solve(arr) {
    let result = [];

    result = arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');

    console.log(result);
}

solve([3, 0, 10, 4, 7, 3])