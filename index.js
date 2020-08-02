// GIVEN I am taking a code quiz

// show quiz immediately
buildQuiz();

// When I click the start button
var startButton = $('.start').startButton

// THEN a timer starts and I am presented with a question

//Store the total number of questions
var totalQuestions = $('.questions').size(8);

//Set the current question to display to 1
var currentQuestion = 0;

//Store the selector in a variable.
$questions = $('.questions');

//Hide all the questions
$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();

//attach a click listener to the HTML element with the id of 'next'
var nextButton = document.querySelector("#next");
$('#next').click(function () {

     //fade out the current question,
     //putting a function inside of fadeOut calls that function 
     //immediately after fadeOut is completed, 
     //this is for a smoother transition animation
     $($questions.get(currentQuestion)).fadeOut(function () {

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







// THEN a timer starts and I am presented with a question



// WHEN I answer a question



// THEN I am presented with another question



// WHEN I answer a question incorrectly



// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0



// THEN the game is over



// WHEN the game is over



// THEN I can save my initials and score