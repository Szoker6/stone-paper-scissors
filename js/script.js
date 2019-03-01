'use strict';

var welcomeMessage = document.getElementById('welcomeMessage');
var showResults = document.getElementById('showResults');
var showNumberOfRounds = document.getElementById('showNumberOfRounds');
var showWhoWon = document.getElementById('showWhoWon');
var wins = document.getElementById('wins');
var draws = document.getElementById('draws');
var loses = document.getElementById('loses');
var games = document.getElementById('games');

startGame();

function startGame() {
    welcomeMessage.innerHTML = 'Witamy w grze kamień papier nożyce';
    registerListeners();
};

function askHowManyRounds() {     
    var numbersOfRounds = prompt('Ile rund?');   
    return numbersOfRounds;
};
        
function registerListeners() {
    beginButton.addEventListener('click', function() {
        var totalRoundsForGameAsString = askHowManyRounds();
        var totalRoundsForGame = Number(totalRoundsForGameAsString);
        showNumberOfRounds.innerHTML = 'ilość rund: ' + totalRoundsForGame;
        document.getElementById('stone').style.display = "block";
        document.getElementById('paper').style.display = "block";
        document.getElementById('scissors').style.display = "block";
    });
    stone.addEventListener('click', function() {
        var computerChoice = getRandomChoice();
        var playerChoice = 'kamień';
        showResults.innerHTML = 'Gracz:' +  ' Komputer: ' + '</br>' + playerChoice + ' ' + computerChoice;
        var win = didYouWon(playerChoice, computerChoice);   
        var update = updateResult(playerChoice, computerChoice);    
    });
    paper.addEventListener('click', function() {
        var computerChoice = getRandomChoice();
        var playerChoice = 'papier';
        showResults.innerHTML = 'Gracz:' +  ' Komputer: ' + '</br>' + playerChoice + ' ' + computerChoice;
        var win = didYouWon(playerChoice, computerChoice);  
        var update = updateResult(playerChoice, computerChoice);  
    });
    scissors.addEventListener('click', function() {
        var computerChoice = getRandomChoice();
        var playerChoice = 'nożyczki';
        showResults.innerHTML = 'Gracz:' +  ' Komputer: ' + '</br>' + playerChoice + ' ' + computerChoice;
        var win = didYouWon(playerChoice, computerChoice);
        var update = updateResult(playerChoice, computerChoice);    
    });
};

function getRandomChoice() {
        var randomNumber = (Math.floor(Math.random()*3));
        var choices = ['kamień', 'papier', 'nożyczki'];
        return choices[randomNumber];
};

function didYouWon(playerChoice, computerChoice) {
    if ((playerChoice == 'kamień' && computerChoice == 'nożyczki') || (playerChoice == 'papier' && computerChoice == 'kamień') || (playerChoice == 'nożyczki' && computerChoice == 'papier')) {
        showWhoWon.innerHTML = 'Wygrana!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';    
    } else if ((playerChoice == 'kamień' && computerChoice == 'kamień') || (playerChoice == 'papier' && computerChoice == 'papier') || (playerChoice == 'nożyczki' && computerChoice == 'nożyczki')) {
        showWhoWon.innerHTML = 'Remis!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';    
    } else {
        showWhoWon.innerHTML = 'Porażka!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';     
    }
};
 
function updateResult(playerChoice, computerChoice) {
    if(playerChoice < computerChoice){
        var winValue = parseInt(wins.innerHTML) + 1;
        wins.innerHTML = winValue;

    } else if (playerChoice === computerChoice) {
        var drawValue = parseInt(draws.innerHTML) + 1;
        draws.innerHTML = drawValue;
    } else {
        var loseValue = parseInt(loses.innerHTML) + 1;
        loses.innerHTML = loseValue;
    }
        var gameValue = parseInt(games.innerHTML) + 1;
        games.innerHTML = gameValue;
};


