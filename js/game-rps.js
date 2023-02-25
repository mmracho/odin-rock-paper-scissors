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

function showRoundResult(result) {
  const roundText = document.querySelector('#round-result');

  roundText.className = 'fadeOut';
  switch (result) {
    case 'TIE':
      roundText.textContent = "IT'S A TIE";
      break;
    case 'LOSE':
      roundText.textContent = 'YOU LOSE';
      break;
    case 'WIN':
      roundText.textContent = 'YOU WIN';
      break;
    default:
      roundText.textContent = "Choose a hand from the three choices below. First one to 5 points wins!"
  }
  roundText.focus();
  roundText.className = 'fadeIn';
}

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
  const playArea = document.querySelector('.play-area');
  const matchResult = document.querySelector('.match-result');
  const img = document.querySelector('img.end-img-win');
  playArea.classList.toggle('hide');
  matchResult.classList.toggle('hide');
  matchResult.classList.toggle('show');
  resetScore();
  updateScore();
  showRoundResult('restart');
  img.src = "#";

}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  console.log('Score Reset')
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

function showMatchEnd(result) {
  const img = document.querySelector('img.end-img-win');
  const playArea = document.querySelector('.play-area');
  const matchResult = document.querySelector('.match-result');

  img.src = result === 'WIN' ? './img/pose_win_boy.webp' : './img/pose_lose_boy.webp';

  playArea.classList.toggle('hide');
  matchResult.classList.toggle('hide');
  matchResult.classList.toggle('show');

}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    // WE HAVE A WINNER
    if (playerScore === 5) {
      console.log(`You win! Player: ${playerScore} Computer: ${computerScore}`);
      showMatchEnd('WIN');
    } else {
      console.log(`You lose! Player: ${playerScore} Computer: ${computerScore}`);
      showMatchEnd('LOSE');
    }
  }
}

// Single round of game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    showRoundResult('TIE');
  } else if (playerSelection == 1 && computerSelection == 3) {
    showRoundResult('WIN');
    playerScore += 1;
  } else if (computerSelection == 1 && playerSelection == 3) {
    showRoundResult('LOSE');
    computerScore += 1;
  } else if (playerSelection < computerSelection) {
    showRoundResult('LOSE');
    computerScore += 1;
  } else {
    showRoundResult('WIN');
    playerScore += 1;
  }

  updateScore();

  console.log(`STANDING: Player=${playerScore} | Computer=${computerScore}`);
  checkWinner()

}