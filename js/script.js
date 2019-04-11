'use strict';

var welcomeMessage = document.getElementById('welcomeMessage');
var showResults = document.getElementById('showResults');
var showNumberOfRounds = document.getElementById('showNumberOfRounds');
var showWhoWon = document.getElementById('showWhoWon');
var endOfGameMessage = document.getElementById('endOfGameMessage');
var beginButton = document.getElementById('beginButton');
var winner = document.getElementById('wins');
var remixed = document.getElementById('draws');
var losser = document.getElementById('loss');
var games = document.getElementById('games');
var totalRoundsForGame;
var parms = {
 wins: 0,
 loss: 0,
 game: 0,
 draws: 0
}

startGame();

function startGame() {
    welcomeMessage.innerHTML = 'Witamy w grze kamień papier nożyce';
    registerListeners();
};

function askHowManyRounds() {    
    var numbersOfRounds = prompt('Ile rund?');  
    if (isNaN(numbersOfRounds) || numbersOfRounds <= 0) {
            alert('Podałeś nieprawidłową wartość licznik ustawiony na 5 rund');
            return '5';       
    } else {
            return numbersOfRounds;
    }       
};
   
function registerListeners() {
    beginButton.addEventListener('click', function() {
        hideStartGameButtons('none');
        var totalRoundsForGameAsString = askHowManyRounds();
        totalRoundsForGame = Number(totalRoundsForGameAsString);
        showNumberOfRounds.innerHTML = 'ilość rund: ' + totalRoundsForGame;
        setButtonsDisplay('block');      
    });
    
    var buttons = document.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
    (function(){
        var figureButtons = i;
        buttons[figureButtons].addEventListener('click', function(){
          if (figureButtons == 0) {
              choseAnItem('kamień')
          } else if (figureButtons == 1) {
            choseAnItem('papier')
          } else choseAnItem('nożyczki')
        console.log("figura", figureButtons);
    });
    })();
}
    newGameButton.addEventListener('click', function() { 
        reset();
        newGameButton.style.display = "none";
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
        parms.wins = wins + 1 ;
        winner.innerHTML = parms.wins;
    } else if ((playerChoice == 'kamień' && computerChoice == 'kamień') || (playerChoice == 'papier' && computerChoice == 'papier') || (playerChoice == 'nożyczki' && computerChoice == 'nożyczki')) {       
        showWhoWon.innerHTML = 'Remis!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
        parms.draws = parms.draws + 1;
        remixed.innerHTML = parms.raws;
    } else {      
        showWhoWon.innerHTML = 'Porażka!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
        parms.loss = parms.loss + 1;
        losser.innerHTML = parms.loss;
    }
    parms.game = parms.game + 1;
        games.innerHTML = parms.game;
        endGame(totalRoundsForGame,  parms.game);  
};

function choseAnItem(playerChoice) {
    var computerChoice = getRandomChoice(); 
    showResults.innerHTML = 'Gracz:' +  ' Komputer: ' + '</br>' + playerChoice + ' ' + computerChoice;
    beginButton.style.display = "none";   
    showResult(playerChoice, computerChoice);  
};

function endGame(totalRoundsForGame, game) {
    if (totalRoundsForGame ===  game) {
        endOfGameMessage.innerHTML = 'Aby rozpoczać od nowa kliknij nowa gra';
        setButtonsDisplay('none');   
        newGameButton.style.display = "block";    
    } else {  
        endOfGameMessage.innerHTML =  ''; 
    }
};

function setButtonsDisplay(display) {
    document.getElementById('stone').style.display = display;
    document.getElementById('paper').style.display = display;
    document.getElementById('scissors').style.display = display;
};

function hideStartGameButtons(display) {
    beginButton.style.display = display;   
    newGameButton.style.display = display;   
};

function reset() {   
    showWhoWon.innerHTML = showResults.inner = endOfGameMessage.innerHTML ='';  
    showNumberOfRounds.innerHTML = 'ilość rund: ';
    beginButton.style.display = "block";
    updateView();     
};

function updateView() {
    parms.wins = 0;
    parms.loss = 0;
    parms.game = 0;
    parms.draws = 0;    
    winner.innerHTML = parms.wins;
    remixed.innerHTML = parms.draws;
    losser.innerHTML = parms.loss;
    games.innerHTML = parms.game;
};

//  var array = ['papier', 'kamień', 'nożyce']
           // for (var j = 0; j < array.length; j++) {
              //  choseAnItem('kamień'); 
         //   }
           // choseAnItem(playerChoice);