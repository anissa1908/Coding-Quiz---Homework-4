var startBtn = document.getElementById("start");
var timer = document.getElementById("timer");
var time = 24;

startBtn.addEventListener("click", startQuiz);
function startQuiz(){
    setInterval(count,1000)
    document.getElementById("q1").style.display = "block";
}

function count(){
    time--;
    timer.textContent = time;
}

//event delegation
document.addEventListener("click", function(event){
    console.log(event.target);
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