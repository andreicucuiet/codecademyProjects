let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
   return Math.floor(Math.random() * 9)
}

function compareGuesses(human, comp, secret){
    return (Math.abs(human - secret) < Math.abs(comp-secret) ? true : false)
}

const updateScore = win =>{
    if (win === 'human'){
        humanScore += 1;
    } else if (win === 'computer'){
        computerScore += 1;
    }
}

const advanceRound = () => currentRoundNumber += 1