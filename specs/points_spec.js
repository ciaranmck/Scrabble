var assert = require('assert');
var Points = require('../points.js');

describe('Points', function () {
	var points;

	beforeEach(function () {
    points = new Points();
  	});


it('should display BLANK as 0 points', function () {
	assert.strictEqual(0, points.VALUES.BLANK.value);
});

it('should display ONE as 1 point', function () {
	assert.strictEqual(1, points.VALUES.ONE.value);
});

it('should display the letter a', function () {
	assert.strictEqual("a", points.VALUES.ONE.letters[0])
})

});