let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "r") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(user);
  result.innerHTML = `${convertToWord(user)}(P1) beats ${convertToWord(
    computer
  )}(C). You win! 🔥`;

  userChoice_div.classList.add("green-border");
  setTimeout(() => userChoice_div.classList.remove("green-border"), 400);
}

function lose(user, computer) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(user);
  result.innerHTML = `${convertToWord(user)}(P1) beats ${convertToWord(
    computer
  )}(C). You lost! 😔`;

  userChoice_div.classList.add("red-border");
  setTimeout(() => userChoice_div.classList.remove("red-border"), 400);
}

function tie(user) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result.innerHTML = "It's a tie! 🙏🏼";
  const userChoice_div = document.getElementById(user);

  userChoice_div.classList.add("gray-border");
  setTimeout(() => userChoice_div.classList.remove("gray-border"), 400);
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  // console.log("user: " + userChoice);
  // console.log("computer: " + compChoice);

  switch (userChoice + compChoice) {
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "pr":
    case "sp":
    case "rs":
      win(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, compChoice);
      break;
  }
}

game();

function main() {
  rock.addEventListener("click", () => game("r"));
  paper.addEventListener("click", () => game("p"));
  scissors.addEventListener("click", () => game("s"));
}

main();
