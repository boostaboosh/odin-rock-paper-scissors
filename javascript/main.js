function getComputerChoice() {
    // Return a random result of either rock, paper, or scissors.
    // 1 - simpler version: return a random result.
    // 2 - simpler version: return a random result between 1 and 3.
    // 3 - return rock paper or scissors depending on if random number is between 0 and 1, 1 and 2, or 2 and 3.
    let randomNumberBetweenZeroAndOne = Math.random();
    let randomNumberBetweenZeroAndThree = randomNumberBetweenZeroAndOne * 3;
    switch (true) {
        case (randomNumberBetweenZeroAndThree<1):
            return "rock";
            break;
        case (randomNumberBetweenZeroAndThree >= 1 && randomNumberBetweenZeroAndThree < 2):
            return "paper";
            break;
        case (randomNumberBetweenZeroAndThree >= 2 && randomNumberBetweenZeroAndThree < 3):
            return "scissors";
            break;
        default:
            return("random number is >= 3");
    }
}

function playRound(playerChoice, computerChoice) {
    // Return a string that declares the winner of the round of rock paper scissors and makes the playerChoice parameter case insensitive.
    // 1) Simpler: Return a string.
    // 2) Return the winner between rock and paper.
    // 3) Return the winner between rock, paper, and scissors.
    // 4) Make the playerChoice parameter case insensitive.
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let roundResult;

    if (playerChoice === "rock") {
        switch (true) {
            case computerChoice === "paper":
                roundResult = "loss";
                break;
            case computerChoice === "rock":
                roundResult = "draw";
                break;
            case computerChoice === "scissors":
                roundResult = "win";
                break;
            default:
                roundResult = "unknown";
        }
    } else if (playerChoice === "paper") {
        switch (true) {
            case computerChoice === "rock":
                roundResult = "win";
                break;
            case computerChoice === "paper":
                roundResult = "draw";
                break;
            case computerChoice === "scissors":
                roundResult = "loss";
                break;
            default:
                roundResult = "unknown";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            roundResult = "loss";
        } else if (computerChoice === "paper"){
            roundResult = "win";
        } else if (computerChoice === "scissors"){
            roundResult = "draw";
        }
    }

    return roundResult;
}

let playGame = function() {
    // Play a 5 round game that keeps score and reports a winner or loser at the end.
    let playerWins = 0;
    let computerWins = 0;

    for (games = 0; games < 5; games ++) {
        let userChoice = prompt("Rock, Paper, or Scissors?");
        let result = playRound(userChoice, getComputerChoice());
        if (result === "win") {
            playerWins ++;
            console.log("You win this battle, but you will lose this war.");
        } else if (result === "loss") {
            computerWins ++;
            console.log("You lose therefore you suck.");
        } else if (result === "draw") {
            console.log("Draw. No one wins. You all die.");
        }
    }

    outputGameResult(playerWins, computerWins);
}

outputGameResult = function(playerWins, computerWins) {
    // Calculate who won the game and output the result.
    if (playerWins > computerWins) {
        console.log("Human wins! You won the game.");
    } else if (computerWins > playerWins) {
        console.log("Computer wins! You lost the game.");
    } else if (computerWins === playerWins){
        console.log("Humans and Computers tie! You drew the game.");
    }
}

playGame();