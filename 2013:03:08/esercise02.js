//exercise02a
//a function that pushes into an array n random integer numbers

function pushRandom (n) {
	var array = new Array();
	var i;

	for(i=0; i<=n; i++){
		array.push(Math.floor(Math.random()*100));
	}
	return array;
}

//exercise02b
//filter even numbers and return the odd ones

function filterOutEven (n) {
	var array = new Array();
	array = pushRandom(n);
	var filterResult = array.filter(function (item){return (item % 2 !== 0);});
	return filterResult;
}

//exercise02c
//sort obtained numbers from the smallest to the largest

function sort (n) {
	var array = new Array();
	array = filterOutEven(n);

	var compare = function (value1, value2) {
		return value1 - value2;
	}
	array.sort(compare);
	return array;
}






