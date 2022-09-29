function getComputerChoice() {
    //return a random result of either rock, paper, or scissors
    //1 - simpler version: return a random result
    //2 - simpler version: return a random result between 1 and 3
    //3 - return rock paper or scissors depending on if random number is between 0 and 1, 1 and 2, or 2 and 3
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
    //return a string that declares the winner of the round of rock paper scissors and makes the playerChoice parameter case insensitive.
    //1) simpler: return a string
    //2) return the winner between rock and paper
    //3) return the winner between rock, paper, and scissors
    //4) mate the playerChoice parameter case insensitive
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let winner;
    
    if (playerChoice === "rock") {
        switch (true) {
            case computerChoice === "paper":
                winner = "Looooooooooser.";
                break;
            case computerChoice === "rock":
                winner = "La mujer bebe la leche. You draw."
                break;
            case computerChoice === "scissors":
                winner = "flawless victory.";
                break;
            default:
                winner = "Unknown winner.";
        }
    } else if (playerChoice === "paper") {
        switch (true) {
            case computerChoice === "rock":
                winner = "Well done monkey brain, you win.";
                break;
            case computerChoice === "paper":
                winner = "No one wins. You draw hombre.";
                break;
            case computerChoice === "scissors":
                winner = "Ha ha, you lose.";
                break;
            default:
                winner = "No one wins. You all die.";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            winner = "You lose therefore you suck.";
        } else if (computerChoice === "paper"){
            winner = "History is written by the victors, and you won.";
        } else if (computerChoice === "scissors"){
            winner = "There are no winners, only losers. You draw";
        }
    }

    return winner;
}

