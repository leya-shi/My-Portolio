const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay");
const resultDisplay = document.getElementById("resultdisplay");
const playerscoreDisplay = document.getElementById("playerscoredisplay");
const computerscoreDisplay = document.getElementById("computerscoredisplay");

let playerscore = 0;
let computerscore = 0;

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", resetScore);

function resetScore() {
  playerscore = 0;
  computerscore = 0;
  
  playerscoreDisplay.textContent = playerscore;
  computerscoreDisplay.textContent = computerscore;
  resultDisplay.textContent = ""; 
  playerDisplay.textContent = ""; 
  computerDisplay.textContent = ""; 
}

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "YOU WIN!";
    playerscore++;
  } else {
    result = "YOU LOSE!";
    computerscore++;
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  playerscoreDisplay.textContent = playerscore;
  computerscoreDisplay.textContent = computerscore;

  resultDisplay.classList.remove("greentext", "redtext", "whitetext");
  
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greentext");
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redtext");
      break;
    default:
      resultDisplay.classList.add("whitetext");
  }
}
