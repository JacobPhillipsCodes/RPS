//Scores
let playerScore = 0;
let computerScore = 0;

//Player Selecton
const playerPlay = prompt("Rock, paper or Scissors").toLowerCase();

//Compute Selection
const computerPlay = () => {
    let x = Math.floor(Math.random() * 3);
    if (x === 1) {
        return "rock";
    } else if (x === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

//Play round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `Computer chooses ${computerSelection}. Player wins!`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `Computer chooses ${computerSelection}. Player wins!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `Computer chooses ${computerSelection}. Player wins!`;
    } else {
        return `Computer chooses ${computerSelection}. Computer Wins! Better luck next time!`;
    }
}

alert(playRound(playerPlay, computerPlay()));

//Game runs round 5 times and declares a winner - using console.log to display results of each round
//function game()