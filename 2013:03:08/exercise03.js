//exercise03a
//a function that given a word return it capitalized

function capitalizeWord (string) {
	return string.toUpperCase();
}

//exercise03b
//a function that capitalize each word of the text

function capitalizeText () {
	var text = 'Lorem ipsum dolor sit amet, ' + 
	'consectetur adipisicing elit, ' + 
	'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
	'Ut enim ad minim veniam, ' + 
	'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' + 
	'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

	return text.toUpperCase();
}