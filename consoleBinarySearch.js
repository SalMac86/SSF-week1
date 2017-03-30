//Binary Search Implementation
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var guessCount = 0;
    while (min <= max){
       guess = Math.floor((min + max) / 2);
       console.log("Guessing index: "+guess);
       guessCount++;
       if( array[guess] === targetValue ) {
           alert("Number of guesses: "+guessCount+"\nTarget # Index: "+guess+"\nTarget #: "+array[guess]);
           return guess;
       }
        else if ( array[guess] < targetValue ) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
    
    }
    alert("Number of guesses at failure: "+guessCount);
	return -1;
};