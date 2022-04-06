
const { assert } = require('chai');
let ChristmasMovies = require('./02.ChristmasMovies');

describe("Tests ChristmasMovies", function () {
    let christmas = null;

    beforeEach(() => {
        christmas = new ChristmasMovies();
    });

    describe('Initializing the class', function () {

        it('Should have a empty movieCollection', function () {
            assert.deepEqual(christmas.movieCollection, []);
        });

        it('Should have a empty watched', function () {
            assert.deepEqual(christmas.watched, {});
        });

        it('Should have a empty actors', function () {
            assert.deepEqual(christmas.actors, []);
        });
    });

    describe('Tests buyMovie(movieName, actors)', () => {
        it('unique actors ', () => {
            assert.deepEqual(christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']), `You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!`);
        });

        it('if movie exist throw error', () => {
            christmas.movieCollection.push({ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] });

            assert.throws(() => christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']), Error, `You already own Home Alone in your collection!`);
        });
    });

    describe('Tests discardMovie(movieName)', () => {
        it('if movie is not exist throw error', () => {
            assert.throws(() => christmas.discardMovie('Grinch'), Error, `Grinch is not at your collection!`);
        });

        it('if watched movie and if exist removed', () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');

            assert.equal(christmas.discardMovie('Home Alone'), `You just threw away Home Alone!`);
            assert.isFalse(christmas.watched.hasOwnProperty('Home Alone'));
            assert.isFalse(christmas.movieCollection.some(x => x.name === 'Home Alone'));
        });

        it('if not watched movie and if exist removed and throw error', () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);

            assert.throws(() => christmas.discardMovie('Home Alone'), Error, `Home Alone is not watched!`);

            assert.isFalse(christmas.movieCollection.some(x => x.name === 'Home Alone'));
        });
    });

    describe('Tests watchMovie(movieName)', () => {
        it('Should if you do not have the movie in the collection, an error is thrown', () => {
            assert.throws(() => christmas.watchMovie('Grinch'), Error, `No such movie in your collection!`);
        });

        it('If you have the movie in collection increase the counter', () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');

            assert.deepEqual(christmas.watched, { 'Home Alone': 1 });

            christmas.watchMovie('Home Alone');

            assert.deepEqual(christmas.watched, { 'Home Alone': 2 });
        });
    });

    describe('Tests favoriteMovie()', () => {
        it('Should throw error if there are no movies in your watched list', () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);

            assert.throws(() => christmas.favouriteMovie(), Error, `You have not watched a movie yet this year!`);
        });

        it('Should return correct result if there are has a movies in collection list', () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');

            assert.equal(christmas.favouriteMovie(), `Your favourite movie is Home Alone and you have watched it 3 times!`);
        });
    });

    describe('Tests mostStarredActor()', () => {
        it('Should throw error if there are no movies in your watched list', () => {
            assert.throws(() => christmas.mostStarredActor(), Error, `You have not watched a movie yet this year!`);
        });

        it('Should return correct result if there are has a movies in collection list', () => {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);

            assert.equal(christmas.mostStarredActor(), `The most starred actor is Macaulay Culkin and starred in 2 movies!`);
        });
    });
});