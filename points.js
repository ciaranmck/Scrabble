var Points = function () {
	this.VALUES = {
		BLANK : {
			letters : [""],
			value : 0
		},
		ONE : {		
			letters : ["a", "e", "i", "l", "n", "o", "r", "s", "t", "u"],
			value : 1
		}
	};
}

// Points.prototype.assignValues = function() {
// 	const POINTS = {
// 		BLANK : 0
// 	};

// 	return POINTS;
// };

module.exports = Points;