var Letters = function() {
	this.letterBag = [
		'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a',
		'b', 'b',
		'c', 'c',
		'd', 'd', 'd', 'd',
		'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
		'f', 'f',
		'g', 'g', 'g',
		'h', 'h',
		'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 
		'j',
		'k',
		'l', 'l', 'l', 'l',
		'm', 'm',
		'n', 'n', 'n', 'n', 'n', 'n',
		'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o',
		'p', 'p',
		'q',
		'r', 'r', 'r', 'r', 'r', 'r',
		's', 's', 's', 's',
		't', 't', 't', 't', 't', 't',
		'u', 'u', 'u', 'u',
		'v', 'v',
		'w', 'w',
		'x',
		'y', 'y',
		'z',
		'blank','blank'
	];

	Letters.prototype.getRandomNumber = function() {
		return Math.floor(Math.random() * (101));
	};

	Letters.prototype.setPlayerTiles = function() {
		let tempArray = [];
		tempArray = this.letterBag.splice(this.getRandomNumber());
		return tempArray.length;	
	};


};

module.exports = Letters;