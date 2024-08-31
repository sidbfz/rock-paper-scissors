const para = document.querySelector("#result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

let maxRounds = 5;
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNo = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    if (randomNo === 1) {
        computerChoice = "rock";
    } else if (randomNo === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
    return computerChoice;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        para.innerHTML += `It's a tie.<br>`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        para.innerHTML += `You win. ${humanChoice} beats ${computerChoice}.<br>`;
        humanScore += 1;
    } else {
        para.innerHTML += `You lose. ${computerChoice} beats ${humanChoice}.<br>`;
        computerScore += 1;
    }

    if (humanScore === 5 || computerScore === 5) {
        playGame();
    }
}

function playGame() {
    if (humanScore === 5) {
        para.innerHTML += "Congrats! You win the game!<br>";
        para.style.color = "green"
    } else if (computerScore === 5) {
        para.innerHTML += "Computer defeated you in the game.<br>";
        para.style.color = "red"
    }

    // Disable the buttons after the game ends
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}

// Set up event listeners for the buttons
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissor"));
