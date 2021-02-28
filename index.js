var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var time = 24;
var currentQuestion = 1;
var counter;
var correct = 0;
var highscores = JSON.parse(localStorage.getItem("highscore")) || [];

startBtn.addEventListener("click", startQuiz);
function startQuiz(){
    counter = setInterval(count,1000);
    document.getElementById("q1").style.display = "block";
}

function count(){
    time--;
    timer.textContent = time;
    if(time === 0){
         gameOver();
    }
}

function gameOver(){
    clearInterval(counter);
    if(correct >= 6){
        alert("You have mamba mentality!")
    }else{
        alert("You're soft!")
    }
    Array.from(document.getElementsByClassName("qDiv")).forEach(function(element){
        element.style.display = "none"
    });
    var initials = prompt("Please enter your initials to save the high score!");
    highscores.push(`${initials} - ${correct}`);
    console.log(highscores)
    localStorage.setItem("highscore", JSON.stringify(highscores))
}


//event delegation
document.addEventListener("click", function(event){
    if(event.target.matches(".answerBtn")){
        if(event.target.attributes.isCorrect){
            alert("correct!");
            correct++
        }else{
            alert("Wrong!")
        }
        
        if(currentQuestion >= 8){
            gameOver()
        }else{
            currentQuestion++ ;
            document.getElementById("q"+currentQuestion).style.display = "block";
        }
      
    }
    //check to see if event.target is an actual answer btn, use if statement.
})



// function doMath(a,b,op){
//     if(op == 'add'){
//         return a+b
//     }
//     if(op == "minus"){
//         return a-b
//     }
//     if(op == 'times'){
//         return a*b
//     }
//     if(op == 'divide'){
//         return a/b
//     }
// }

// console.log(doMath(2,5,"times"));

//if if if if /// if elseif elseif else