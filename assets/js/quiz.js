// Global Variables
var gameTimer;
// 1. Write jQuery to select element with id "timer"
var timerDisplay = $("#timer");
var maxTime = 15;
var timerInterval;
var correctAnswers = 0;
var incorrectAnswers = 0;


$("#scoreboard").hide()

function displayTimer() {
    $("#main").show()
    timerDisplay.text(maxTime);
    timerInterval = setInterval(function () {
        // decrease maxTime by 1
        maxTime--;
        // redisplay maxTime
        timerDisplay.text(maxTime);
        if (maxTime === 0) {
            stopQuiz();
        }
    }, 1000)
}
// Functions
function stopQuiz() {
    console.log("Inside stopQuiz");
    // Stop timers
    clearInterval(timerInterval);
    //clearTimeout(gameTimer);
    //console.log("gameTimer stopped", gameTimer);
    // Give score ( this will be another function that pulls form inputs and calculates score)
    renderScore();
}
$(".submit").on("click", renderScore)
$("#newGame").on("click", displayTimer)
function renderScore() {
    var score = 0;
    var unanswered = 0;
    var answers = ["Reed", "Blue", "Julia", "23", "hamburger"];
    var middleNameAnswer = $("#middleNameQuestion :radio:checked").val();
    if (middleNameAnswer === answers[0]) {
        score++;

    }
    if (middleNameAnswer === undefined) {
        unanswered++
    }

    var colorAnswer = $("#colorQuestion :radio:checked").val();
    if (colorAnswer === answers[1]) {
        score++;
    }
    if (colorAnswer === undefined) {
        unanswered++
    }

    var wifeAnswer = $("#wifeQuestion :radio:checked").val();
    if (wifeAnswer === answers[2]) {
        score++;
    }
    if (wifeAnswer === undefined) {
        unanswered++
    }

    var ageAnswer = $("#ageQuestion :radio:checked").val();
    if (ageAnswer === answers[3]) {
        score++;
    }
    if (ageAnswer === undefined) {
        unanswered++
    }

    var foodAnswer = $("#foodQuestion :radio:checked").val();
    if (foodAnswer === answers[4]) {
        score++;
    }
    if (foodAnswer === undefined) {
        unanswered++
    }


    var wrongAnswers = 5 - score;

    $("#correctAnswers p").text("Correct: " + score);
    $("#wrongAnswers p").text("wrong: " + wrongAnswers);
    $("#unanswered p").text("unanswered: " + unanswered);

    $("#scoreboard").show()
    $("#main").hide()

    //alert("works")
    // this function will pull form inputs
    // compare answers with the correct answers
    // update score based on if it's correct or not
    // then displayScore()
}

// Methods
// When document is ready
$(document).ready(function () {
    // start game timer
    //gameTimer =(stopQuiz, 15000);
    console.log("gameTimer started", gameTimer);

    // display timer
    displayTimer();

});

