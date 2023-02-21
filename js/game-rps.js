// 1 - ROCK
// 2 - PAPER
// 3 - SCISSORS

// 1 - TIE
// 2 - LOSE
// 3 - WIN


function getComputerChoice() {
  return choice = Math.floor((Math.random() * 3) + 1);
}


// Choice normalizer - remove when GUI
function normalizeChoice(choice) {
  return choice.toLowerCase();
}

// Choice evaluator - if choice is invalid return 0 (ask again) | if choice is empty exit game
function evaluateChoice(choice) {
  switch (choice) {
    case 'rock':
      return 1;
    case 'paper':
      return 2;
    case 'scissors':
      return 3;
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
    case null:
      return -1;
    default:
      return 0;
  }
}

// Single round of game - modify when GUI
function playRound(playerSelection, computerSelection) {
  playerSelection = evaluateChoice(playerSelection);
  if (playerSelection == computerSelection) {
    return 1; // TIE
  } else if (playerSelection == 1 && computerSelection == 3) {
    return 3; // WIN
  } else if (playerSelection < computerSelection) {
    return 2; // LOSE
  } else {
    return 3; // WIN
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0 ; i < 5 ; i++) {
    const playerSelection = normalizeChoice(prompt('Move: '));
    const computerSelection = getComputerChoice();

    switch (playRound(playerSelection, computerSelection)) {
      case 1:
        console.log('Tie');
        break;
      case 2:
        console.log('Lose');
        computerScore += 1;
        break;
      default:
        console.log('Win');
        playerScore += 1;
    }
  }

  // Winner announce (only on fixed rounds)
  if (playerScore == computerScore) {
    console.log(`It's a tie! Player: ${playerScore} Computer: ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose! Player: ${playerScore} Computer: ${computerScore}`);
  } else {
    console.log(`You win! Player: ${playerScore} Computer: ${computerScore}`);
  }
}

game();