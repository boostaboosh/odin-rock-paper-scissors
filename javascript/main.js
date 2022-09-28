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

console.log(getComputerChoice());