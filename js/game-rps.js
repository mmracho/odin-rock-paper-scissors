// 1 - ROCK
// 2 - PAPER
// 3 - SCISSORS
let playerScore = 0;
let computerScore = 0;
let flavorText = [
  "Let me analyze my opponent's past moves and determine the most statistically advantageous option.",
  "Hmm, my opponent seems to favor rock. Maybe I should try paper this time.",
  "I'm programmed to be unpredictable, so perhaps I'll throw a curveball and choose scissors.",
  "If I choose the same move twice in a row, will my opponent expect me to switch it up or stay the same?",
  "I'm confident in my algorithms, but there's always a chance for human error. Let's see how this round plays out.",
  "Computer is thinking..."
]


const btnReset = document.querySelector('button.btn-reset');
const buttons = document.querySelectorAll('button.btn-play');
btnReset.addEventListener('click', resetGame,)
buttons.forEach(button => {
  button.addEventListener('click', startRound);
});

function updateScore() {
  const currentComputerScore = document.querySelector('#computer-score');
  const currentPlayerScore = document.querySelector('#player-score');

  currentComputerScore.textContent = computerScore;
  currentPlayerScore.textContent = playerScore;
}

function randomizeFlavorText() {
  const currentText = document.querySelector('#computer-flavor-text');
  const randomTextInd = Math.floor((Math.random() * flavorText.length))
  currentText.textContent = flavorText[randomTextInd];
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  console.log('Game Reset')
}

function startRound() {
  const playerSelection = this.value;
  const computerSelection = getComputerChoice();

  randomizeFlavorText();
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
  
  updateScore();
  // Show result

  // CHECK STANDING
  console.log(`STANDING: Player=${playerScore} | Computer=${computerScore}`);
  if (checkWinner()) {
    // Show WIN/LOSE
    // Show reset button
  }
  
}