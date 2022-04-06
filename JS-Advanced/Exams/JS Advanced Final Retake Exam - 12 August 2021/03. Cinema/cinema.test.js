const { assert } = require('chai');
let cinema = require('./cinema');

describe('Tests cinema', () => {

    describe('Tests	showMovies(movieArr)', () => {

        it('Should to includes the movieArr array available movies', () => {
            let movieArr = ['Joker', 'King Kong'];

            assert.equal(cinema.showMovies(movieArr), movieArr.join(', '));
        });

        it('Should if the length of the movieArr array is zero, returns the string', () => {

            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        });
    });

    describe('Tests ticketPrice(projectionType)', () => {

        it('Should return the price according to the type', () => {

            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        });

        it('Should the submitted projectionType is present in the schedule', () => {

            assert.throws(() => { cinema.ticketPrice('Test') }, Error, 'Invalid projection type.');
        });
    });

    describe('Tests swapSeatsInHall: function(firstPlace, secondPlace)', () => {

        it('Invalid input', () => {

            assert.equal(cinema.swapSeatsInHall(1, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-1, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, -1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(21, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('21', 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0, 0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall({}, 0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall([{}], 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(undefined, undefined), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(10), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(10, undefined), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(undefined, 10), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(100, 20), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(18, 201), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(10, 21), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(10, 0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0, 10), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0, 10.5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0, 10.5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(2.5, 10), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(2.5, 10.5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-2, 0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-2.5, 10), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-2.5, -10), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('-2.5', '10'), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('10'), 'Unsuccessful change of seats in the hall.');
        });

        it('Should swaps the seat number ', () => {

            assert.equal(cinema.swapSeatsInHall(1, 2), 'Successful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(12, 2), 'Successful change of seats in the hall.');
        });
    });
});

//     swapSeatsInHall: function(firstPlace, secondPlace) {

//         if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
//             !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
//             return "Unsuccessful change of seats in the hall.";
//         } else {
//             return "Successful change of seats in the hall.";
//         }

//     }
// }