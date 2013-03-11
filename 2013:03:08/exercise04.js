/*a function that given an array of objects 'data', a string 'key' and an array of values 'values'
 *returns the array of objects where the property 'key' is equal to one of the values in 'values'.*/

function select(data, key, values){
	var obj;
	var value;
	var result = new Array();
	//scandisco l'array di oggetti "data"
	for(i=0; i<data.length; i++){ 
		obj = data[i];
		//scandisco l'array di valori "values"
		for(j=0; j<values.length; j++){
			value = values[j]; 
			for(var key in obj) {
				if(key === key && obj[key] === value){
					result.push(obj);	
				}
			}
		}
	}
	return result;
}

