const main = document.querySelector("main");
const scoreContainer = document.querySelector("#score-container");
const playerScore = document.querySelector("#player-score");
playerScore.style.cssText = "color: blue";
const  computerScore = document.querySelector("#computer-score");
computerScore.style.cssText = "color: red";
const gameReport = document.querySelector("#game-report");
const currentRound = document.querySelector("#current-round");
const roundContainer = document.querySelector("#rounds-container");


let computerSelection = computerPlay();
let wins = 0;
let losses = 0;
let rounds = 1;

function choseRock() {
    let computerSelection = computerPlay();
    if (computerSelection == "rock") {
        gameReport.innerText = ("You both chose Rock, I declare a draw!");
    } else if (computerSelection == "scissors") {
        gameReport.innerText = (
            "You chose Rock and the Computer chose Scissors - you win this round!"
        );
        wins++;
        playerScore.innerText = `${wins}`;
    } else if (computerSelection == "paper") {
        gameReport.innerText = (
            "You chose Rock and the Computer chose paper - you lose this round!"
        );
        losses++;
        computerScore.innerText = `${losses}`
    }
}

function chosePaper() {
    let computerSelection = computerPlay();
    if (computerSelection == "paper") {
        gameReport.innerText = ("You both chose Paper, I declare a draw!");
    } else if (computerSelection == "scissors") {
        gameReport.innerText = (
            "You chose Paper and the Computer chose Scissors - you lose this round!"
        );
        losses++;
        computerScore.innerText = `${losses}`
    } else if (computerSelection == "rock") {
        gameReport.innerText = (
            "You chose Paper and the Computer chose Rock - you win this round!"
        );
        wins++;
        playerScore.innerText = `${wins}`;
    }
}

function choseScissors() {
    let computerSelection = computerPlay();
    if (computerSelection == "scissors") {
        gameReport.innerText = ("You both chose Scissors, I declare a draw!");
    } else if (computerSelection == "rock") {
        gameReport.innerText = (
            "You chose Scissors and the Computer chose Rock - you lose this round!"
        );
        losses++;
        computerScore.innerText = `${losses}`
    } else if (computerSelection == "paper") {
        gameReport.innerText = (
            "You chose Scissors and the Computer chose Paper - you win this round!"
        );
        wins++;
        playerScore.innerText = `${wins}`;
    }
}

function computerPlay() {
    let randChoice = Math.floor(Math.random() * 3);
    return randChoice == 0 ? "rock" : randChoice == 1 ? "paper" : "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        choseRock();
    } else if (playerSelection == "paper") {
        chosePaper();
    } else if (playerSelection == "scissors") {
        choseScissors();
    } else {console.log("broken")}
    
}

function game(playerSelection) {
    if (rounds < 5) {
        playRound(playerSelection, computerSelection);
        rounds++;
        currentRound.innerText = `${rounds}`
    } else if (rounds === 5 && wins > losses) {
        roundContainer.innerText = ("You won the game");
    } else if (rounds === 5 && wins < losses) {
        roundContainer.innerText = ("You lost the game");
    } else if (rounds === 5 && wins == losses) {
        roundContainer.innerText = ("A Draw?!");
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	
	button.addEventListener("click", () => {
        let playerSelection = button.id.toString();
        game(playerSelection)
	});
});