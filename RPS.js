var total=0;
var total2=0;
var ties=0;
var user=document.getElementById("user");
var computer=document.getElementById("computer");
var score=document.getElementById("score");
var compScore=document.getElementById("compScore");
var tie=document.getElementById("tie");
function choiceRock(){
    let value=Math.floor(Math.random() * 3) + 1;
    if(value==1){
        user.innerHTML="Your Choice: ROCK"
        computer.innerHTML="Computer's Choice: ROCK"
        ties++;
        tie.innerHTML="Ties: "+ties;
    }else if(value==2){
        user.innerHTML="Your Choice: ROCK"
        computer.innerHTML="Computer's Choice: PAPER"
        total2++
        compScore.innerHTML="Computer's Score: "+total2
        tie.innerHTML="Ties: "+ties
    }else{
        user.innerHTML="Your Choice: ROCK"
        computer.innerHTML="Computer's Choice: SCISSOR"
        total++
        score.innerHTML="Your Score: "+total;
    }
}
function choicePaper(){
    let value=Math.floor(Math.random() * 3) + 1;
    if(value==1){
        user.innerHTML="Your Choice: PAPER"
        computer.innerHTML="Computer's Choice: ROCK"
        total++
        score.innerHTML="Your Score: "+total;
    }else if(value==2){
        user.innerHTML="Your Choice: PAPER"
        computer.innerHTML="Computer's Choice: PAPER"
        ties++;
        tie.innerHTML="Ties: "+ties;
    }else{
        user.innerHTML="Your Choice: PAPER"
        computer.innerHTML="Computer's Choice: SCISSOR"
        total2++
        compScore.innerHTML="Computer's Score: "+total2
    }
}
function choiceScissor(){
    let value=Math.floor(Math.random() * 3) + 1;
    if(value==1){
        user.innerHTML="Your Choice: SCISSOR"
        computer.innerHTML="Computer's Choice: ROCK"
        total2++
        compScore.innerHTML="Computer's Score: "+total2
    }else if(value==2){
        user.innerHTML="Your Choice: SCISSOR"
        computer.innerHTML="Computer's Choice: PAPER"
        total++
        score.innerHTML="Your Score: "+total;
    }else{
        user.innerHTML="Your Choice: SCISSOR"
        computer.innerHTML="Computer's Choice: SCISSOR"
        ties++;
        tie.innerHTML="Ties: "+ties;
    }
}
function reset(){
    total=0;
    total2=0;
    ties=0;
    user.innerHTML="Your Choice: ";
    computer.innerHTML="Computer's Choice: ";
    score.innerHTML="Your Score: 0";
    compScore.innerHTML="Computer's Score: 0";
    tie.innerHTML="Ties: 0";
}