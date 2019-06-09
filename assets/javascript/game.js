$(document).ready(function() {

// Create Scoreboard values
let win = 0;
let lose = 0;

let playerNumber = 0;
$("#playerNumber").text(playerNumber);

// Create random number generator to pick rnadom number anywhere from 19 - 120

$("#randomButton").on("click", function(){
    let random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#randomNumber").text(random);
});

// Create random number generator for the 4 different buttons so that when the player clicks on, each will generate a random value to be added to the PlayerNumber and guess the Computer Number






});