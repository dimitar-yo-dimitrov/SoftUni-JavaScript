function solve(numbers) {
    let numbersOfEvenPosition = numbers.filter((x, i) => i % 2 === 0);

    return numbersOfEvenPosition.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));