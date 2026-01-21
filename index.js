//console.log(Math.random());
//console.log('How are you today,', 'fine');


function getComputerChoice() {
   let computerChoiceArr = ['ROCK', 'PAPER', 'SCISSORS'];
   return computerChoiceArr[Math.floor(Math.random() * computerChoiceArr.length)];
}


function getHumanChoice() {
    return prompt('Enter your choice: Rock, Paper or Scissors.').toUpperCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
       /* if (
        (humanChoice === 'PAPER' && computerChoice === 'Rock') || (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') || (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
        ) {
        humanScore++;
        console.log(`Human wins: ${humanChoice} beats ${computerChoice}`)
        }

        if (
        (computerChoice === 'PAPER' && humanChoice === 'Rock') || (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') || (computerChoice === 'SCISSORS' && humanChoice === 'PAPER')
        ) {
        computerScore++;
        console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`)
        }

        else if (
        humanChoice === computerChoice) {
        console.log(`its a tie: Human chose ${humanChoice} and computer also chose ${computerChoice}`)}*/

        if (
        humanChoice === computerChoice) {
        console.log(`its a tie: Human chose ${humanChoice} and computer also chose ${computerChoice}`)}

        else if (
            (humanChoice === 'PAPER' && computerChoice === 'Rock') || (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') || (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')
        ) {
        humanScore++;
        console.log(`Human wins: ${humanChoice} beats ${computerChoice}`)
        }
        
        else {
        computerScore++;
        console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`)
        }
    }

    //Play five rounds

    for (let rounds = 1; rounds <= 5; rounds++) {
        console.log(`Rounds: ${rounds}`)
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }
   
    // Declare winner

    console.log("Game is Over");
    console.log(`${humanScore} : ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won: You are champion!");
    } else if (computerScore > humanScore) {
        console.log("Computer won: Try Again!");
    } else {console.log("It's a tie");}
    
}

playGame();
