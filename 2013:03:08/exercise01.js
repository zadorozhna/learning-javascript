	//exercise01a
	//a function that pushes into an array the first n natural numbers

	function pushArray (n) {
		var array = new Array();
		var i;

		for(i=0; i<=n; i++){
			array.push(i);
		}
		return array;
	}

	//exercise01b
	//filter out odd numbers and return the even ones

	function filterOutOdd (n) {
		var array = new Array();
		array = pushArray(n);
		var filterResult = array.filter(function (item){return (item % 2 === 0);});
		return filterResult;
	}

	//exercise01c
	//double each even number obtained

	function doubleEachEven (n) {
		var array = new Array();
		array = filterOutOdd(n);
		var mapResult = array.map(function (item){return (item * 2);});
		return mapResult;
	}

	//exercise01d
	//return only numbers divisible by four

	function divisibleByFour (n) {
		var array = new Array();
		array = doubleEachEven(n);
		var filterResult = array.filter(function (item){return (item % 4 === 0);});
		return filterResult;
	}

	//exercise01e
	//sum all the remaining numbers

	function sumRemaining (n) {
		var array = new Array();
		array = divisibleByFour(n);
		var sum = array.reduce(function(prev, cur){return (prev + cur);});
		return sum;
	}













