const Letters = require('./letters.js')
const Points = require('./points.js')

var Player = function () {
	this.PlayerOne;
	this.PlayerTwo;
	this.PlayerOneHand = [];
	this.PlayerTwoHand = [];

	Player.prototype.namePlayerOne = function(playerName) {
		PlayerOne = playerName;
	};

	Player.prototype.namePlayerTwo = function(playerName) {
		PlayerTwo = playerName;
	};

	Player.prototype.getPlayerOneName = function() {
		return PlayerOne;
	};

	Player.prototype.getPlayerTwoName = function() {
		return PlayerTwo;
	};

	Player.prototype.getHand = function() {
		let letters = new Letters();

		return this.PlayerOneHand = letters.setPlayerTiles();
	};
};

// Could refactor players to be a hash containing their name, hand, and current points tally
// Need to refactor getHand method to incorporate both players

module.exports = Player;