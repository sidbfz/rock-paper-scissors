const resultTieContent = document.querySelector("#result-tie-content");
const resultWinContent = document.querySelector("#result-win-content");
const resultLoseContent = document.querySelector("#result-lose-content");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const resetButton = document.querySelector("#reset");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultTieContent.innerHTML += `<p>It's a tie. Both chose ${humanChoice}.</p>`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        resultWinContent.innerHTML += `<p>You win! ${humanChoice} beats ${computerChoice}.</p>`;
        humanScore++;
    } else {
        resultLoseContent.innerHTML += `<p>You lose. ${computerChoice} beats ${humanChoice}.</p>`;
        computerScore++;
    }

    if (humanScore === 5 || computerScore === 5) {
        playGame();
    }
}

function playGame() {
    const gameContainer = document.querySelector(".game-container");
    
    if (humanScore === 5) {
        resultWinContent.innerHTML += "<p class='winner'>Congrats! You win the game!</p>";
        gameContainer.classList.add("game-win"); // Add win animation class
    } else if (computerScore === 5) {
        resultLoseContent.innerHTML += "<p class='loser'>Computer defeated you in the game.</p>";
        gameContainer.classList.add("game-lose"); // Add lose animation class
    }

    // Disable the buttons after the game ends
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;

    // Show the reset button
    resetButton.classList.remove('hidden');
}

function resetGame() {
    // Reset scores and clear results
    humanScore = 0;
    computerScore = 0;
    resultTieContent.innerHTML = "";
    resultWinContent.innerHTML = "";
    resultLoseContent.innerHTML = "";

    // Re-enable the buttons
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;

    // Hide the reset button
    resetButton.classList.add('hidden');

    // Remove any game result animations
    const gameContainer = document.querySelector(".game-container");
    gameContainer.classList.remove("game-win", "game-lose");
}

function animateButton(button) {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 200);
}

// Add event listeners for button clicks with animation
rock.addEventListener("click", () => {
    playRound("rock");
    animateButton(rock);
});
paper.addEventListener("click", () => {
    playRound("paper");
    animateButton(paper);
});
scissor.addEventListener("click", () => {
    playRound("scissor");
    animateButton(scissor);
});

// Add event listener for reset button
resetButton.addEventListener("click", resetGame);
