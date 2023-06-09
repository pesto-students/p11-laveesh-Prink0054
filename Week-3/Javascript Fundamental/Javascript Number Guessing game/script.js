let guessCount = 0;
let userGuess;
function playGuessingGame(numToGuess, totalGuesses) {

    if ((null === totalGuesses) || (undefined === totalGuesses)) {
        totalGuesses = 10;
    }

    while (guessCount < totalGuesses) {
        userGuess = prompt(getPromptText());

        if (userGuess === null) {
            // User pressed Cancel, return 0 without prompting for more numbers
            return 0;
        }

        if (isNaN(userGuess) || userGuess === '') {
            // User did not enter a valid number, prompt again without losing a turn
            alert("Please enter a number.");
            continue;
        }

        userGuess = Number(userGuess);
        guessCount++;

        if (userGuess === numToGuess) {
            // User guessed the correct number
            return guessCount;
        } else if (userGuess < numToGuess) {
            alert(userGuess + " is too small. Guess a larger number.");
        } else {
            alert(userGuess + " is too large. Guess a smaller number.");
        }
    }

    // User did not guess the correct number within the given number of guesses
    return 0;
}

function getPromptText() {
    if (guessCount === 0) {
        return "Enter a number between 1 and 100.";
    } else if (userGuess < numToGuess) {
        return userGuess + " is too small. Guess a larger number.";
    } else {
        return userGuess + " is too large. Guess a smaller number.";
    }
}
playGuessingGame(5); // User has 10 guesses to guess the number 5
//playGuessingGame(7, 3); // User has 3 guesses to guess the number 7
