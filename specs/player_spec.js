var assert = require('assert');
var Player = require('../player.js');

describe('Player', function () {
	var player;

	beforeEach(function () {
    player = new Player();
  	});

it('should set PlayerOnes name', function () {
assert.strictEqual("Ciaran", player.namePlayerOne("Ciaran"));
});

});