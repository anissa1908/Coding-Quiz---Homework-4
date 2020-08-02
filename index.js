// show quiz immediately
function buildQuiz(quizQuestions, quizContainer, resultsContainer, submitButton);

// functions
function startQuiz();
function nextQuestion();
function showResults() {}

// store references to variables for buttons
var startButton = document.getElementById('start')
var submitButton = document.getElementById('submit');
var nextButton = document.getElementById('next');

// variables that make up quiz
var x = "";
const quizQuestions = document.getElementById('questions');
const quizContainer = document.getElementById('quiz');
var rightAnswer = document.getElementById('correct');
var wrongAnswer = document.getElementById('incorrect');
var resultsContainer = document.getElementById('results');

var myQuestions = [ ];


// Event listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
submitButton.addEventListener('click', showResults);

// When I click the start button
var startButton = $('.start').startButton

// THEN a timer starts and I am presented with a question



//Store the total number of questions
var totalQuestions = $('.quizQuestions').size(8);

//Set the current question to display to 1
var currentQuestion = 1;

// User selects answer to question and answer is stored in a variable

$questions = $('.questions');

// Conditional statement for each question whether the answer is correct or incorrect.


//attach a click listener to the HTML element with the id of 'next'
var nextButton = document.querySelector("#next");
$('#next').click(function () {

    
//increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no further questions to answer
        if (currentQuestion == totalQuestions) {

            var result = sum_values()

            //do stuff with the result
            alert(result);

        } else {

            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});

// store references to variables

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// functions 

function buildQuiz() {}
function showResults() {}



// when quiz is finished, show results
submitButton.onclick('click', showResults)











// WHEN I answer a question



// THEN I am presented with another question



// WHEN I answer a question incorrectly



// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0



// THEN the game is over



// WHEN the game is over



// THEN I can save my initials and score