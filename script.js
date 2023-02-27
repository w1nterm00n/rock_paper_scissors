const arrayOfOptions = ['rock', 'paper', 'scissors'];

//генерирует выбор компьютера
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * arrayOfOptions.length);
    return (arrayOfOptions[randomNumber]);
}

//запрашивает выбор пользователя
function getUserChoice () {
    let userChoice = prompt ('rock, paper or scissors?');
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

var userPoints = 0;
var computerPoints = 0;
//проверяет и выводит кто выиграл/проиграл
function playRound (computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        console.log("dead heat!");
        return 0;
    };
    if ( (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ) {
            console.log( `You Lose! ${computerSelection} beats ${playerSelection}` );
            computerPoints += 1;
        } else {
            console.log( `You Win! ${playerSelection} beats ${computerSelection}` );
            userPoints += 1;
        }
}

//запускает пять ходов и выводит результат
function game () {
    for (let i=0; i < 5; i++) {
        playRound (getComputerChoice(), getUserChoice());
    }
    console.log( `Your points: ${userPoints}, computer points: ${computerPoints}`);
    if (userPoints > computerPoints) {
        console.log("You win!");
    } else if (computerPoints > userPoints) {
        console.log("You lose!");
    } else {
        console.log("Dead heat!")
    };
    //обнуляю счётчики в конце
    userPoints = 0;
    computerPoints = 0;
}

game ();