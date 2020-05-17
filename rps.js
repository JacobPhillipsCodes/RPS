//Compute Selection
const computerPlay = () => {
    let x = (Math.floor(Math.random() * 3))
    if (x === 1) {
        return 'rock';
    } else if (x === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }

};

console.log(computerPlay);


//Play round
function playRound(playerSelection, computerSelection) {}


/* Testing
const playerSelection = 'rock
const computerSelection = computerPLay()
console.log(playRound(playerSelection, computerSelection))
*/

//Game runs round 5 times and declares a winner - using console.log to display results of each round
function game()