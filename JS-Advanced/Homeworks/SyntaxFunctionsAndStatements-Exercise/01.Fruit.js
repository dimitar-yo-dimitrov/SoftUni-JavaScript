function Fruit(fruit,grams,prise) {
    let weightPerKilo = grams / 1000;
    let priseForFruit = weightPerKilo * prise;

    console.log(`I need $${priseForFruit.toFixed(2)} to buy ${weightPerKilo.toFixed(2)} kilograms ${fruit}.`);
}

Fruit('orange', 2500, 1.80)