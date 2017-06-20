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
function startGame() {
    $("#introScreen").hide();
    $("#questionScreen").show();
    $("#recapScreen").hide();
    $("#finalScreen").hide();
    pickAQuestion();
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

function pickAQuestion() {
    currentQuestion = possibleQuestions[0]; // replace with random question
}

function timerCountDown() {
    timeLeft --;
    $("#timer").html(timeLeft);
    if (timeLeft == 0) {
        clearInterval(timerId);
        recap(false);
    }
}

function pickAnswer(option) {
   if (currentQuestion.correctAnswer == option) {
    rightAnswer++;
    }
    numberOfAnsweredQuestion++;
    recap(currentQuestion.correctAnswer == option);

}

function recap(answeredCorrectly) {
    $("#introScreen").hide();
    $("#questionScreen").hide();
    $("#recapScreen").show();
    $("#finalScreen").hide();
    if (answeredCorrectly) {
        $("#rightScoreText").show();
        $("#wrongScoreText").hide();
    }
    else {
         $("#rightScoreText").hide();
        $("#wrongScoreText").show();
    }
    switch (currentQuestion.correctAnswer) {
        case 1:
        $("#rightAnswerText").html("")
    }
}


//events

$(document).ready(function(){
    restartGame();
});

$("#startButton").click(function(){
    startGame();
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




/* notes
intro screen with start button

next screen will have questions with four answers
10 seconds to answer the question (timer)
if you guess right --- you get a YEA
if you guess wrong --- you get a NOOO
but after 10 seconds the game gives you the anwser
and the next question comes up




*/
