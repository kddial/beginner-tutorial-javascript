
var tt = "tt";


console.log(tt);



/* Variables */






/* If Else statements */


var speed = 65;

// Complete the condition in the ()s on line 4
if (speed ) {
  // Use console.log() to print "Slow down"
  
} 
else {
  // Use console.log() to print "Drive safe"


}




/* Functions */

// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);




/* User input */

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);




/* Next time */
/* For Loops */
/* While Loops*/

