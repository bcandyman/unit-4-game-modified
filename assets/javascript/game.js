var loses = 0;
var targetScore = 0;
var userScore = 0;
var wins = 0;
var gemValues = {
    "red" : 0,
    "blue" : 0,
    "yellow" : 0,
    "green" : 0,
}

/////////Functions/////////

//This function returns a random number between the min and max parameters
function getRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

//This function loops through all key in the gemValues.
//Each item in gemValues will recieve a random value between the min and max parameters.
function randomizeGemValues(min, max){
    for (var key in gemValues){
        gemValues[key] = getRandomNumberBetween(min, max);
    }
}

//This function adds the value of the gem button pressed to the total score.
//This function determines if the player wins or loses.
function calculateUserScore(value){
    userScore+= value
    console.log(userScore)
    $(".score-total").text(userScore)
    if(userScore===targetScore){
        wins++
        $("#wins").text(wins)
        reset()
    }
    else if(userScore > targetScore){
        loses++
        $("#loses").text(loses)
        reset()
    }
}

//This function reset the document after each round played.
function reset(){
    targetScore = getRandomNumberBetween(19,120);
    randomizeGemValues(1, 12);
    userScore = 0;
    $("#target").text(targetScore);
    $(".score-total").text(0)
}


///////////Main///////////
//This area is initializing the game upon loading.
loses = 0;
wins = 0;
reset()
$("#wins").text(wins);
$("#loses").text(loses);


///////////Event Handling//////////
$(".gem-button-red").on("click",function(){
    console.log("Red Button Clicked!!")
    calculateUserScore(gemValues.red)
})

$(".gem-button-blue").on("click",function(){
    console.log("Blue Button Clicked!!")
    calculateUserScore(gemValues.blue)
})

$(".gem-button-yellow").on("click",function(){
    console.log("Yellow Button Clicked!!")
    calculateUserScore(gemValues.yellow)
})

$(".gem-button-green").on("click",function(){
    console.log("Green Button Clicked!!")
    calculateUserScore(gemValues.green)
})
