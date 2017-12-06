var Tiles = function () {
	this.baseTile = 1;
	this.doubleWord;
	this.tripleWord;
	this.doubleLetter;
	this.tripleLetter;
}

Tiles.prototype.doubleWord = function(lettervalue) {
	return this.doubleWord = lettervalue * 2
};

module.exports = Tiles;