function solve(arrayFlavors, start, end) {
    let startIdx = arrayFlavors.indexOf(start);
    let endIdx = arrayFlavors.indexOf(end);

    return arrayFlavors.slice(startIdx, endIdx + 1);
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));