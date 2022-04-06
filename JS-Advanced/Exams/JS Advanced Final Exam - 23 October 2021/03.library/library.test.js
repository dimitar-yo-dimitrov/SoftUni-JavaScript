const { assert, expect } = require('chai');
const { describe } = require('mocha');

let library = require('./library');

describe("library test", function () {

    describe("calcPriceOfBook test", function () {
        it("Should return error if the first parameter is not string", function () {
            assert.throws(function () { library.calcPriceOfBook(1, 1) }, Error, 'Invalid input');
            assert.throws(function () { library.calcPriceOfBook([1], 1) }, Error, 'Invalid input');
            assert.throws(function () { library.calcPriceOfBook({}, 1) }, Error, 'Invalid input');
        });

        it("Should return error if the second parameter is not number", function () {
            assert.throws(function () { library.calcPriceOfBook('test', '') }, Error, 'Invalid input');
            assert.throws(function () { library.calcPriceOfBook('test', []) }, Error, 'Invalid input');
            assert.throws(function () { library.calcPriceOfBook('test', {}) }, Error, 'Invalid input');
        });

        it("Check the price if the year is les than or equal 1980", function () {
            let firstBook = library.calcPriceOfBook('NameA', 1979);
            let secondBook = library.calcPriceOfBook('NameB', 1980);
            assert.equal(firstBook, `Price of NameA is 10.00`);
            assert.equal(secondBook, `Price of NameB is 10.00`);
        });

        it("Check the price if the year is more than 1980", function () {
            let firstBook = library.calcPriceOfBook('NameA', 1981);
            let secondBook = library.calcPriceOfBook('NameB', 2000);
            assert.equal(firstBook, `Price of NameA is 20.00`);
            assert.equal(secondBook, `Price of NameB is 20.00`);
        });
    });

    describe('findBook test', () => {
        it('If the length of the booksArr array is zero, throw an error', () => {
            let desiredBook = 'Troy';
            let booksArr = [];

            assert.throws(function () { library.findBook(booksArr, desiredBook) }, Error, "No books currently available");
        });

        it('Return book if exist in the array', () => {
            let desiredBook = 'Troy';
            let booksArr = ['Troy'];

            assert.equal(library.findBook(booksArr, desiredBook), 'We found the book you want.')
        });

        it('Return massage if the book no exist in the array', () => {
            let desiredBook = 'test';
            let booksArr = ['Troy', 'Life Style'];

            assert.equal(library.findBook(booksArr, desiredBook), 'The book you are looking for is not here!')
        });
    });

    describe('arrangeTheBooks test', () => {
        it("Should return error if the parameter is not a number", function () {
            assert.throws(function () { library.arrangeTheBooks('') }, Error, 'Invalid input');
            assert.throws(function () { library.arrangeTheBooks([1]) }, Error, 'Invalid input');
            assert.throws(function () { library.arrangeTheBooks({}) }, Error, 'Invalid input');
            assert.throws(function () { library.arrangeTheBooks(-1) }, Error, 'Invalid input');
            assert.throws(function () { library.arrangeTheBooks(1.5) }, Error, 'Invalid input');
        });

        it('The books are arranged.', () => {
            let countBooks = 40;

           expect(library.arrangeTheBooks(countBooks)).to.equal('Great job, the books are arranged.');
        });

        it('Not enough space for are arranged.', () => {
            let countBooks = 41;

            expect(library.arrangeTheBooks(countBooks)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});

//     arrangeTheBooks(countBooks) {
//         const countShelves = 5;
//         const availableSpace = countShelves * 8;

//         if (!Number.isInteger(countBooks) || countBooks < 0) {
//             throw new Error("Invalid input");
//         } else if (availableSpace >= countBooks) {
//             return "Great job, the books are arranged.";
//         } else {
//             return "Insufficient space, more shelves need to be purchased.";
//         }
//     }

// };