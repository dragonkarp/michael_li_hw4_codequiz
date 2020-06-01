//selectors
var answerFeedbackEl = document.querySelector("#answer-feedback");
var timer = document.querySelector("#timer");
var mainContentBox = document.querySelector("#main-content");

//question and answers bank
const questionBank = {
    "question1": {
        "question": "Question 1",
        "answers": [
            'Q1, A1',
            'Q1, A2',
            'Q1, A3',
            'Q1, A4'],
        "correctAns": 1 
    },
    "question2": {
        "question": "Question 2",
        "answers": [
            'Q2, A1',
            'Q2, A2',
            'Q2, A3',
            'Q2, A4'],
            "correctAns": 2
    }
};

//generateIntroContent();
//generateQuesAnsContent();
var x = 10;
function offerHighScoreEntry(x)

//fills content box with introduction
// function generateIntroContent () {
//     var introStatement = document.createElement("h1");
//     var introRules = document.createElement("p");
//     var introButton = document.createElement("button");
    

//     mainContentBox.appendChild(introStatement);
//     introStatement.textContent = "Take the quiz to see how good you are at JS!";
//     introStatement.setAttribute("style", "text-align: center");

//     mainContentBox.appendChild(introRules);
//     introRules.textContent = "You have 60 seconds to answer 10 questions. Each correct answer awards you with 1 point. Each wrong answer brutally punishes you by subtracting 5 seconds off the clock.";
//     introRules.setAttribute("style", "text-align: center");

//     mainContentBox.appendChild(introButton);
//     introButton.textContent = "START";
//     // how do you center the button?

//     //need logic that deletes the box and moves to first question 
// }


//offer to enter name for the high score board
//
function offerHighScoreEntry(finalScore) {
    var finishedNotification = document.createElement("h5");
    var displayFinalScore = document.createElement("p");
    var nameInputForm = document.createElement("form");
    var nameInputLabel = document.createElement("label");
    var nameInputField = document.createElement("input");
    var submitNameButton = document.createElement("button");

    finishedNotification.textContent = "All Done!";
    displayFinalScore.textContent = "Your final score is " + finalScore; 
    mainContentBox.appendChild(finishedNotification);
    mainContentBox.appendChild(displayFinalScore);
    mainContentBox.appendChild(nameInputForm);
    nameInputForm.appendChild(nameInputLabel);
    nameInputLabel.textContent = "Enter your name:";
    nameInputForm.appendChild(nameInputField);
    mainContentBox.appendChild(submitNameButton);
} 


//final score board
//user does not interact with it
function scoreBoard () {
    var scoreBoardTitle = document.createElement("h3");
    var listOfScores = document.createElement("ul");
    var highScoreName = document.createElement("li");


}















// function generateQuesAnsContent () {
//     var question = document.createElement("h3");
//     var answer = document.createElement("button")
//     var correctAns;

//     for (var i in questionBank) {
//         question.textContent = i.question;
//         console.log(question);
//     }

// }


/* 

function startTimer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    }, 1000)

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        next();
    }

}
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }



*/