console.log(Math.random());
console.log('How are you today,', 'fine');


function getComputerChoice(computerChoiceArr) {
   return computerChoiceArr[Math.floor(Math.random() * computerChoiceArr.length)];
}

let computerChoiceArr = ['Rock', 'Paper', 'Scissors']
console.log(getComputerChoice(computerChoiceArr))

function getHumanChoice() {
    
}



