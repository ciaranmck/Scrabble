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

});