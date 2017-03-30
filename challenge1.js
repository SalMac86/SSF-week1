//Challenge Ascending Numbers JS
//Create a small program that will create an array and then print out the values. 
//Use a variable to define the max number of elements to be in the array.

//Numbers must be ascending
//Numbers can not be sequential but random
//Must use a loop construct to create it.
//Print the output

var maxElements = 0;
var randomArray = [];
var arbitraryMax = 1000;
var currentMin = 0;

function userMaxElements() {
    maxElements = prompt("Please enter the maximun number of elements", "10");
    maxElements = parseInt(maxElements, 10); //turn the string into an Integer
    while (randomArray.length < maxElements) { 
        //add a random number to the randomArray
        randomArray.push(getRandomInt(currentMin, arbitraryMax));
        //keep my random numbers increasing because I like it that way
        currentMin += Math.round(arbitraryMax/maxElements, 0);
    }
    displayArray(randomArray);
    
}
function getRandomInt(min, max) {
  //generate a random number between the currentMin and the arbitraryMax
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



function displayArray(array) {
    //sort the array in place using function/closure
    array.sort(function(a, b){return a-b;});
    //loop through the array and display the results
    for (var i = 0; i < maxElements; i++){
        document.write("Random #" + (i+1) + ":    " + array[i] + "<br/>");
    }
    console.log(array);
}
