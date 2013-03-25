function Point2D (x, y) {
	this.x = x;
	this.y = y;
}

//exercise02a
//a constructor function that create an edge given its two vertices (points)
function Edge (from, to) {
	this.from = from;
	this.to = to;

	//exercise02b
	//a method that compute the length of the edge
	this.length = function () {
			      	return Math.sqrt(Math.pow((this.from.x - this.to.x), 2) + Math.pow((this.from.y - this.to.y), 2));
				  }
}

var edge = new Edge (new Point2D(0,0), new Point2D(1,1));
edge;
edge.length();


