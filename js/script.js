'use strict';

var welcomeMessage = document.getElementById('welcomeMessage');
var showResults = document.getElementById('showResults');
var showNumberOfRounds = document.getElementById('showNumberOfRounds');
var showWhoWon = document.getElementById('showWhoWon');

var wins = document.getElementById('wins');
var draws = document.getElementById('draws');
var loses = document.getElementById('loses');
var games = document.getElementById('games');
var endOfGame = document.getElementById('endOfGame');
var roundsCounter = document.getElementById('roundsCounter');
var totalRoundsForGame;
var gameValue



startGame();

function startGame() {
    welcomeMessage.innerHTML = 'Witamy w grze kamień papier nożyce';
    registerListeners();
    
};
var numbersOfRounds;
function askHowManyRounds() {    
    var numbersOfRounds = prompt('Ile rund?');   
    if (isNaN(numbersOfRounds) ||
        numbersOfRounds <= 0) {
                return alert('Podaj prawidłową wartość');
        } else {
                return numbersOfRounds;
        }
};
   
function registerListeners() {
    beginButton.addEventListener('click', function() {
        var totalRoundsForGameAsString = askHowManyRounds();
        totalRoundsForGame = Number(totalRoundsForGameAsString);
        showNumberOfRounds.innerHTML = 'ilość rund: ' + totalRoundsForGame;
        document.getElementById('stone').style.display = "block";
        document.getElementById('paper').style.display = "block";
        document.getElementById('scissors').style.display = "block";      
    });
    stone.addEventListener('click', function() {
        choseAnItem('kamień')   
        hoverButtons();  
    });
    paper.addEventListener('click', function() {
        choseAnItem('papier');
        hoverButtons();  
    });
    scissors.addEventListener('click', function() {
        choseAnItem('nożyczki');
        hoverButtons();     
    });   
};

function getRandomChoice() {
        var randomNumber = (Math.floor(Math.random()*3));
        var choices = ['kamień', 'papier', 'nożyczki'];
        return choices[randomNumber];
};

function showResult(playerChoice, computerChoice) {
    if ((playerChoice == 'kamień' && computerChoice == 'nożyczki') || (playerChoice == 'papier' && computerChoice == 'kamień') || (playerChoice == 'nożyczki' && computerChoice == 'papier')) {
        showWhoWon.innerHTML = 'Wygrana!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';     
    } else if ((playerChoice == 'kamień' && computerChoice == 'kamień') || (playerChoice == 'papier' && computerChoice == 'papier') || (playerChoice == 'nożyczki' && computerChoice == 'nożyczki')) {
        showWhoWon.innerHTML = 'Remis!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
    } else {
        showWhoWon.innerHTML = 'Porażka!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
    }
};

function updateResult(playerChoice, computerChoice) {
    if((playerChoice == 'kamień' && computerChoice == 'nożyczki') || (playerChoice == 'papier' && computerChoice == 'kamień') || (playerChoice == 'nożyczki' && computerChoice == 'papier')) {
        var winValue = parseInt(wins.innerHTML) + 1;
        wins.innerHTML = winValue;
    } else if (playerChoice === computerChoice) {
        var drawValue = parseInt(draws.innerHTML) + 1;
        draws.innerHTML = drawValue;
    } else {
        var loseValue = parseInt(loses.innerHTML) + 1;
        loses.innerHTML = loseValue;
    }
        gameValue = parseInt(games.innerHTML) + 1;
        games.innerHTML = gameValue;
        EndGame(totalRoundsForGame,  gameValue);       
};

function choseAnItem(playerChoice) {
    var computerChoice = getRandomChoice(); 
    showResults.innerHTML = 'Gracz:' +  ' Komputer: ' + '</br>' + playerChoice + ' ' + computerChoice;
    showResult(playerChoice, computerChoice);
    updateResult(playerChoice, computerChoice);  
};

function EndGame(totalRoundsForGame,  gameValue) {
console.log(totalRoundsForGame,  gameValue); 
console.log(totalRoundsForGame === gameValue, totalRoundsForGame == gameValue)
    if (totalRoundsForGame ===  gameValue) {
         endOfGame.innerHTML = 'Koniec gry aby rozpoczać od nowa odświerz stronę';
    } else {
        return endOfGame.innerHTML =  ''; 
    }
};

function hoverButtons() {
    if (totalRoundsForGame ===  gameValue) {
        stone.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        beginButton.style.display = "none";
    } else {
        stone.style.display = "block";
        paper.style.display = "block";
        scissors.style.display = "block";
        beginButton.style.display = "block";
    }
};
