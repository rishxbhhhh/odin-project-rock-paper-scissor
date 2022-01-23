const btnrock = document.querySelector("#btn-rock");
const btnpaper = document.querySelector("#btn-paper");
const btnscissors = document.querySelector("#btn-scissors");
const player = document.querySelector("#player-points");
const computer = document.querySelector("#computer-points");
const btnresult = document.querySelector("#show-result");
const resultField = document.querySelector("#Result");
const gameOutput = document.querySelector('#game-output');

const choices = [`rock`, `paper`, `scissors`];
var playerPoints = 0,
  computerPoints = 0;
function computerPlay() {
  // console.log(Math.floor(Math.random(3)*3));
  // console.log(choices[Math.floor(Math.random(3)*3)]);
  return choices[Math.floor(Math.random(3) * 3)];
}

function playRound(playerSelection, computerSelection) {
  let win = false;
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();
  let output = ps + " -- " + cs + "<br>";
  if (ps === `rock` && cs === `scissors`) {
    output+=`You Win! Rock beats Scissors`;
    playerPoints++;
  } else if (ps === `scissors` && cs === `paper`) {
    output+=`You Win! Scissors beats Paper`;
    playerPoints++;
  } else if (ps === `paper` && cs === `rock`) {
    output+=`You Win! Paper beats Rock`;
    playerPoints++;
  } else if (cs === `rock` && ps === `scissors`) {
    output+=`You Lose! Rock beats Scissors`;
    computerPoints++;
  } else if (cs === `scissors` && ps === `paper`) {
    output+=`You Lose! Scissors beats Paper`;
    computerPoints++;
  } else if (cs === `paper` && ps === `rock`) {
    output+=`You Lose! Paper beats Rock`;
    computerPoints++;
  } else if (cs === ps) {
    output+=`Its a tie! You both had ` + cs;
  }
  gameOutput.innerHTML = output;
}

var playerSelection = null;

function setPaper() {
  playerSelection = "paper";
  game();
}
function setRock() {
  playerSelection = "rock";
  game();
}
function setScissors() {
  playerSelection = "scissors";
  game();
}

btnrock.addEventListener("click", setRock);
btnpaper.addEventListener("click", setPaper);
btnscissors.addEventListener("click", setScissors);
btnresult.addEventListener("click", showResults);

function game() {
  // (playerPoints = 0), (computerPoints = 0); reset points
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  player.innerHTML = playerPoints;
  computer.innerHTML = computerPoints;
}
function showResults() {
  let output = null;
  if (playerPoints > computerPoints) {
    output = `Player Won by ` + (playerPoints - computerPoints) + ` points.`;
  } else if (playerPoints === computerPoints) {
    output = `\nMatch tied! with ` + playerPoints + ` points.`;
  } else {
    output = `Player Lost by ` + (computerPoints - playerPoints) + ` points.`;
  }
  resultField.innerHTML = output;
}
