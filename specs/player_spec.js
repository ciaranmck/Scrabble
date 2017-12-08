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

it('should display the players hand a 7 element array', function() {
	assert.strictEqual(7, player.getHand().length);
});

});