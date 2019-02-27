'use strict';

var output = document.getElementById('output');
var showNumberOfRounds = document.getElementById('showNumberOfRounds');
var oudputComp = document.getElementById('outputComp');
var showResults = document.getElementById('showResults');

output.innerHTML = 'Witamy w grze kamień papier nożyce';

function askHowManyRounds() {     
    var numbersOfRounds = prompt('Ile rund?');      
    return numbersOfRounds;        
};

beginButton.addEventListener('click', function() {      
    showNumberOfRounds.innerHTML = 'ilość rund: ' + askHowManyRounds();
    document.getElementById('stone').style.display = "block";
    document.getElementById('paper').style.display = "block";
    document.getElementById('scissors').style.display = "block";
});  

stone.addEventListener('click', function clickStone() {	
        outputComp.innerHTML = 'Dawid:' +  ' Komputer: ' + '</br>' + 'Kamień ' + getRandomItemNumber();
});

paper.addEventListener('click', function clickPaper() {	
        outputComp.innerHTML = 'Dawid:' +  ' Komputer: ' + '</br>' + 'Papier ' + getRandomItemNumber();
        
});

scissors.addEventListener('click', function clickScissors() {	
        outputComp.innerHTML = 'Dawid:' +  ' Komputer: ' + '</br>' + 'Nożyczki ' + getRandomItemNumber();
});

function randomizeKomputer() {
        var random = (Math.floor(Math.random()*3));
        return random;
};
var condition = randomizeKomputer();
function convertItemNumberToItem(item, number) {
        
        if (condition === 0) {  
                return 'Kamień';
        } else if (condition === 1) {   
                return 'Papier';      
        } else { 
                return 'Nożyczki'
        }   
};

var randomItemNumber = getRandomItemNumber();
var vomputerItem = convertItemNumberToItem(randomItemNumber);

function didWon() {
        if (computerThing == 'Kamień' && computerThing == 'Papier' && computerThing == 'Nożyczki') {
                return 'Remis';
        } else if (computerThing == 'Nożyczki' && computerThing == 'Papier' && computerThing == 'Kamień') {
                return 'Wygrałeś'
        } else {
                return 'Pregrałeś'
        }
}
var win = didWon();
showResults.innerHTML = didWon();