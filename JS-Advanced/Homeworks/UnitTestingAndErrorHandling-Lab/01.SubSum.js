function solve(array, start, end) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    let startIdex = Math.max(start, 0);
    let endIndex = Math.min(end, array.length - 1)

    let subNumbers = array.slice(startIdex, endIndex + 1);

    let sum = subNumbers.reduce((acc, x) => acc + Number(x), 0);

    return sum;
}

console.log(solve([10, 'twenty', 30, 40], 0, 2));