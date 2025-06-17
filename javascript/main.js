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
        case (randomNumberBetweenZeroAndThree >= 1 && randomNumberBetweenZeroAndThree < 2):
            return "paper";
        case (randomNumberBetweenZeroAndThree >= 2 && randomNumberBetweenZeroAndThree < 3):
            return "scissors";
    }
}

function getRoundResult(playerChoice, computerChoice) {
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

function setupButtons() 
{
    const rockButton = document.querySelector("#rock")
    rockButton.addEventListener("click", () => {
        userChoice = "rock"
        result = getRoundResult(userChoice, getComputerChoice())
        updateScore(result)
        outputResult(result)
    })

    let paperButton = document.querySelector("#paper")
    paperButton.addEventListener("click", () => {
        userChoice = "paper"
        result = getRoundResult(userChoice, getComputerChoice())
        updateScore(result)
        outputResult(result)
    })

    let scissorsButton = document.querySelector("#scissors")
    scissorsButton.addEventListener("click", () => {
        userChoice = "scissors"
        result = getRoundResult(userChoice, getComputerChoice())
        updateScore(result)
        outputResult(result)
    })
}

function updateScore(result)
{
    if (result === "win") { 
        playerWins++ 
        document.querySelector("#player-score").textContent = "player wins: " + playerWins
    }
    else if (result === "loss") { 
        computerWins++ 
        document.querySelector("#computer-score").textContent = "computer wins: " + computerWins
    }
}

function setupRunningScore()
{
    const playerScoreDiv = document.createElement("div")
    playerScoreDiv.setAttribute("id", "player-score")
    playerScoreDiv.textContent = "player wins: " + playerWins
    
    document.body.appendChild(playerScoreDiv)

    const computerScoreDiv = document.createElement("div")
    computerScoreDiv.setAttribute("id", "computer-score")
    computerScoreDiv.textContent = "computer wins: " + computerWins

    document.body.insertBefore(computerScoreDiv, playerScoreDiv)
}

function outputResult(result)
{
    if (playerWins >= 5 || computerWins >= 5) {
        outputGameResult(playerWins, computerWins)
        deactivateButtons() // if not deactivated players can keep pressing to update win counters, i.e. change state and update result
    }
    else {
        if (result === "win") {
            console.log("You win this battle, but you will lose this war.");
            outputWinResult()
        } else if (result === "loss") {
            console.log("You lose therefore you suck.");
            outputLossResult()
        } else if (result === "draw") {
            console.log("Draw. No one wins. You all die.");
            outputDrawResult()
        }
    }
}

function outputWinResult()
{
    const outputDiv = document.querySelector("div.display")
    outputDiv.textContent = "You win this battle, but you will lose this war."
}

function outputLossResult()
{
    const outputDiv = document.querySelector("div.display")
    outputDiv.textContent = "You lose therefore you suck."
}

function outputDrawResult()
{
    const outputDiv = document.querySelector("div.display")
    outputDiv.textContent = "Draw. No one wins. You all die."
}

outputGameResult = function(playerWins, computerWins) {
    const outputDiv = document.querySelector("div.display")

    // Calculate who won the game and output the result.
    if (playerWins > computerWins) {
        outputDiv.textContent = "Human wins! You won the game."
    } else if (computerWins > playerWins) {
        outputDiv.textContent = "Computer wins! You lost the game."
    } else if (computerWins === playerWins){
        outputDiv.textContent = "Humans and Computers tie! You drew the game."
    }
}

function deactivateButtons()
{
    let buttons = document.querySelectorAll("button");
    for (const button of buttons) 
    {
        button.disabled = true
    }
}

let playerWins = 0;
let computerWins = 0;

setupButtons()
setupRunningScore()
