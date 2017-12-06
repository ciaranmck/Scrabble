var Modifier = function () {
	this.baseTile;
	this.doubleWord;
	this.tripleWord;
	this.doubleLetter;
	this.tripleLetter;
}

Modifier.prototype.baseTile = function(lettervalue) {
	return lettervalue;
}

Modifier.prototype.doubleLetter = function(lettervalue) {
	return this.doubleLetter = lettervalue * 2
};

Modifier.prototype.tripleLetter = function(lettervalue) {
	return this.tripleWord = lettervalue * 3
};

Modifier.prototype.doubleWord = function(wordvalue) {
	return this.doubleWord = wordvalue * 2
};

Modifier.prototype.tripleWord = function(wordvalue) {
	return this.tripleWord = wordvalue * 3
};


module.exports = Modifier;