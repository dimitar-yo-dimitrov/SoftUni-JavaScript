const { expect } = require('chai');
const { it } = require('mocha');
const sum = require('./04.SumOfNumbers');

describe('Sum of numbers', () => {
    it('should sum work correctly', () => {
        let numbers = [1, 2, 3, 5];
        let expectedSum = 11;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });

    it('sum single number', () => {
        expect(sum([3])).to.equal(3);
    });
});