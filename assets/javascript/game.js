var losses = 0;
var isFlyOutActive = false;
var targetScore = 0;
var userScore = 0;
var wins = 0;
var gameOverTimeout
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
//This function determines if the player wins or losses.
function calculateUserScore(value){
    clearTimeout(gameOverTimeout)
    userScore+= value
    console.log(userScore)
    $("#userScore").text(userScore)
    if(userScore===targetScore){
        wins++
        $("#wins").text(wins)
        reset()
    }
    else if(userScore > targetScore){
        losses++
        $("#losses").text(losses)
        reset()
    }
}

//This function closes the flyout
//This is called if the document is clicked on while the flyout it open
function closeFlyout(){
    if (isFlyOutActive){
        $("#flyoutInstructions").remove()
        isFlyOutActive = false;
    }
}

//This function reset the document after each round played.
function reset(){
    gameOverTimeout = setTimeout(function(){
        targetScore = getRandomNumberBetween(19,120);
        randomizeGemValues(1, 12);
        userScore = 0;
        $("#target").text(targetScore);
        $("#userScore").text(0)
    }, 1000);
}


///////////Main///////////
//This area is initializing the document and variables upon loading.
losses = 0;
wins = 0;
reset()
$("#wins").text(wins);
$("#losses").text(losses);


///////////Event Handling//////////
$("#btn-info-flyout").on("click", function(){
    event.stopPropagation()
    if(!isFlyOutActive){
        var flyoutDiv = $("<div>")
        flyoutDiv.attr("id","flyoutInstructions")
        flyoutDiv.addClass("flyout")
        flyoutDiv.html($("<H3>").text("Help"))
        flyoutDiv.append($("<hr />"))
        flyoutDiv.append($("<p>").text("You will be given a random target value at the start of the game."))
        flyoutDiv.append($("<p>").text("There are four crystals below. By clicking on a crystal, you will add a specific amount of points to your score."))
        flyoutDiv.append($("<p>").text("You win the game by matching the Score value to the Target value, you lose the game if your Score value exceeds the Target value."))
        flyoutDiv.append($("<p>").text("The value of each crystal is hidden from you, so it is up to you to determine their values upon selection."))
        flyoutDiv.append($("<p>").text("Each time when the game starts, the game will change the Target as well as the values of each crystal."))
        $(".header-row").append(flyoutDiv)
        isFlyOutActive = true;
    }
    else{
        closeFlyout()
    }
})

$("body").on("click",function(event){
    closeFlyout()
})

$(".button-gem").on("click", function(event){
    calculateUserScore(gemValues[$(this).val()])
})
