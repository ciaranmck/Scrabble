var assert = require('assert');
var Tiles = require('../tiles.js');

describe('Tiles', function () {

});

it('should be worth 1 point as baseTile', function () {
	var tiles = new Tiles();
	assert.strictEqual(1, tiles.baseTile);
});