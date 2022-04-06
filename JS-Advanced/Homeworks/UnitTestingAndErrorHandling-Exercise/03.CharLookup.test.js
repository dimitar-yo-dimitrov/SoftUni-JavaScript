const { assert } = require('chai');
const { it } = require('mocha');
let lookupChar = require('./03.CharLookup');

describe('Char Lookup', () => {
    it('Should returning "undefine" if the input is not string', () => {

        assert.equal(lookupChar(1, 1), undefined);
        assert.equal(lookupChar[{}], undefined);
    });
    it('Should returning "undefine" if the input is not a number', () => {

        assert.equal(lookupChar('test', []), undefined);
        assert.equal(lookupChar('test', [{}]), undefined);
        assert.equal(lookupChar('test', 0.5), undefined);
    });
    it('Should returning "Incorrect index" if the value of the index is incorrect', () => {

        assert.equal(lookupChar('test', -1), "Incorrect index");
        assert.equal(lookupChar('test', 5), "Incorrect index");
    });
    it('Should returning the char at the specified index', () => {

        assert.equal(lookupChar('test', 1), 'e');
    });
    it('Should returning the char at the specified index', () => {

        assert.equal(lookupChar('test', 3), 't');
    });
});