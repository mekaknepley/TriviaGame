//variables
var currentQuestion ;
var timeLeft ;
var numberOfAnsweredQuestion = 0;
var timerId ;
var rightAnswer = 0;

var possibleQuestions= [
    { question:"What name is given to the ancestral castle of House Stark?",
      option1:"1",
      option2:"Winterfell",
      option3:"3",
      option4:"4",
      correctAnswer:2 },
    { question:"Who is is the younger brother of Cersei and Jaime Lannister?",
      option1:"1",
      option2:"????",
      option3:"Tyrion Lannister",
      option4:"????",
      correctAnswer:3 },
    { question:"Who ordered Ned Stark's execution?",
      option1:"Joffrey",
      option2:"????",
      option3:"????",
      option4:"????",
      correctAnswer:1 },
    { question:"What name was given to the infamous wedding in which Robb Stark, his wife and mother are all murdered?",
      option1:"1",
      option2:"The Red Wedding",
      option3:"????",
      option4:"????",
      correctAnswer:2 },
    { question:"What is the nickname of Sandor Clegane?",
      option1:"The Hound",
      option2:"????",
      option3:"????",
      option4:"????",
      correctAnswer:1 },
    { question:"Name the stronghold and ancestral seat of House Lannister?",
      option1:"Casterly Rock",
      option2:"????",
      option3:"????",
      option4:"????",
      correctAnswer:1 },
    { question:"What is the nickname of Lord Petyr Baelish?",
      option1:"1",
      option2:"????",
      option3:"????",
      option4:"Littlefinger",
      correctAnswer:4 },
    { question:"Bran Stark was paralyzed from the waist down after being pushed out of a tower by whom?",
      option1:"1",
      option2:"????",
      option3:"Jaime Lannister",
      option4:"????",
      correctAnswer:3 },
    { question:"What is the name of the ship commanded by Yara Greyjoy?",
      option1:"1",
      option2:"????",
      option3:"????",
      option4:"The Black Wind",
      correctAnswer:4 },
    { question:"What name do the people of the Seven Kingdoms call the Free Folk who live beyond the Wall?",
      option1:"Wildlings",
      option2:"????",
      option3:"????",
      option4:"????",
      correctAnswer:1 },
    
];




//functions
function restartGame() {
    $("#introScreen").show();
    $("#questionScreen").hide();
    $("#recapScreen").hide();
    $("#finalScreen").hide();
    
}
function startQuestion() {
    $("#introScreen").hide();
    $("#questionScreen").show();
    $("#recapScreen").hide();
    $("#finalScreen").hide();
    pickQuestion();
    $("#questionHeader").html("Question # " + (numberOfAnsweredQuestion +1));
    timeLeft = 10;
    $("#timer").html(timeLeft);
    $("#question").html(currentQuestion.question);
    $("#option1").html(currentQuestion.option1);
    $("#option2").html(currentQuestion.option2);
    $("#option3").html(currentQuestion.option3);
    $("#option4").html(currentQuestion.option4);
    timerId = setInterval(timerCountDown ,1000);
}

function pickQuestion() {
    currentQuestion = possibleQuestions[numberOfAnsweredQuestion]; // replace with random question
}

function timerCountDown() {
    timeLeft --;
    $("#timer").html(timeLeft);
    if (timeLeft == 0) {
        recap(false,true);
    }
}

function pickAnswer(option) {
   if (currentQuestion.correctAnswer == option) {
    rightAnswer++;
    }
    recap(currentQuestion.correctAnswer == option,false);

}

function recap(answeredCorrectly,timeUp) {
    $("#introScreen").hide();
    $("#questionScreen").hide();
    $("#recapScreen").show();
    $("#finalScreen").hide();
    numberOfAnsweredQuestion++;
    clearInterval(timerId);
    if (timeUp) {
        $("#rightScoreText").hide();
        $("#wrongScoreText").hide();
        $("#timeUpText").show();

    }
    else if (answeredCorrectly) {
        $("#rightScoreText").show();
        $("#wrongScoreText").hide();
        $("#timeUpText").hide();
    }
    else {
        $("#rightScoreText").hide();
        $("#wrongScoreText").show();
        $("#timeUpText").hide();
    }
    switch (currentQuestion.correctAnswer) {
        case 1:
        $("#rightAnswerText").html(currentQuestion.option1);
        break;
        case 2:
        $("#rightAnswerText").html(currentQuestion.option2);
        break;
        case 3:
        $("#rightAnswerText").html(currentQuestion.option3);
        break;
        case 4:
        $("#rightAnswerText").html(currentQuestion.option4);
    }
    $("#recapQuestion").html(currentQuestion.question);
    setTimeout(leaveRecap, 5000);
}
function leaveRecap() {
    if (possibleQuestions.length == numberOfAnsweredQuestion) {
        showFinalScreen();
    }
    else {
        startQuestion();
    }

}

function showFinalScreen() {
    $("#introScreen").hide();
    $("#questionScreen").hide();
    $("#recapScreen").hide();
    $("#finalScreen").show();
    $("#finalScoreText").html("Your score is " + rightAnswer +" / " + numberOfAnsweredQuestion);
    
}


//events

$(document).ready(function(){
    restartGame();
});

$("#startButton").click(function(){
    startQuestion();
});

$("#option1").click(function(){
    pickAnswer(1);
});

$("#option2").click(function(){
    pickAnswer(2);
});

$("#option3").click(function(){
    pickAnswer(3);
});

$("#option4").click(function(){
    pickAnswer(4);
});

$("#restartButton").click(function(){
    numberOfAnsweredQuestion = 0;
    rightAnswer = 0;
    startQuestion(); 
});


/* notes
intro screen with start button

next screen will have questions with four answers
10 seconds to answer the question (timer)
if you guess right --- you get a YEA
if you guess wrong --- you get a NOOO
but after 10 seconds the game gives you the anwser
and the next question comes up




*/
