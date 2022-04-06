function solve(input) {
    let towns = {};

    for (const info of input) {
        // let infoArr = info.split(' <-> ');
        // let townName = infoArr[0];
        // let population = Number(infoArr[1]);

        let [townName,populationText] = info.split(' <-> ');
        let population = Number(populationText);

        if (!towns[townName]) {
            towns[townName] = 0;
        }

        towns[townName] += population;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}

solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);