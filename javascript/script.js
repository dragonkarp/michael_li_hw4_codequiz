// Selectors.
var answerFeedbackEl = document.querySelector("#answer-feedback");
var timer = document.querySelector("#timer");
var mainContentBox = document.querySelector("#main-content");
var scoreBoardButtonTopRight = document.querySelector("#top-right-sb-button");

// Global variables.
var secondsLeft = 60;
var totalScore = 0;
var scoresBoardList = {"name1": 1, "name2": 2, "name3": 3};
var setIntervalID;
//question and answers bank test object. will implement actual content later.
//how do you traverse this? 
// const questionBank = {
//     "question1": {
//         "question": "Question 1",
//         "answers": [
//             'Q1, A1',
//             'Q1, A2',
//             'Q1, A3',
//             'Q1, A4'],
//         "correctAns": 1 
//     },
//     "question2": {
//         "question": "Question 2",
//         "answers": [
//             'Q2, A1',
//             'Q2, A2',
//             'Q2, A3',
//             'Q2, A4'],
//         "correctAns": 4
//     }
// };

// test area ++++++

generateIntroContent();
//generateQuesAnsContent();
//offerHighScore();
//scoreBoard();
//startTimer();
//decreaseTimer();
//feedback (true);
//feedback (false);
//clearContent();

// test area ++++++

// Fills content box with introduction.
function generateIntroContent () {
    var introStatement = document.createElement("h1");
    var introRules = document.createElement("p");
    var introButton = document.createElement("button");
    

    mainContentBox.appendChild(introStatement);
    introStatement.textContent = "Take the quiz to see how good you are at JS!";
    introStatement.setAttribute("style", "text-align: center");

    mainContentBox.appendChild(introRules);
    introRules.textContent = "You have 60 seconds to answer 10 questions. Each correct answer awards you with 1 point. Each wrong answer brutally punishes you by subtracting 5 seconds off the clock.";
    introRules.setAttribute("style", "text-align: center");

    mainContentBox.appendChild(introButton);
    introButton.textContent = "START";

    introButton.addEventListener("click", function() {
    event.preventDefault()
        clearContent();
        startTimer();
        //generateQuesAnsContent();
    });
}

// // Clears all the content in the main content box
function clearContent() {
    mainContentBox.querySelectorAll('*').forEach(n => n.remove());
}
let index = 0;
/////
const questionBank = [
    {
        question: "How do you create an array?",
        answers: [
            '1. var = []',
            '2. var = {}',
            '3. array = ()',
            '4. start array[]'],
        correctAns: '1. var = []'
    },
    {
        question: "What datatype does an if statement take?",
        answers: [
            '1. bool',
            '2. int',
            '3. float',
            '4. string'],
        correctAns: 'A1'
    }
];

////
function generateQuesAnsContent () {
    var question = document.createElement("h3");
    var ulOfAnswers = document.createElement("ul");
    console.log("index", index);
    mainContentBox.textContent = "";
        
    question.textContent = questionBank[index].question;
    mainContentBox.appendChild(question);
    const choices = questionBank[index].answers;
    for (var i = 0; i < choices.length; i++) {
        var liAnswerItem = document.createElement("li");
        var answerButton = document.createElement("button");
        answerButton.textContent = choices[i];
        answerButton.addEventListener("click", function(){
            
            if (this.textContent === questionBank[index].correctAns) {
                feedback(true); 
            } else {
                feedback(false); 
            }

            if (index === questionBank.length-1) { // review this
                clearInterval(setIntervalID);
            } else {
                index++;
            }
        });
        liAnswerItem.appendChild(answerButton);
        ulOfAnswers.appendChild(liAnswerItem);
        mainContentBox.appendChild(ulOfAnswers);
    }




    // // Loop through questionBank.
    // for (var i in questionBank) {
    //     mainContentBox.appendChild(question);
    //     mainContentBox.appendChild(ulOfAnswers);
    //     question.textContent = questionBank[i].question;
    //     ulOfAnswers.appendChild(liAnswerItem);

    //     // Loop through the value of each item in questionBank.
    //     // Each item has the question, list of answers, and the correct answer.
    //     for (var j in questionBank.i.answers) {
    //         ulOfAnswers.appendChild(liAnswerItem);
    //         liAnswerItem.appendChild(answerButton);
    //         answerButton.textContent = j;

    //         answerButton.addEventListener("click", function(){
    //             // answerButton.
    //             // if (questionBank.i.correctAns === ) {

    //             // }
    //         });
    //     }
    // }

}


// Offer to enter name for the high score board
function offerHighScore(totalScore) {
    var finishedNotification = document.createElement("h5");
    var displayTotalScore = document.createElement("p");
    var nameInputForm = document.createElement("form");
    var nameInputLabel = document.createElement("label");
    var nameInputField = document.createElement("input");
    var submitNameButton = document.createElement("button");

    // Create the content
    finishedNotification.textContent = "All Done!";
    displayTotalScore.textContent = "Your total score is " + totalScore + "."; 
    mainContentBox.appendChild(finishedNotification);
    mainContentBox.appendChild(displayTotalScore);
    mainContentBox.appendChild(nameInputForm);
    nameInputForm.appendChild(nameInputLabel);
    nameInputLabel.textContent = "Enter your name:";
    nameInputForm.appendChild(nameInputField);
    mainContentBox.appendChild(submitNameButton);
    submitNameButton.textContent = "submit score";

    // Handle the input
    nameInputField.setAttribute("class", "nameInput");
    var playerName = nameInputField.getElementsByClassName("nameInput").value;

    submitNameButton.addEventListener("click", function(){
        event.preventDefault();
        topTenScores[playerName] = totalScore;
        clearContent();
    });
} 


// Final score board.
// User does not interact with it.
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


// Timer count down
// Basic functionality. Functional. 
function startTimer() {
    setIntervalID = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
    generateQuesAnsContent();

    if(secondsLeft === 0) {
      clearInterval(setIntervalID);
      timer.textContent = " ";
    }

  }, 1000);
}

function decreaseTimer(){
    secondsLeft -= 5;
}

// Called by Q&A function
function feedback (bool) {
    clearInterval(setIntervalID);
    if (bool) {
        setTimeout(function(){ answerFeedbackEl.textContent = "Correct!"; }, 2000);
    } else {

        decreaseTimer();
        setTimeout(function(){ answerFeedbackEl.textContent = "Wrong!"; }, 2000);
       
    }
    startTimer();
}

// Global event listeners
scoreBoardButtonTopRight.addEventListener("click", scoreBoard);


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

@feedbackText(bool){
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
@* = implemented, no syntax errors, have not run functional test yet
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/