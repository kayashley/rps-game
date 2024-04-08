// game against the computer
// function called getComputerChoice - return rock, paper, or scissors

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  // console.log(randomNumber);

  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else if (randomNumber == 3) {
    return "scissors";
  }
}

// second function that takes a 'playerSelection' and 'computerSelection' as a parameter and plays rock, paper, scissors and returns a string
function playRound(playerSelection, computerSelection) {
  console.log("computer: ", computerSelection);
  console.log("player1: ", playerSelection);

  if (computerSelection == playerSelection) {
    return "it's a tie!";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "computer wins!";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "computer wins!";
  } else {
    return "player1 wins!";
  }
}

function playGame() {
  for (i = 0; i < 6; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt(
      "Enter in your choice: Rock, Paper, or Scissors "
    );

    playerSelection = playerSelection.toLocaleLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
}

playGame();
