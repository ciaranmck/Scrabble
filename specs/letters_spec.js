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

it('should have 102 letters remaining in the letterBag', function() {
	assert.strictEqual(103, letters.letterBag.length);
	letters.letterBag.shift();
	assert.strictEqual(102, letters.letterBag.length);
});

});