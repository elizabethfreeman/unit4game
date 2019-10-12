//Global variables
//3 different categories things we're tracking, value of crystals each round, the score for each round, the win and loss counter

var blueCrystal = 0
var redCrystal = 0
var greenCrystal =0 
var purpleCrystal = 0 // thise need to be randos 

// var crystal = {
//     blue:
//     {name : "Blue",}
// }

// create  a variable called target
var target; //grabbing the glass for the whiskey

// generate a random number and assign it to target
target = Math.floor(Math.random() * (150 - 90) ) + 90; // returns a random integer from 90 to 150

// show target number on screen
// reach into the html and grab the targetScore element 
    $("#targetScore").html(target)
// assign our randomNumber to that targetScore element

// console.log(target)
// when a person click a gem 
$(".gems").on("click",function(){
var chosenCrystal=$(this).attr("alt")
console.log(chosenCrystal)
    // get the value of the gem
    // IF STATEMNET ( w3 schools and looke up if statmetn )
    // if the chosenCristal === "purple crystal" 
        // scrore = scroe + purpleScristal
    // if the schoscristal === " red crysl"
    // add that value to the your score


    // is target the same as score
        // do something 
    // is target over score
        // do something wink wink you lose
})


//Functions
//


//Main Process
//