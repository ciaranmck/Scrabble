var assert = require('assert');
var Modifiers = require('../modifiers.js');

describe('Modifiers', function () {
	var modifiers;

beforeEach(function () {
    modifiers = new Modifiers();
  });

it('should be worth 2 point as baseTile', function () {
	assert.strictEqual(2, modifiers.baseTile(2));
});

it('should be worth 4 points as doubleWord', function () {
	assert.strictEqual(4, modifiers.doubleWord(2));
});

it('should be worth 6 points as tripleWord', function () {
	assert.strictEqual(6, modifiers.tripleWord(2));
});

it('should be worth 4 points as doubleLetter', function () {
	assert.strictEqual(4, modifiers.doubleLetter(2));
});

it('should be worth 6 points as tripleLetter', function () {
	assert.strictEqual(6, modifiers.tripleLetter(2));
});

});