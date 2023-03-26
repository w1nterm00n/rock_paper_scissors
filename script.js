const arrayOfOptions = ['rock', 'paper', 'scissors'];

//генерирует выбор компьютера
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * arrayOfOptions.length);
    return (arrayOfOptions[randomNumber]);
}

//привязываю кнопки
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');
const resultTable = document.querySelector('.resultTable');
const counterTable = document.querySelector('.counterTable');

//вешаю обработчики событий на кнопки
    rockButton.addEventListener('click', () => {        
        playRound (getComputerChoice(), "rock"); 
    });     
    paperButton.addEventListener('click', () => {        
        playRound (getComputerChoice(), "paper"); 
    }); 
    scissorsButton.addEventListener('click', () => {
        playRound (getComputerChoice(), "scissors"); 
    });  


let userPoints = 0;
let computerPoints = 0;
let playRoundCounter = 0;
//проверяет и выводит кто выиграл/проиграл
function playRound (computerSelection, playerSelection) {
    playRoundCounter += 1;
    if (computerSelection == playerSelection) {
        counterTable.textContent = "dead heat!";
    };
    if ( (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ) {
            counterTable.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerPoints += 1;
        } else {
            counterTable.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            userPoints += 1;
        }
        if (playRoundCounter > 4) {
            isThisTheEnd ();
        }
}


function isThisTheEnd () {
    counterTable.textContent = `Your points: ${userPoints}, computer points: ${computerPoints}`;

    if (userPoints > computerPoints) {
        resultTable.textContent = "Finally you win!";
    } else if (computerPoints > userPoints) {
        resultTable.textContent = "Finally you lose!";
    } else {
        resultTable.textContent = "Finally dead heat!";
    };
    //обнуляю счётчики в конце
    userPoints = 0;
    computerPoints = 0;
    playRoundCounter = 0;
}