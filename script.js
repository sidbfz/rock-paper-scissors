function getComputerChoice() {
    let computerChoice;
    const randomNo = Math.floor(Math.random() * 3 + 1);
    if (randomNo === 1) {
        computerChoice = "rock"
    } else if (randomNo === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor"
    };
    return computerChoice;
}
console.log("Computer chose" + " " + getComputerChoice());

function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("please enter any one of these three: rock, paper or scissor").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {
        console.log("You chose" + " " + humanChoice);
        return humanChoice;
    } else {
        console.log("enter valid input");
        return getHumanChoice();
    }
};




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It is a tie!")
        }
        else if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "paper") {
            console.log("You win!" + " " + humanChoice + " " + "beats" + " " + computerChoice)
            humanScore += 1;
        } else {
            console.log("You lose!" + " " + computerChoice + " " + "beats" + " " + humanChoice);
            computerScore += 1;
        };
    };
    
    

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You win!")
    } else {
        console.log("Computer defeated you.")
    }
};

playGame();