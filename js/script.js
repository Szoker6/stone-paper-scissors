'use strict';

var output = document.getElementById('output');
var showNumberOfRounds = document.getElementById('showNumberOfRounds');

output.innerHTML = 'Witamy w grze kamień papier nożyce';

function askHowManyRounds() {
        console.log(1);
        var numbersOfRounds = prompt('Ile rund?');
        console.log(2);
        return numbersOfRounds;
        console.log(3);
        
        console.log(4);
        
};
var numberOfRounds = askHowManyRounds();
showNumberOfRounds.innerHTML = 'ilość rund: ' + askHowManyRounds();


beginButton.addEventListener('click', function() {
        
       document.getElementById('stone').style.display = "block";
       document.getElementById('paper').style.display = "block";
       document.getElementById('scissors').style.display = "block";
       askHowManyRounds();
});     






function startRounds() {
    
}

function showButtons() {
        
};




paper.addEventListener('click', function clickPaper() {	

});

scissors.addEventListener('click', function clickScissors() {	

});

function drawKomputer() {

}

function didWon() {

}

