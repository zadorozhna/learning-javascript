function Point2D (x, y) {
	this.x = x;
	this.y = y;
}

function Edge (from, to) {
	this.from = from;
	this.to = to;
	this.length = function () {
			      	return Math.sqrt(Math.pow((this.from.x - this.to.x), 2) + Math.pow((this.from.y - this.to.y), 2));
				  }
}

//exercise03a
//a constructor function that create a triangle given its three edges
function Triangle (edge1, edge2, edge3) {
	this.edge1 = edge1;
	this.edge2 = edge2;
	this.edge3 = edge3;

	//exercise03b
	//a method that compute the perimeter of the triangle
	this.perimeter = function () {
					 	return (this.edge1.length() + this.edge2.length() + this.edge3.length());
					 }

	//exercise03c
	//a method that compute the area of the triangle
	this.area = function () {
					var s = (this.perimeter() / 2);
					return Math.sqrt(s * (s - this.edge1.length()) * (s - edge2.length()) * (s - edge3.length()));
				}
}

var triangle = new Triangle(new Edge(new Point2D(0,0), new Point2D(1,1)), 
							new Edge(new Point2D(1,1), new Point2D(2,0)), 
							new Edge(new Point2D(2,0), new Point2D(0,0)));

triangle;
triangle.perimeter();
triangle.area();
