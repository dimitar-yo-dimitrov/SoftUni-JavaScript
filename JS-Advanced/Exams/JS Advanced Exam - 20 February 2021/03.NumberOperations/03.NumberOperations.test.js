const { assert } = require('chai');
const { it } = require('mocha');
let numberOperations = require('./03.NumberOperations');

describe('Tests …', function () {

    describe('Tests	powNumber(num)', function () {

        it('Should the function returns the power of the given number', function () {
            assert.equal(numberOperations.powNumber(2), 4);
            assert.equal(numberOperations.powNumber(2.5), 6.25);
        });
    });
    describe('Tests numberChecker(input)', function () {

        it('Should the function parses the input to number, and validates it', function () {
            assert.throws(() => numberOperations.numberChecker(NaN), Error, 'The input is not a number!');
        });

        it('Should the function checks if it is lower than 100.', function () {
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
        });

        it('Should the function checks if it is greater or equal to 100.', function () {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
        });
    });

    describe('Tests	sumArrays(array1, array2)', function () {

        it('Should the function returns new array', function () {

            assert.deepEqual(numberOperations.sumArrays([2, 4], [3, 5]), [5, 9]);
            assert.deepEqual(numberOperations.sumArrays([2, 4, 5], [3, 5]), [5, 9, 5]);
            assert.deepEqual(numberOperations.sumArrays([2, 4], []), [2, 4]);
            assert.deepEqual(numberOperations.sumArrays([], [3, 5]), [3, 5]);
        });
    });
});

//     sumArrays: function (array1, array2) {

//         const longerArr = array1.length > array2.length ? array1 : array2;
//         const rounds = array1.length < array2.length ? array1.length : array2.length;

//         const resultArr = [];

//         for (let i = 0; i < rounds; i++) {
//             resultArr.push(array1[i] + array2[i]);
//         }

//         resultArr.push(...longerArr.slice(rounds));

//         return resultArr
//     }
// };