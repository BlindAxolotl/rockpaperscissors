function getComputerChoice () {
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

function getHumanChoice() {
    // Prompt user for choice #
    let choice = prompt("Enter a number: \n1: Rock \n2: Paper \n3: Scissors");

    // If user choice matches available options, return human choice as a string
    if (Number(choice) === 1){
        return "rock";
    } else if (Number(choice) === 2) {
        return "paper";
    } else if (Number(choice) === 3) {
        return "scissors";
    } else {
        return "Not a valid selection....";
    }
}


function playGame() {
    // Declaring score variables
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("You chose: " + humanChoice + "\nComputer chose: " + computerChoice);
    
        // Writing results for each case and updating score accordingly
        if (humanChoice === computerChoice) {
            console.log("You picked the same! It's a Tie!");
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lost...Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lost...Scissors beats Paper");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lost...Rock beats Scissors");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
    }

    // Loop through 5 rounds
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log("Round " + (i + 1));
        playRound(humanSelection, computerSelection);
    }

    // Determining winner of the game
    if (humanScore > computerScore) {
        console.log("You win! Your score was: " + humanScore + "\nComputer score was: " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lost.... Your score was: " + humanScore + "\nComputer score was: " + computerScore);
    } else{
        console.log("It was a tie :/ Your score was: " + humanScore + "\nComputer score was: " + computerScore);
    }
}

playGame();