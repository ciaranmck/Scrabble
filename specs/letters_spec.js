var assert = require('assert');
var Letters = require('../letters.js');

describe('Player', function () {
	var letters;

	beforeEach(function () {
    letters = new Letters();
  	});

it('should set take the letter A from the letterBag array', function () {
	assert.strictEqual("a", letters.letterBag.shift());
});

it('should have 99 letters remaining in the letterBag', function() {
	assert.strictEqual(100, letters.letterBag.length);
	letters.letterBag.shift();
	assert.strictEqual(99, letters.letterBag.length);
});

it('should return a random number betwee 0 and 99', function() {
	assert.strictEqual(44, letters.setPlayerTiles());
});

});