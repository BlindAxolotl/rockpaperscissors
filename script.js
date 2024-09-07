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
    // Return valid choice based on human selection

    // Prompt user for choice #
    let choice = prompt("Enter a number: \n1: Rock \n2: Paper \n3: Scissors");

    // If user choice matches available options, return human choice as a string
    if (Number(choice) === 1){
        return "Rock";
    } else if (Number(choice) === 2) {
        return "Paper";
    } else if (Number(choice) === 3) {
        return "Scissors";
    } else {
        return "Not a valid selection....";
    }
}

// Calling getComputerChoice function and assigning to cc variable
let cc = getComputerChoice();

console.log(getHumanChoice());
