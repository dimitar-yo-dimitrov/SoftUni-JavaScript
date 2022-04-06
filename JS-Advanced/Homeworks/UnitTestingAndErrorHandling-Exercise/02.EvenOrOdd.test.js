const { assert } = require('chai');
const { it } = require('mocha');

let isOddOrEven = require('./02.EvenOrOdd');

describe('EvenOrOdd', () => {
    it('Should return undefine if the input is not string', () => {
       
        assert.equal(isOddOrEven(1), undefined)
        assert.equal(isOddOrEven[{}], undefined)
    });
    it('Should return even if the input is a string with even length', () => {
       
        assert.equal(isOddOrEven('even'), 'even')
    });
    it('Should return odd if the input is a string with odd length', () => {
       
        assert.equal(isOddOrEven('odd'), 'odd')
    });
});