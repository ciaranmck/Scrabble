var Tiles = function () {
	this.baseTile;
	this.doubleWord;
	this.tripleWord;
	this.doubleLetter;
	this.tripleLetter;
}

Tiles.prototype.baseTile = function(lettervalue) {
	return lettervalue;
}

Tiles.prototype.doubleLetter = function(lettervalue) {
	return this.doubleLetter = lettervalue * 2
};

Tiles.prototype.tripleLetter = function(lettervalue) {
	return this.tripleWord = lettervalue * 3
};

Tiles.prototype.doubleWord = function(wordvalue) {
	return this.doubleWord = wordvalue * 2
};

Tiles.prototype.tripleWord = function(wordvalue) {
	return this.tripleWord = wordvalue * 3
};


module.exports = Tiles;