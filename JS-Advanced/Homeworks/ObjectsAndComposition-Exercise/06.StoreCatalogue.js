function solve(array) {
    let sortedResult = array.sort((a, b) => a.localeCompare(b))

    let current = [];
    let char = '';

    for (let i = 0; i < sortedResult.length; i++) {
        current = sortedResult[i].split(' : ');
        if (sortedResult[i][0] !== char) {
            console.log(sortedResult[i][0]);
        }

        console.log(`  ${current[0]}: ${current[1]}`);
        char = sortedResult[i][0];
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);