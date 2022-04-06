
const { assert } = require('chai');
let dealership = require('./03.Dealership');

describe("Tests dealership", function () {
    describe('Tests	newCarCost(oldCarModel, newCarPrice)', function () {

        it('checks if you are returning your old car to the dealers or not', function () {
            assert.equal(dealership.newCarCost('Audi A4 B8', 50000), 35000);
            assert.equal(dealership.newCarCost('Honda', 50000), 50000);
        });
    });

    describe('Tests	carEquipment(extrasArr, indexArr)', function () {

        it('the function returns an array with all the selected extras', function () {
            assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 3]), ['heated seats', 'navigation']);
        });
    });

    describe('Tests	euroCategory(category)', function () {

        it('checks the ecology of your new car', function () {
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
            assert.equal(dealership.euroCategory(3), `Your euro category is low, so there is no discount from the final price!`);
        });
    });
});


//     euroCategory: function (category) {
//         if (category >= 4) {
//             let price = this.newCarCost('Audi A4 B8', 30000);
//             let total = price - (price * 0.05)
//             return `We have added 5% discount to the final price: ${total}.`;
//         } else {
//             return 'Your euro category is low, so there is no discount from the final price!';
//         }
//     }
// }
