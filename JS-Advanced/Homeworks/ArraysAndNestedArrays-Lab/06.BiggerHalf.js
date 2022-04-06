function solve(arr) {

    const result = arr.sort((a, b) => b - a);

    const half = Math.ceil(result.length / 2);
    return biggerHalf = result.slice(0, half).reverse();
}

console.log(solve([4, 7, 2, 5]));