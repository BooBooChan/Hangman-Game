/*Step 1: Create a function which retrieves user's click input and starts the game.*/
var letterGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var correctWord = ["bellbottoms", "bangles", "pinstripe", "pompadour", "mullet", "sunhat", "crocs", "parachute-pants", "swan-dress", "polka-dots", "sequins", "maybe-blue-or-maybe-gold-dress-it-all-depends-on-the-lighting-really", "overalls", "reversible", "clown-suit", "cone-brassiere", "speedo", "birthday-suit", "peacoat", "tuxedo", "fedora", "kimono", "poodle-skirt", "nightcap", "full-body-cast", "boxers", "turtleneck"];
var guessesLeft = 10;
//---var guessesUsed = --- In hindsight, this variable probably isn't necessary, but hold onto it just in case.

/*---if(document.onclick){
document.onkeyup	
}---Come back to this condition to get player to start game with mouse click*/





/*Step 2: Create a function which retrieves user's letter input and displays it accordingly on the page.
This will be in the Letters Already Guessed Section.
You will probably need to write an event*/


/*So the function name inserted after function can by anything you like,
because it is a local ___. The element in parentheses is the variable input being applied to the function.*/

	/*We need an onkey event. But where and how? 
	Also, how will the computer recognize which key coordinates with which array index?*/
document.getElementById("enter-letter").addEventListener("onkeyup", function(){
	alert("Success!");
// // document.onkeyup = function (letterGuess) {
// 	var keyDisplay = document.onkeyup.value;
// 	for(var i = 0; i < letterGuess.length; i++){
// 		if(letterGuess[i] === keyDisplay){
// 			console.log(keyDisplay);
// 			document.getElementById("guess").innerHTML = keyDisplay;
// 			console.log("Player's input accepted. Guess submitted.");
// 		}else{
// 			console.log("Player's input accepted. Guess submitted.");
// 			alert("Oh no! Those numbers and special characters clash with my game! Try entering letters only.");
// 		};
// 	};
});
	//-------------------------------------------------
// 	if (letterGuess.indexOf("" + keyDisplay + "") > -1){
// 		console.log(document.onkeyup.value);
// 		for(var i = 0; i < letterGuess.length; i++){
// 			document.write(letterGuess[i]); /*put this in the Letters Already Guessed section*/
// 			console.log("Player's input accepted. Guess submitted."); //---lines 30-31 Console keeps telling me that closing parentheses, semicolon, and curly brackets are "unexpected tokens", but I can't complete conditional or functions without them.---
// 		};//End "for" loop
// 	}else{
// 		console.log("Player's input inappropriate. Guess doesn't count.");
// 		alert("Oh no! Those numbers and special characters clash with my game! Try entering letters only.");
// 	};//End if() conditional
// };//End onkeyup event.

// /*We're going to need indexOf element in order to assign keys to letter recognition in the game. 
// Recall indexOf a value outside the array is -1. So we know valid entries have a value greater than -1*/

// /*What is the difference between (a.) array.index (b.) array[i] and (c.)

// for (var i = 0; i < letterGuess.length; i++) {
// console.log(letterGuess[i]);	
// document.write(letterGuess[i]);
// /*Can you enter more than one command in the curly brackets
// of an "if" clause? Can you enter a console.log AND an alert() boolean
// in the above if clause?*/	
// }


// } else 
// {alert()}

// }

// What kind of function do I need to do this?

// Step 3: Create a function which displays correct letters and substitutes corresponding underscores with them.
// function



// for(){

// };

// /*Step 4: Create a condition that will determine a right or wrong letter after user inputs 1 letter with a key stroke.

// if(){

// }; else{

// };
// // Step 5: Create a condition that will determine whether player won or lost.
// if(){

// };else{

// };

// //Some elements you will need to apply above.
// "Press any key to start this glamorous game!"
// "Number of Guesses Remaining:"
// "Letters Already Guessed:"
// "Congratulations, you won! Want to play again?"
// "Nice try. Want to play again?"
// /*Try bare minimum of javascript coding to see how every compartment of code tests on the browser and console*/