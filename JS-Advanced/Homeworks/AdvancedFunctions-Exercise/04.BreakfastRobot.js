function solution() {
    return (function manager() {

        const ingredients = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0,
        };

        const recipes = {
            apple: { carbohydrate: 1, flavour: 2 },
            lemonade: { carbohydrate: 10, flavour: 20 },
            burger: { carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
        }

        function restock(microelement, quantity) {
            ingredients[microelement] += Number(quantity);

            return `Success`;
        }

        function prepare(recipe, neededQuantity) {
            let neededIngredients = Object.entries(recipes[recipe]);

            for (const [ingredient, quantity] of neededIngredients) {

                let sortedIngredient = ingredients[ingredient] * neededQuantity;

                if (quantity > sortedIngredient) {

                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const [ingredient, quantity] of neededIngredients) {

                ingredients[ingredient] -= quantity * neededQuantity;
            }

            return `Success`;
        }

        function report() {
            return Object.entries(ingredients)
                .map(kvp => `${kvp[0]}=${kvp[1]}`)
                .join(' ');
        }

        return function (input) {
            const parts = input.split(' ');
            const command = parts[0];
            const productType = parts[1];
            const quantity = Number(parts[2]);

            switch (command) {
                case 'restock':
                    return restock(productType, quantity);
                case 'prepare':
                    return prepare(productType, quantity);
                case 'report':
                    return report();
            }
        }
    })();
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); 