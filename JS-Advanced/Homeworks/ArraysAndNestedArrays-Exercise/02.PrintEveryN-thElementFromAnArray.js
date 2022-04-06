function solve(array, step) {
    let result = [];

    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }

    return result;
}

console.log(solve(['dsa','asd', 'test', 'tset'], 2));