var Board = function() {
	this.rows = 15;
	this.cols = 15;
	this.w = 20;
	this.grid;
};

Board.prototype.make2DArray = function(cols, rows) {
	var arr = new Array(cols);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

 
Board.prototype.setup = function() {
	createCanvas(201, 201);
	cols = floor(width / w);
	rows = floor(height / w);
	grid = make2DArray(cols, rows);
	// for (var i = 0; i < cols; i++) {
	// 	for (var j = 0; j < rows; j++) {
	// 		grid[i][j] = new Square(i, j, w);
	// 	}
	}

	// Next steps: we want to bundle everything together and get a grid presenting in the browswer

module.exports = Board;