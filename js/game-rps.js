// 1 - ROCK
// 2 - PAPER
// 3 - SCISSORS

// 1 - TIE
// 2 - LOSE
// 3 - WIN
let playerScore = 0;
let computerScore = 0;



const buttons = document.querySelectorAll('button.btn-play');
buttons.forEach(button => {
  button.addEventListener('click', getPlayerChoice);
});

function getPlayerChoice() {
  const playerSelection = this.value;
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);

}

function getComputerChoice() {
  return choice = Math.floor((Math.random() * 3) + 1);
}

// Single round of game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log('TIE')
    return 1;// TIE
  } else if (playerSelection == 1 && computerSelection == 3) {
    console.log('WIN')
    return 3; // WIN
  } else if (playerSelection < computerSelection) {
    console.log('LOSE')
    return 2; // LOSE
  } else {
    console.log('WIN')
    return 3; // WIN
  }
}

function game() {
  for (i = 0 ; i < 5 ; i++) {
  // Winner announce (only on fixed rounds)
  if (playerScore == computerScore) {
    console.log(`It's a tie! Player: ${playerScore} Computer: ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose! Player: ${playerScore} Computer: ${computerScore}`);
  } else {
    console.log(`You win! Player: ${playerScore} Computer: ${computerScore}`);
  }
}}