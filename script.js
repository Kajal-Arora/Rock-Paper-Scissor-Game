const totalScore = { playerScore: 0, computerScore: 0 };

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors'];
  return options[Math.floor(Math.random() * options.length)]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  let computerScore =0, playerScore=0;
  if (playerChoice === computerChoice) {
    computerScore = 0;
    playerScore = 0;
  }
  // All situations where human wins, set `score` to 1
  else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
    playerScore = 1;
  }
  else {
    computerScore = 1;
  }
  return {
    playerScore,
    computerScore
  }
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const {playerScore, computerScore} = score;
  const diff = playerScore-computerScore;
  const resultEl = document.getElementById("result");
  if(diff > 0)
     resultEl.innerText = `You Win!`
  else if(diff <0)
      resultEl.innerText = `You Lose!`
    else 
      resultEl.innerText = `It's a Draw!`
  
  document.getElementById("player-score").innerText = `Your Score: ${score.playerScore}`;
  document.getElementById("computer-score").innerText = `Computer Score: ${score.computerScore}`;
  document.getElementById("hands").innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const { playerScore,
    computerScore } = getResult(playerChoice, computerChoice);
  totalScore.playerScore += playerScore;
  totalScore.computerScore += computerScore;
  showResult(totalScore, playerChoice, computerChoice);

}


function playGame() {
  // querySelector to select all RPS Buttons
  const buttons = document.querySelectorAll('.rpsButton')

  buttons.forEach(btn => {
    btn.onclick = () => onClickRPS(btn.value)
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
document.getElementById('player-score').innerText = '';
  document.getElementById('computer-score').innerText = '';
document.getElementById('hands').innerText = '';
document.getElementById('result').innerText = '';
  totalScore.computerScore=0;
  totalScore.playerScore=0;
}

playGame()