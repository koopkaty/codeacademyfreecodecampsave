confirm("are you ready to play?")// Check if the user is ready to play!
var age = prompt("what's your age?");
if(age<13){
    console.log("Hey little one! You're allowed to play but I take no responsibility to what you're exposed to. Just sayin'");
}
else{
    console.log("Good! We're ready to play!");
}
//set up introduction
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")
var userAnswer =prompt("Do you want to race Bieber to the stage?")
if (userAnswer==="yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}
var feedback =prompt("rate the game on a scale of 1 to 10")
if (feedback>8){
    console.log("Thank you! We should race at the next concert!")
}
else{
    console.log("I'll keep practicing coding and racing.")
}
