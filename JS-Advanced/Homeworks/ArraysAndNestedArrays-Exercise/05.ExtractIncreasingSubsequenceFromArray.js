function solve(array) {
    return array.reduce(function (result, currentElement) {
        if (currentElement >= result[result.length - 1] || result.length === 0) {
            result.push(currentElement);
        }

        return result;
    }, [])
}

console.log(solve([20, 1, 2, 3, 21, 4]));