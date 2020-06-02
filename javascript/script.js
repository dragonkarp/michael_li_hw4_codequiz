//selectors
var answerFeedbackEl = document.querySelector("#answer-feedback");
var timer = document.querySelector("#timer");
var mainContentBox = document.querySelector("#main-content");
var scoreBoardButtonTopRight = document.querySelector("#top-right-sb-button");

var secondsLeft = 60;
var totalScore = 0;
var scoresBoardList = {};

//question and answers bank
//how do you traverse this? 
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
        "correctAns": 4
    }
};

// test area ++++++
//generateIntroContent();
//generateQuesAnsContent();
//offerHighScore();
//scoreBoard();
// test area ++++++


function main () {
    return;
}

// Fills content box with introduction
// Has an event listener: 
//      Calls generateQuesAnsContent();
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

//     introButton.addEventListener("click", function() {
//     event.preventDefault()
//         clearContent();
//     });
// }

// // Clears all the content in the main content box
// clearContent() {
//     mainContentBox.querySelectorAll('*').forEach(n => n.remove());
// }

// function generateQuesAnsContent () {
//     var question = document.createElement("h3");
//     var answer = document.createElement("button")
//     var correctAns;

//     for (var i in questionBank) {
//         question.textContent = i.question;
//         console.log(question);
//     }

// }


//offer to enter name for the high score board
//why does this give a token/syntax error??
// function offerHighScore(totalScore) {
//     var finishedNotification = document.createElement("h5");
//     var displayTotalScore = document.createElement("p");
//     var nameInputForm = document.createElement("form");
//     var nameInputLabel = document.createElement("label");
//     var nameInputField = document.createElement("input");
//     var submitNameButton = document.createElement("button");

//     // Create the content
//     finishedNotification.textContent = "All Done!";
//     displayTotalScore.textContent = "Your total score is " + totalScore + "."; 
//     mainContentBox.appendChild(finishedNotification);
//     mainContentBox.appendChild(displayTotalScore);
//     mainContentBox.appendChild(nameInputForm);
//     nameInputForm.appendChild(nameInputLabel);
//     nameInputLabel.textContent = "Enter your name:";
//     nameInputForm.appendChild(nameInputField);
//     mainContentBox.appendChild(submitNameButton);
//     submitNameButton.textContent = "submit score";

//     // Handle the input
//     nameInputField.setAttribute("class", "nameInput");
//     var playerName = nameInputField.getElementsByClassName("nameInput").value;

//     submitNameButton.addEventListener("click", function(){
//         event.preventDefault();
//         topTenScores[playerName] = totalScore;
//         clearContent();
//     });
// } 


//final score board
//user does not interact with it
function scoreBoard () {
    var scoreBoardTitle = document.createElement("h3");
    var listOfScores = document.createElement("ol");
    var li = document.createElement("li");
    var nameAndScoreText = document.createElement("p");
    var closeButton = document.createElement("button");

    mainContentBox.appendChild(scoreBoardTitle);
    scoreBoardTitle.textContent = "Scores"
    mainContentBox.appendChild(listOfScores);

    for (var i in scoresBoardList) {
        listOfScores.appendChild(li);
        li.appendChild(nameAndScoreText);
        nameAndScoreText.textContent = scoresBoardList.i + ": " + scoresBoardList[i];
    }

    mainContentBox.appendChild(closeButton);
    closeButton.addEventListener("click", function(){
        event.preventDefault();
        clearContent();
        main();
    });

}


//timer count down
//basic functionality. working. 
function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timer.textContent = " ";
    }

  }, 1000);
}

function decreaseTimer(){
    secondsLeft -= 5;
}

scoreBoardButtonTopRight.addEventListener("click", function(){
    scoreBoard();
});


/* Strategy ++++++++++++++++++++++++++++++++++++++++++++++++++
On page load:
Top bar, with score screen view button to the right.
Introduction content.
Timer set at 60, but not counting down.
Empty space to the right of the timer. the space is populated with "CORRECT", or "WRONG" upon an answer click.
Bottom bar with flavor text.

How the user interacts with the program:
If the user clicks the top right score screen button, the score screen appears, any process currently on the screen is ended. 
When the score screen is exited, the introduction content will always appear.
When the user clicks start, the timer begins to count down. 
When the user enters a correct answer, the score is updated, the current content is destroyed and new content populated the main content box. 
When the user gets a question wrong, the count down timer is reduced by 10 seconds. 
When the user is done with all questions, they are given a field to enter their name.
When the user clicks the button to submit their name they are presented with the scoreboard.



main(){
    totalScore = 0;
    generateIntroContent();
    startTimer()
    generateQuesAnsContent();
    offerHighScore(finalScore);


}

@generateIntroContent(){
    generate a title, instructions, and a start button
    when start button is clicked, clearContent().
}

@?clearContent(){
    clears all the content in the main content box

    var node= document.getElementById("parent");
    node.querySelectorAll('*').forEach(n => n.remove());
}

generateQuesAnsContent(){
    loop Q&A object{
        display on page Q&A(create the buttons)
        create a button event listener
            the click is recorded in a var
            compared to right answer

    }
}

@offerHighScore(finalScore){
    creates text
    creates input field
    creates button
    if button is click, name is submitted
    name saved to memory
    call clearContent();
    call scoreBoard();
}

@scoreBoard(){

}

@startTimer(){
    starts the timer.
}

@decreaseTimer(){
    decreases time by 5 seconds if wrong answer is given. 
}

feedbackText(bool){
    called when a answer is selected.
    if correct, display correct
    if not, display wrong.
}

resetTime(){ Do I actually need this?
    stop timer
    write 60 to textContent of timer element 
}

//EVENT LISTENERS
need global event listener for top right scoreboard button. 
call back function{
    call clearContent()
    call reset timer()
    call scoreBoard()

}
@ = created
@? = created, but has bugs
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/