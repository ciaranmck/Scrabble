var assert = require('assert');
var Player = require('../player.js');

describe('Player', function () {
	var player;

	beforeEach(function () {
    player = new Player();
  	});

it('should set and then return PlayerOnes name', function() {
	player.namePlayerOne("Ciaran");
	assert.strictEqual("Ciaran", player.getPlayerOneName());
});

it('should display the players hand a 10 element array', function() {
	assert.strictEqual(10, player.getHand().length);
});

});