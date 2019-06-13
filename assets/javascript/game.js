$(document).ready(function() {

// Create random number generator to pick rnadom number anywhere from 19 - 120

$("#randomButton").on("click", function(){
    let computerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#computerNumber").text(computerNumber);
});

// Create button hidden value randomization
let button1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let button2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let button3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let button4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// Set Scoreboard to 0 to begin game with

let winsTracker = 0;
$("#winsTracker").text(winsTracker);

let lossesTracker = 0;
$("#lossesTracker").text(lossesTracker)

// Set "Player Number" to 0 to begin game with
let playerNumber = 0;
$("#playerNumber").text(playerNumber); 

// Create win function 
function winning() {
    winsTracker = winsTracker + 1;
    $("#winsTracker").text(winsTracker);
    reset();
    }

// Create lose function
function losing() {
    lossesTracker = lossesTracker + 1;
    $("#lossesTracker").text(lossesTracker);
    reset();
    }

// Create click function for each of the buttons so that when the button is clicked, each will hold a different hidden random value and that random value gets added to the "Your Number" tally after a comparison of the computer number against your number is complete 

$("#button1").on("click", function(){
        playerNumber = playerNumber + button1;
        let compNumber = $('#computerNumber').text()
        $("#playerNumber").text(playerNumber);
        // Compare player number against computer number to determine win or lose
        if (playerNumber === parseInt(compNumber)) {
            winning();
        } else if (playerNumber > parseInt(compNumber)) {
            losing();
            console.log("lose!")
        }
});

$("#button2").on("click", function(){
    playerNumber = playerNumber + button2;
    let compNumber = $('#computerNumber').text()
    $("#playerNumber").text(playerNumber);
    // Compare player number against computer number to determine win or lose
    if (playerNumber === parseInt(compNumber)) {
        winning();
    } else if (playerNumber > parseInt(compNumber)) {
        losing();
    }
});

$("#button3").on("click", function(){
    playerNumber = playerNumber + button3;
    let compNumber = $('#computerNumber').text()
    $("#playerNumber").text(playerNumber);
    // Compare player number against computer number to determine win or lose 
    if (playerNumber === parseInt(compNumber)) {
        winning();
    } else if (playerNumber > parseInt(compNumber)) {
        losing();
    }
});

$("#button4").on("click", function(){
    playerNumber = playerNumber + button4;
    let compNumber = $('#computerNumber').text()
    $("#playerNumber").text(playerNumber);
    // Compare player number against computer number to determine win or lose
    if (playerNumber === parseInt(compNumber)) {
        winning();
    } else if (playerNumber > parseInt(compNumber)) {
        losing();
    }
});

// Create reset 

function reset() {
    playerNumber = 0;
    $("#playerNumber"). text(playerNumber);
    computerNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#computerNumber").text(computerNumber);
    button1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    button2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    button3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    button4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

}

});
