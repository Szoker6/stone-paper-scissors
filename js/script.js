'use strict';

var welcomeMessage = document.getElementById('welcomeMessage');
var showResults = document.getElementById('showResults');
var showNumberOfRounds = document.getElementById('showNumberOfRounds');
var showWhoWon = document.getElementById('showWhoWon');
var endOfGameMessage = document.getElementById('endOfGameMessage');
var whowon = document.getElementById('whowon');
var beginButton = document.getElementById('beginButton');
var modalResults = document.getElementById('modalResults');
var winner = document.getElementById('wins');
var remixed = document.getElementById('draws');
var losser = document.getElementById('loss');
var games = document.getElementById('games');

var totalRoundsForGame;
var params = {
 wins: 0,
 loss: 0,
 game: 0,
 draws: 0
}

startGame();
modalResults.style.display = "none";
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
    for (let i = 0; i < buttons.length; i++) {
        let currentButton = buttons[i];
        buttons[i].addEventListener('click', function() {
            var currentButtonName = currentButton.getAttribute('data-move');
            choseAnItem(currentButtonName); // kamien, papier, nozyczki
        });
    }
    
}
    newGameButton.addEventListener('click', function() { 
        reset();
        newGameButton.style.display = "none";
    });    


function getRandomChoice() {
    var randomNumber = (Math.floor(Math.random()*3));
    var choices = ['kamień', 'papier', 'nożyczki'];
    return choices[randomNumber];
};

function showResult(playerChoice, computerChoice) {
    if ((playerChoice == 'kamień' && computerChoice == 'nożyczki') || (playerChoice == 'papier' && computerChoice == 'kamień') || (playerChoice == 'nożyczki' && computerChoice == 'papier')) {
        showWhoWon.innerHTML = 'Wygrana!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';     
        params.wins = params.wins + 1 ;
        winner.innerHTML = params.wins;
    } else if ((playerChoice == 'kamień' && computerChoice == 'kamień') || (playerChoice == 'papier' && computerChoice == 'papier') || (playerChoice == 'nożyczki' && computerChoice == 'nożyczki')) {       
        showWhoWon.innerHTML = 'Remis!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
        params.draws = params.draws + 1;
        remixed.innerHTML = params.draws;
    } else {      
        showWhoWon.innerHTML = 'Porażka!' + '<br/>' + 'Twój wybór: ' + playerChoice + '<br/>' + 'Wybór komputera: ' + computerChoice + '<br>';       
        params.loss = params.loss + 1;
        losser.innerHTML = params.loss;
    }
    params.game = params.game + 1;
        games.innerHTML = params.game;
        endGame(totalRoundsForGame, params.game);  
};
    function whoWon() {
        if (params.wins > params.loss) {
            whowon.innerHTML = 'wygrałes'
        } else if (params.wins < params.loss) {
            whowon.innerHTML = 'przegrałeś'
        } else  whowon.innerHTML = 'remis'
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
        modalResults.style.display = "block";  
       whoWon();
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
    modalResults.style.display = display; 
    
};

function reset() {   
    showWhoWon.innerHTML = showResults.inner = endOfGameMessage.innerHTML ='';  
    showNumberOfRounds.innerHTML = 'ilość rund: ';
    beginButton.style.display = "block";
    updateView();     
};

function updateView() {
    params.wins = 0;
    params.loss = 0;
    params.game = 0;
    params.draws = 0;    
    winner.innerHTML = params.wins;
    remixed.innerHTML = params.draws;
    losser.innerHTML = params.loss;
    games.innerHTML = params.game;
};
