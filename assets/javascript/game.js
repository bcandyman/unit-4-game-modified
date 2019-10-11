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
$("#btn-info-flyout").on("click", function(){
    var flyoutDiv = $("<div>")
    flyoutDiv.addClass("flyout instructions")
    flyoutDiv.html($("<p>").text("You will be given a random number at the start of the game."))
    flyoutDiv.append($("<p>").text("There are four crystals below. By clicking on a crystal, you will add a specific amount of points to your total score."))
    flyoutDiv.append($("<p>").text("You win the game by matching your total score to random number, you lose the game if your total score goes above the random number."))
    flyoutDiv.append($("<p>").text("The value of each crystal is hidden from you until you click on it."))
    flyoutDiv.append($("<p>").text("Each time when the game starts, the game will change the values of each crystal."))
    $(".col-title").append(flyoutDiv)
    console.log("flyout button clicked!")
})

$(".button-gem").on("click", function(event){
    calculateUserScore(gemValues[$(this).val()])
})
