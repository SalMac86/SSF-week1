// JavaScript File
var biggestNumber = 9999999999;
var currentGuess = null;
var guessCount = 0;

var min = 0;
var max = biggestNumber;
function guessPhoneNumber(){
    currentGuess = Math.floor((min + max) / 2);
    guessCount++;
    //start binary guessing
    document.getElementById("result").innerHTML = ('0000000000'+currentGuess).slice(-10);
    //show number to user
    
    //receive up/down/correct input
    //rinse/repeat
}
function down(){
    max = currentGuess -1;
    guessPhoneNumber();
}
function up(){
    min = currentGuess + 1;
    guessPhoneNumber();
}
function correct(){
    alert("I Got it!\nYour Number is:\n"+currentGuess);
    console.log('Guess Count: '+guessCount);
}