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

	Letters.prototype.setPlayerTiles = function() {
		let tempArray = [];

		for (var i = 0; i < 7; i++) {
		tempArray.push(this.letterBag.shift());
		}
		return tempArray;
	};

	Letters.prototype.shuffleTiles = function() {
		for (let i = this.letterBag.length - 1; i > 0; i--) {
    		const j = Math.floor(Math.random() * (i + 1));
    		[this.letterBag[i], this.letterBag[j]] = [this.letterBag[j], this.letterBag[i]];
		};
		return this.letterBag;
	};


};

module.exports = Letters;