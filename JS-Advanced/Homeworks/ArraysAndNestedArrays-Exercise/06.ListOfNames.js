function solve(array) {
    array.sort((a, b) => a.localeCompare(b));

    for (let index = 1; index <= array.length; index++) {
        console.log(`${index}.${array[index - 1]}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"]);