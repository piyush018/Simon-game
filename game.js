
var level = 0;
var buttonColours = ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started = false;
$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level " + level);
    nextsequence();
    started = true;
    }
   
 });

$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAns(userClickedPattern.length-1);
});

function checkAns(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("sucess");
     if(gamePattern.length === userClickedPattern.length)
     setTimeout(function () {
            nextsequence();
        }, 1000);
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
    startOver();
    }
  }
  
function nextsequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);  
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();

}
function animatePress(currentColour){
     $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    } , 100);
}

function startOver(){
level =0 ;
gamePattern = [];
started = false;
}