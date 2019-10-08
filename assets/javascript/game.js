// Declare variables
var redGem = 0;
var blueGem = 0;
var yellowGem = 0;
var greenGem = 0;
var targetScore = 0

var gemValues = {
    "red" : 0,
    "blue" : 0,
    "yellow" : 0,
    "green" : 0,
}


function getRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

function randomizeGemValues(min, max){
    for (var key in gemValues){
        gemValues[key] = getRandomNumberBetween(1, 12);
    }
}

targetScore = getRandomNumberBetween(19,120);
$("#target").text(targetScore);
randomizeGemValues(1, 12);
console.log("target score: " + targetScore);
console.log(gemValues)
