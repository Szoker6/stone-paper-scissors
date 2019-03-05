'use strict';

var welcomeMessage = document.getElementById('welcomeMessage');
var showResults = document.getElementById('showResults');
var showNumberOfRounds = document.getElementById('showNumberOfRounds');
var showWhoWon = document.getElementById('showWhoWon');
var endOfGame = document.getElementById('endOfGame');
var beginButton = document.getElementById('beginButton');
var winner = document.getElementById('wins');
var remixed = document.getElementById('draws');
var losser = document.getElementById('loss');
var games = document.getElementById('games');
var totalRoundsForGame;
var wins = 0;
var loss = 0;
var game = 0;
var draws = 0;
winner.innerHTML = wins;
remixed.innerHTML = draws;
losser.innerHTML = loss;
games.innerHTML = game;


startGame();

function startGame() {
    console.log('START GAME')
    welcomeMessage.innerHTML = 'Witamy w grze kamień papier nożyce';
    registerListeners();
};

function askHowManyRounds() {    
    var numbersOfRounds = prompt('Ile rund?');  
    if (isNaN(numbersOfRounds) || numbersOfRounds <= 0) {
            alert('Podałeś nieprawidłową wartość licznik ustawiony na 5 rund');
            return numbersOfRounds = 5;       
        } else {
                return numbersOfRounds;
        }       
};
   
function registerListeners() {
    beginButton.addEventListener('click', function() {
        displayNone()
        var totalRoundsForGameAsString = askHowManyRounds();
        totalRoundsForGame = Number(totalRoundsForGameAsString);
        showNumberOfRounds.innerHTML = 'ilość rund: ' + totalRoundsForGame;
        display();       
    });
    stone.addEventListener('click', function() {
        choseAnItem('kamień');        
    });
    paper.addEventListener('click', function() {
        choseAnItem('papier');     
    });
    scissors.addEventListener('click', function() {
        choseAnItem('nożyczki');          
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
        wins = wins + 1 ,winner.innerHTML = wins;
    } else if ((playerChoice == 'kamień' && computerChoice == 'kamień') || (playerChoice == 'papier' && computerChoice == 'papier') || (playerChoice == 'nożyczki' && computerChoice == 'nożyczki')) {       
        showWhoWon.innerHTML = 'Remis!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
        draws = draws + 1, remixed.innerHTML = draws;
    } else {      
        showWhoWon.innerHTML = 'Porażka!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
        loss = loss + 1, losser.innerHTML = loss;
    }
        game = game + 1, games.innerHTML = game;
        endGame(totalRoundsForGame,  game);  
};

function choseAnItem(playerChoice) {
    var computerChoice = getRandomChoice(); 
    showResults.innerHTML = 'Gracz:' +  ' Komputer: ' + '</br>' + playerChoice + ' ' + computerChoice;
    beginButton.style.display = "none";   
    showResult(playerChoice, computerChoice);  
};

function endGame(totalRoundsForGame,  game) {
    if (totalRoundsForGame ===  game) {
        endOfGame.innerHTML = 'Abt rozpoczać od nowa kliknij nowa gra';
        stone.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        newGame.style.display = "block";
        reset();  
    } else {
        
        endOfGame.innerHTML =  ''; 
    }
};

function reset() {
    newGame.addEventListener('click', function() { 
    wins = loss = game = draws = 0;
    winner.innerHTML = wins, remixed.innerHTML = draws, losser.innerHTML = loss, games.innerHTML = game; 
    showWhoWon.innerHTML = showResults.inner = endOfGame.innerHTML ='';  
    showNumberOfRounds.innerHTML = 'ilość rund: ';
    beginButton.style.display = "block";     
 });
};

function display() {
    document.getElementById('stone').style.display = 'block';
    document.getElementById('paper').style.display = 'block';
    document.getElementById('scissors').style.display = 'block';
};

function displayNone() {
    beginButton.style.display = "none"; 
    newGame.style.display = "none"; 
};
