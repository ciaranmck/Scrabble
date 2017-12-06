var Modifier = function () {
	this.baseTile;
	this.doubleWord;
	this.tripleWord;
	this.doubleLetter;
	this.tripleLetter;
}

Modifier.prototype.baseTile = function(wordValue) {
	return wordValue;
}

Modifier.prototype.doubleLetter = function(letterValue) {
	return this.doubleLetter = letterValue * 2
};

Modifier.prototype.tripleLetter = function(letterValue) {
	return this.tripleWord = letterValue * 3
};

Modifier.prototype.doubleWord = function(wordValue) {
	return this.doubleWord = wordValue * 2
};

Modifier.prototype.tripleWord = function(wordValue) {
	return this.tripleWord = wordValue * 3
};


module.exports = Modifier;