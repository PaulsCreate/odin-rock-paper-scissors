// console.log('Hello World!')
// PSEUDOCODE
// Define a function - getComputerChoice
// The function return randomly:
    // rock, paper or scissors 
// Hint: use Math.random to generate random numbers (>=0 and <1)
function getComputerChoice() {
    // let guess = parseInt(prompt('Enter a Number to guess out either Rock, Paper or Scissors'))
    const gen = Math.floor(Math.random()*3)
    return (gen==0) ? 'rock' : (gen==1) ? 'paper' : 'scissors';
}

// getComputerChoice()


function getHumanChoice() {
    let choice = prompt("Enter either 'rock', 'paper' or 'scissors'")
    let lower = choice.toLowerCase()
    return lower
}

// getHumanChoice()



function playGame() {
    let humanScore = 0;
    let computerScore = 0; 
    function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        if(computerChoice =='rock') {
            console.log("It's a draw, no one wins!")
        } else if (computerChoice == 'paper') {
            computerScore++;
            console.log(`You Lose, ${computerChoice} beats ${humanChoice}`)
        } else {
            humanScore++
            console.log(`You win, ${humanChoice} beats ${computerChoice}`)
        }
    }
    else if (humanChoice =='paper') {
        if(computerChoice =='paper') {
            console.log("No one wins, It's a draw")
        } else if (computerChoice == 'scissors'){
            computerScore++
            console.log(`Computer wins, ${computerChoice} beats ${humanChoice}`)
        } else{
            humanScore++
            console.log(`You win!, ${humanChoice} beats ${computerChoice}`)
        }
    }else {
        if(computerChoice=='scissors') {
            console.log("it's a draw, no one wins")
        }else if (computerChoice=='rock') {
            computerScore++;
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`)
        } else {
            humanScore++
            console.log(`You win, ${humanChoice} beats ${computerChoice}`)
        }

    }     
    }
    // alert('Welcome, play 5 rounds of rock, paper scissors with me')

    while (humanScore <5 && computerScore <5) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore >=5) {
        console.log('You won!')
    } else {
        console.log('You lost, try harder next time! best luck')
        }

}



playGame()


//  const humanSelection = getHumanChoice()
//  const computerSelection = getComputerChoice()

// playRound(humanSelection, computerSelection);