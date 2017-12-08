var Letters = function() {
	this.letterBag = [
		'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
		'B', 'B',
		'C', 'C',
		'D', 'D', 'D', 'D',
		'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
		'F', 'F',
		'G', 'G', 'G',
		'H', 'H',
		'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 
		'J',
		'K',
		'L', 'L', 'L', 'L',
		'M', 'M',
		'N', 'N', 'N', 'N', 'N', 'N',
		'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
		'P', 'P',
		'Q',
		'R', 'R', 'R', 'R', 'R', 'R',
		'S', 'S', 'S', 'S',
		'T', 'T', 'T', 'T', 'T', 'T',
		'U', 'U', 'U', 'U',
		'V', 'V',
		'W', 'W',
		'X',
		'Y', 'Y',
		'Z',
		'BLANK','BLANK'
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