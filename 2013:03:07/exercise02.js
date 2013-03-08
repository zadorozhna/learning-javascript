//returns the i-th element of the Fibonacci's serie
//apply memorization pattern

//N.B. ciascun numero della serie è la somma dei due numeri precedenti

function fibonacci (n) {
	if(!(n in fibonacci)){
		fibonacci[n] = fibonacci[n-1] + fibonacci[n-2];
	}
	return fibonacci[n];
}

//initialize the cache to hold this base case.

fibonacci[0] = 0; 
fibonacci[1] = 1;