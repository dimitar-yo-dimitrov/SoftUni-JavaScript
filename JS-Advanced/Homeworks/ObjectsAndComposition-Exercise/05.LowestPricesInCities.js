function solve(array) {
    let result = [];

    for (const product of array) {
        let [town, productName, price] = product.split(' | ');
        let objProduct = {
            product: productName,
            price: Number(price),
            town,
        };

        if (!result.some(p => p.product === productName)) {
            result.push(objProduct);
        }

        let objectToCompare = result.find(p => p.product === productName);

        if (price < objectToCompare.price) {
            objectToCompare.price = price;
            objectToCompare.town = town;
        }
    }

    for (const product of result) {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}

solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)