// 1 - ROCK
// 2 - PAPER
// 3 - SCISSORS

// 1 - TIE
// 2 - LOSE
// 3 - WIN
let playerScore = 0;
let computerScore = 0;


const btnReset = document.querySelector('button.btn-reset');
const buttons = document.querySelectorAll('button.btn-play');
btnReset.addEventListener('click', resetGame, )
buttons.forEach(button => {
  button.addEventListener('click', startRound);
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  // MORE
}

function startRound() {
  const playerSelection = this.value;
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);

}

function getComputerChoice() {
  return choice = Math.floor((Math.random() * 3) + 1);
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    // WE HAVE A WINNER
    if (playerScore === 5) {
      console.log(`You win! Player: ${playerScore} Computer: ${computerScore}`);
    } else {
      console.log(`You lose! Player: ${playerScore} Computer: ${computerScore}`);
    }
    return true;
  } else {
    // NO WINNER YET
    return false;
  }
}

// Single round of game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    // console.log('TIE')
  } else if (playerSelection == 1 && computerSelection == 3) {
    // console.log('WIN')
    playerScore += 1;
  } else if (computerSelection == 1 && playerSelection == 3) {
    // console.log('LOSE')
    computerScore += 1;
  } else if (playerSelection < computerSelection) {
    // console.log('LOSE')
    computerScore += 1;
  } else {
    // console.log('WIN')
    playerScore += 1;
  }

  // CHECK STANDING
  console.log(`STANDING: Player=${playerScore} | Computer=${computerScore}`);
  if (checkWinner()) {
    // TRIGGER RESET STUFF
  }

}