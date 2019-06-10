$(document).ready(function() {

// Create Playernumber display
let playerNumber = 0;
$("#playerNumber").text(playerNumber);

// Create random number generator to pick rnadom number anywhere from 19 - 120

$("#randomButton").on("click", function(){
    let random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#randomNumber").text(random);
});

// Create button hidden value randomization
let button1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let button2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let button3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
let button4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// Create click function for each of the buttons so that when the button is clicked, each will hold a different hidden random value and that random value gets added to the "Your Number" tally

$("#button1").on("click", function(){
        playerNumber = playerNumber + button1;
        $("#playerNumber").text(playerNumber);
        if (playerNumber === random) {
            winning();
        }
        else (playerNumber > random) ;{
            losing();
        }
});

$("#button2").on("click", function(){
        playerNumber = playerNumber + button2;
            $("#playerNumber").text(playerNumber)
});

$("#button3").on("click", function(){
        playerNumber = playerNumber + button3;
            $("#playerNumber").text(playerNumber)
});

$("#button4").on("click", function(){
        playerNumber = playerNumber + button4;
            $("#playerNumber").text(playerNumber)
});

// Create Scoreboard values and functions
let win = 0;
let lose = 0;

function winning() {
    win++;
    $("#winsTracker").text(win);
}

function losing() {
    lose++;
    $("#lossesTracker").text(lose);
}

});

// let button1 = Math.floor(Math.floor() * (12 - 1 + 1)) + 1;

// $("")

// let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//     for (let i = 0; i < value.length; i++) {
//         let buttonValue = $(".buttontest");
//         buttonValue.attr("data-value", value[i])
//         $(".buttontest").append(buttonValue);}

// $(".buttontest")on.("click", function() {
//     let playerValue = ($(this).attr("data-value"));
//     playerValue = parseInt(playerValue);
//     $("#playerNumber").text(playerValue);




// })