const choices = [`rock`, `paper`, `scissors`];
var playerPoints=0,computerPoints=0;
function computerPlay() {
  // console.log(Math.floor(Math.random(3)*3));
  // console.log(choices[Math.floor(Math.random(3)*3)]);
  return choices[Math.floor(Math.random(3) * 3)];
}

function playRound(playerSelection, computerSelection) {
  let win = false;
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();
  console.log(ps + " -- " + cs);
  if (ps === `rock` && cs === `scissors`) {
    console.log(`You Win! Rock beats Scissors`);
    playerPoints++;
  }
  else if (ps === `scissors` && cs === `paper`) {
    console.log(`You Win! Scissors beats Paper`);
    playerPoints++;
  }
  else if (ps === `paper` && cs === `rock`) {
    console.log(`You Win! Paper beats Rock`);
    playerPoints++;
  }
  else if (cs === `rock` && ps === `scissors`) {
    console.log(`You Lose! Rock beats Scissors`);
    computerPoints++;
  }
  else if (cs === `scissors` && ps === `paper`) {
    console.log(`You Lose! Scissors beats Paper`);
    computerPoints++;
  }
  else if (cs === `paper` && ps === `rock`) {
    console.log(`You Lose! Paper beats Rock`);
    computerPoints++;
  }
  else if (cs === ps) {
    console.log(`Its a tie! You both had ` + cs);
  }
}

function game() {
playerPoints=0,computerPoints=0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(`Player selection? `);
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if(playerPoints>computerPoints){
      console.log(`Player Won by ` + (playerPoints-computerPoints) + ` points.`);
  }
  else if(playerPoints===computerPoints){
      console.log(`\nMatch tied! with ` + playerPoints + ` points.`);
  }
  else{
    console.log(`Player Lost by ` + (computerPoints-playerPoints) + ` points.`);
  }
}
