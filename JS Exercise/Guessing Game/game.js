var guess = prompt("Guess a number between 1-10");
var secretNumber = 7;




if(Number(guess) === secretNumber) {
	alert("You guessed the right number!");
}

else if(Number(guess) < secretNumber) {
	alert("That number was too small!");
}

else if(Number(guess) > secretNumber) {
	alert("That number was too big!")
}