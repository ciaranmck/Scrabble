var assert = require('assert');
var Tiles = require('../tiles.js');

describe('Tiles', function () {
	var tiles;

beforeEach(function () {
    tiles = new Tiles();
  });

it('should be worth 2 point as baseTile', function () {
	assert.strictEqual(2, tiles.baseTile(2));
});

it('should be worth 4 points as doubleWord', function () {
	assert.strictEqual(4, tiles.doubleWord(2));
});

it('should be worth 6 points as tripleWord', function () {
	assert.strictEqual(6, tiles.tripleWord(2));
});

it('should be worth 4 points as doubleLetter', function () {
	assert.strictEqual(4, tiles.doubleLetter(2));
});

it('should be worth 6 points as tripleLetter', function () {
	assert.strictEqual(6, tiles.tripleLetter(2));
});

});