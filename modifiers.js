var Modifiers = function () {
	this.baseTile;
	this.doubleWord;
	this.tripleWord;
	this.doubleLetter;
	this.tripleLetter;
}

Modifiers.prototype.baseTile = function(wordValue) {
	return wordValue;
}

Modifiers.prototype.doubleLetter = function(letterValue) {
	return this.doubleLetter = letterValue * 2
};

Modifiers.prototype.tripleLetter = function(letterValue) {
	return this.tripleWord = letterValue * 3
};

Modifiers.prototype.doubleWord = function(wordValue) {
	return this.doubleWord = wordValue * 2
};

Modifiers.prototype.tripleWord = function(wordValue) {
	return this.tripleWord = wordValue * 3
};


module.exports = Modifiers;