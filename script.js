// Write function to get the computer choice
function getComputerChoice () {
    // Use math random function to return a number between 0 & 2
    let randoNum = Math.floor(Math.random() * 3);
    // Match number to item choice and return it as a string
    if (randoNum === 0) {
        return "Paper";
    } else if (randoNum === 1) {
        return "Rock";
    } else if (randoNum === 2) {
        return "Scissors";
    }
}

function getHumanChoice() {
    
}

// Calling getComputerChoice function and assigning to cc variable
let cc = getComputerChoice();
