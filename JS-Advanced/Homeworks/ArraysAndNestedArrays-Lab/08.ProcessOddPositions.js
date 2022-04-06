function solve(arr) {
    return arr
        .filter((x, i) => i % 2 !== 0)
        .map(num => num * 2)
        .reverse()
        .join(' ');
}

console.log(solve([4, 7, 2, 5]));