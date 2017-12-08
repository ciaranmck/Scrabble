const Letters = require('./letters.js')

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

		letters.shuffleTiles();
		return this.PlayerOneHand = letters.setPlayerTiles();
	};
};

module.exports = Player;