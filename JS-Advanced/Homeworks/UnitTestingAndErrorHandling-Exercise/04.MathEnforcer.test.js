const { assert } = require('chai');
const { it } = require('mocha');
let mathEnforcer = require('./04.MathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.addFive(''), undefined)
        });

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.addFive([]), undefined)
        });

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.addFive({}), undefined)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.addFive(-5), 0)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.addFive(5), 10)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5)
        });
    });
    describe('subtractTen', () => {

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.subtractTen(''), undefined)
        });

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined)
        });

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.subtractTen(20.5), 10.5)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10)
        });
    });
    describe('sum', () => {

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.sum('', 1), undefined)
        });

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.sum(1, ''), undefined)
        });

        it('Should return correct result with a non-number parameter', () => {
            assert.equal(mathEnforcer.sum({}, 2), undefined)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.sum(-5, 10), 5)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.sum(20.5, 1.5), 22)
        });

        it('Should return correct result with a number parameter', () => {
            assert.equal(mathEnforcer.sum(20.5, 1.8), 22.3)
        });
    });
});