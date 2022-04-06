function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[input.length - 1]);

    let result = a + b;

    console.log(result);
}

function sumFirstLast(numbers) {
    return Number(numbers[0]) + Number(numbers[numbers.length - 1]);
}

solve(['20', '30', '40']);
console.log(sumFirstLast(['5', '10']));