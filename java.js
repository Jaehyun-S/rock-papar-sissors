console.log("Hello World")

function getComputerChoice(){
    let random = Math.random();
    if (random < 1/3) {
        return "rock";
    } else if (random < 2/3) {
        return "paper";
    } else {return "scissors";}
}

console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("rock,papar,scissors choose one");
    return choice;
}

console.log(getHumanChoice());


function playGame(){
    let humanScore = 0;

    let computerScore = 0;

    function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log ("draw");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors")||
            (humanChoice === "paper" &&  computerChoice === "rock")||
            (humanChoice === "scissors" && computerChoice === "paper")){
                console.log ("win");
                humanScore++;
            }
    else {console.log ("lose");
        computerScore++;
    }}

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore>computerScore){
        console.log("Win");
    } else if (humanScore<computerScore) {
        console.log ("Lose");
    } else {
        console.log ("Draw");
    }
}

playGame();
