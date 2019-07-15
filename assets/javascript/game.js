//global variables 

//random number 
var randomNumber = Math.floor(Math.random()*150+19);

$("#targetScore").text(randomNumber);

var blue = Math.floor(Math.random()*11+1);
var pink = Math.floor(Math.random()*11+1);
var white = Math.floor(Math.random()*11+1);
var yellow = Math.floor(Math.random()*11+1);




//score
var wins = 0;
var losses = 0;
var score = 0;
$("#loss-count").text(losses);
$("#wins-count").text(wins);




//RESET 
function reset(){
     score = 0;
    randomNumber = Math.floor(Math.random()*101+19);
    $("#targetScore").text(randomNumber);
    blue = Math.floor(Math.random()*11+1);
    pink = Math.floor(Math.random()*11+1);
    white = Math.floor(Math.random()*11+1);
    yellow = Math.floor(Math.random()*11+1);

  
    $("#curentScore ").text(score);
}


function winner() {

    
    alert("Winner!");
    wins ++;
    $("#wins-count").text(wins);

    reset();
}


function loser() {


    alert ("Loser!");
    losses ++;
    $("#loss-count").text(losses);
    reset();
}



//Create a click function 
$("#blue").on("click", function(){

    
    score += blue

    $("#curentScore").text(score); 
    if (score == randomNumber){
        winner();
    }
    else if ( score > randomNumber){
        loser();
    }
});
$("#pink").on("click", function(){

    
    score += pink

    $("#curentScore").text(score); 
    if (score == randomNumber){
        winner();
    }
    else if ( score > randomNumber){
        loser();
    }
});
$("#white").on("click", function(){

    
    score += white

    $("#curentScore").text(score); 
    if (score == randomNumber){
        winner();
    }
    else if ( score > randomNumber){
        loser();
    }
});

$("#yellow").on("click", function(){
    
    score += yellow
    $("#curentScore").text(score); 
    if (score == randomNumber){
        winner();
    }
    else if ( score > randomNumber){
        loser();
    }
});