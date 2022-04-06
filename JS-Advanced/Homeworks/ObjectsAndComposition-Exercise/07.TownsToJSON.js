function solve(input) {
    let towns = input.reduce((acc, curr, i, arr) => {
        let obj = {};
        if (i) {
            let townProp = arr[0].split('|').filter(x => x).map(x => x.trim());
            let townValue = curr.split('|').filter(x => x).map(x => x.trim());
            obj[townProp[0]] = townValue[0];
            obj[townProp[1]] = Number(Number(townValue[1]).toFixed(2))
            obj[townProp[2]] = Number(Number(townValue[2]).toFixed(2))

            acc.push(obj);
        }

        return acc;
    }, []);

    return JSON.stringify(towns);
}

console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
))