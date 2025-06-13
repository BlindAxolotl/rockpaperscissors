function getComputerChoice() {
  // Use math random function to return a number between 0 & 2
  let randoNum = Math.floor(Math.random() * 3);
  // Match number to item choice and return it as a string
  if (randoNum === 0) {
    return "paper";
  } else if (randoNum === 1) {
    return "rock";
  } else if (randoNum === 2) {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

// Main function to examine choices and update scores
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
  }

  // Check if either player has reached a max score of 5, update div, clear score
  if (humanScore > computerScore && humanScore == 5) {
    div.textContent = `Congrats! You defeated your AI overlords with a final score of ${humanScore}!`;
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore < computerScore && computerScore == 5) {
    div.textContent = `Ooops. Have fun carrying out tasks for the machine. AI defeated you with a final score of ${computerScore}.`;
    computerScore = 0;
    humanScore = 0;
  } else {
    div.textContent = `Your Score: ${humanScore} AI Overlord Score: ${computerScore}`;
  }
}

// Store elements in variables and add event listeners
const div = document.querySelector("#results");
const rbutton = document.querySelector("#r");
const pbutton = document.querySelector("#p");
const sbutton = document.querySelector("#s");

rbutton.addEventListener("click", () => {
  let choice = "rock";

  playRound(choice, getComputerChoice());
});

pbutton.addEventListener("click", () => {
  let choice = "paper";

  playRound(choice, getComputerChoice());
});

sbutton.addEventListener("click", () => {
  let choice = "scissors";

  playRound(choice, getComputerChoice());
});
