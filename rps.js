
/// Score variables
let playerScore = 0;
let computerScore = 0;
let ties = 0;
                
// Event listeners
document.getElementById('rock').addEventListener('click',() => playGame('rock'));
document.getElementById('paper').addEventListener('click',() => playGame('paper'));
document.getElementById('scissors').addEventListener('click',() => playGame('scissors'));
document.getElementById('playAgain').addEventListener('click',(playAgain));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
};

function playGame(playerChoice) {     
    // Get computer choice
    const computerChoice = getComputerChoice();

    document.getElementById('player').textContent = `You chose:  ${playerChoice}`;
    document.getElementById('npc').textContent = `Computer chose:  ${computerChoice}`;

    const result = decideWinner(playerChoice, computerChoice);
    document.getElementById('roundWinner').textContent = result;

    // Update scores
    document.getElementById('playerScore').textContent = `You:  ${playerScore}`;
    document.getElementById('npcScore').textContent = `Computer:  ${computerScore}`;
    document.getElementById('ties').textContent = `Ties:  ${ties}`;
}

function decideWinner(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        ties++;
        return "It's a tie!";
    }
    const winCondition = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winCondition[playerChoice]=== computerChoice) {
        playerScore ++
        return "You win this round!";
    } else {
        computerScore++;
        return "You were beaten this time!";
    }
} 

function playAgain() {
    document.getElementById('playerScore').textContent = `You:  0`;
    document.getElementById('npcScore').textContent = `Computer:  0`;
    document.getElementById('ties').textContent = `Ties:  0`;
    document.getElementById('roundWinner').textContent = "";
    document.getElementById('player').textContent = `You chose:  `;
    document.getElementById('npc').textContent = `Computer chose: `;

}