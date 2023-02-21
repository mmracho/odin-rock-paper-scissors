// 1 - ROCK
// 2 - PAPER
// 3 - SCISSORS


// let mesg = prompt('Enter: ')
// console.log(mesg);

const playerSelection = prompt('Move: ');
const computerSelection = getComputerChoice();

function getComputerChoice() {
  return choice = Math.floor((Math.random() * 3) + 1);
}

// Choice checker

// Choice normalizer

// Choice evaluator
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
    default:
      return 0;
  }
}

// Single round of game
function playRound(playerSelection, computerSelection) {
  playerSelection = evaluateChoice(playerSelection);
  if (playerSelection == computerSelection) {
    return 'TIE!'
  } else if (playerSelection == 1 && computerSelection == 3) {
    return 'You WIN! Rock beats scissors!';
  } else if (playerSelection < computerSelection) {
    return `You LOSE! ${choiceEvaluate(computerSelection)} beats ${choiceEvaluate(playerSelection)}`;
  } else {
    return `You WIN! ${choiceEvaluate(playerSelection)} beats ${choiceEvaluate(computerSelection)}`;
  }
}


console.log(playRound(playerSelection, computerSelection));