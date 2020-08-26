// Reference
const winText = document.getElementById("wins");
const wordsDisplay = document.getElementById("word-display");
const remainLetters = document.getElementById("remaining-Letter");
const playerGuess = document.getElementById("playerLetters");


// variables 
let wins = 0;
//let emptyLetterLine = [];
let remainingNumbers = 5;
let playerProgress = [];
console.log(playerProgress)


//=== Update the game progress ===//
//================================//

// Progress update
const playerProgressUpdate = function() {
    playerGuess.innerHTML = playerProgress.join(", ");
};
//playerProgressUpdate();

// Renaimed numbers update
const remainedNumberUpdate = function() {
    remainLetters.innerHTML = remainingNumbers;
};
//remainedNumberUpdate();


//=== Resect game ===//
//===================//

const reset = function() {
    remainingNumbers = 5;
    playerProgress = [];
    playerProgressUpdate();
    remainedNumberUpdate();
};
reset();


//=== onkeyup event ===//
//=====================//

document.onkeyup = function(event) {

    remainingNumbers--;
   
    let playerL = event.key;
    console.log(playerL)
    
    playerProgress.push(playerL);

    playerProgressUpdate();
    remainedNumberUpdate();

    if((remainingNumbers < 0) || (remainingNumbers == 0)) {
        reset();
    }
 



};