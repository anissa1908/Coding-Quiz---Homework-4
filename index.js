// GIVEN I am taking a code quiz


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

// show quiz immediately
buildQuiz();

// when quiz is finished, show results
submitButton.onclick('click', showResults)

// used object literals to represent each question in the quiz and array to hold all of the questions
const myQuestions = []
    {
        question: "What year did Kobe get drafted to the NBA?",
        A. 1998
        B. 1991
        C. 1996
        D. 1994
    };
  

{
        question: "What team drafted Kobe in the NBA Draft?",
        A. Los Angeles Lakers
        B. Charlotte Hornets
        C. Chicago Bulls
        D. Portland Trailblazers
};

{
        question: "What nickname is Kobe know by?"
        A. Vino
        B. KB 24
        C. Black Mamba
        D. All Of The Above
};

{
        question: "How many points did Kobe score in his highest scoring game?"
        A. 90
        B. 81
        C. 60
        D. 48
};

{
        question: "What film did Kobew win an Academy Award for?"
        A. Kobe Doin Work
        B. The Last Dance
        C. Dear BAsketball
        D. The Wizinard Series
};

{
        question: "What model did Kobe collaborate with on a rap single?"
        A. Tyra Banks
        B. Queen Latifah
        C. Naomi Campbell
        D. Veronica Webb
};

{
        question: "How many NBA Championship rings did Kobe win in his career?"
        A. Five
        B. Four
        C. Seven
        D. Six
};

{
        question: "How many siblings does Kobe have?"
        A. One
        B. Four
        C. Two
        D. Zero
};

{
        question: "What NBA player lived with Kobe and his family?"
        A. Shaq
        B. Penny Hardaway
        C. Allen Iverson
        D. Tracy McGrady

};










// THEN a timer starts and I am presented with a question



// WHEN I answer a question



// THEN I am presented with another question



// WHEN I answer a question incorrectly



// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0



// THEN the game is over



// WHEN the game is over



// THEN I can save my initials and score