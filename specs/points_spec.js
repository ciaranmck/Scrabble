var assert = require('assert');
var Points = require('../points.js');

describe('Points', function () {
	var points;

	beforeEach(function () {
    points = new Points();
  	});


it('should display BLANK as 0 points', function () {
	assert.strictEqual(0, points.POINTS.BLANK);
});

it('should display ONE as 1 point', function () {
	assert.strictEqual(1, points.POINTS.ONE);
});

});