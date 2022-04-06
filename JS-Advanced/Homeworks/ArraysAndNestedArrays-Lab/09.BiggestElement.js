function solve(nestedArray) {
    let maxNum = 0;
    return maxNum = Math.max(...[].concat(...nestedArray));
}

console.log(solve([[20, 50, 10],
[8, 33, 145]]));