'use strict';
let player1=prompt("Enter Player 1's name😊");
let player2=prompt("Enter Player 2's name😊");
if(player1==="" && player2==="")
{
    player1="PLAYER 1";
    player2="PLAYER 2";
    document.querySelector(".mp-1").textContent=player1;
    document.querySelector(".mp-2").textContent=player2;
}
else
{
    document.querySelector(".mp-1").textContent=player1;
    document.querySelector(".mp-2").textContent=player2;
}

const diceRoll=document.querySelector(".rolled");
const rollIt=document.querySelector(".roll-it");
let cpScore=0;
let activePlayer=1;
let playing=true;
diceRoll.classList.add("hidden");
rollIt.addEventListener("click",function(){
    if(playing)
    {
        const random=Math.trunc(Math.random()*6)+1;
        diceRoll.classList.remove("hidden");
        diceRoll.src=`images/dice-${random}.png`;
        if(random!==1)
        {
            cpScore+=random;
            document.querySelector(`.cwm-${activePlayer}`).textContent=cpScore;
        }
        else
        {
            document.querySelector(`.cwm-${activePlayer}`).textContent=0;
            // document.querySelector(`.inner-container-${activePlayer}`).classList.remove("colour");
            activePlayer=activePlayer===1?2:1;
            // document.querySelector(`.inner-container-${activePlayer}`).classList.add("colour");
            cpScore=0;
            play1.classList.toggle("colour");
            play2.classList.toggle("colour");
        }
    }
});


const hold=document.querySelector(".holding");
const play1=document.querySelector(".inner-container-1");
const play2=document.querySelector(".inner-container-2");
const overlay=document.querySelector(".overlay");
const result=document.querySelector(".result");
hold.addEventListener("click",function(){
    if(playing)
    {
        const playTotal= document.querySelector(`.ms-${activePlayer}`).textContent;
        let total=Number(playTotal)+cpScore;
        document.querySelector(`.ms-${activePlayer}`).textContent=total;
        if(total>=50)
        {
            playing=false;
            diceRoll.classList.add("hidden");
            document.querySelector(`.inner-container-${activePlayer}`).classList.add("wins");
            document.querySelector(`.wm-${activePlayer}`).classList.add("wins-inner");
            if(activePlayer==1)
            {
                result.textContent=`HURRAY!🥳🥂${player1} WINS!`;
            }
            else
            {
                result.textContent=`HURRAY!🥳🥂${player2} WINS!`;
            }
            overlay.classList.remove("hidden");
            result.classList.remove("hidden");
        }
        document.querySelector(`.cwm-${activePlayer}`).textContent=0;
        activePlayer=activePlayer===1?2:1;
        cpScore=0;
        play1.classList.toggle("colour");
        play2.classList.toggle("colour");
    }
});
overlay.addEventListener("click",function(){
    overlay.classList.add("hidden");
    result.classList.add("hidden");
    rules.classList.add("hidden");
});


const newGame=document.querySelector(".new-game");
const totalScore1=document.querySelector(".ms-1");
const currentScore1=document.querySelector(".cwm-1");
const totalScore2=document.querySelector(".ms-2");
const currentScore2=document.querySelector(".cwm-2");    
newGame.addEventListener("click", function(){
    activePlayer=activePlayer===1?2:1;
    document.querySelector(`.inner-container-${activePlayer}`).classList.remove("wins");
    document.querySelector(`.wm-${activePlayer}`).classList.remove("wins-inner");
    totalScore1.textContent=0;
    currentScore1.textContent=0;
    totalScore2.textContent=0;
    currentScore2.textContent=0;
    activePlayer=1;
    cpScore=0;
    play1.classList.add("colour");
    play2.classList.remove("colour");
    diceRoll.classList.add("hidden");
    playing=true;
});


const startButtom=document.querySelector(".btn");
const rules=document.querySelector(".rules");
startButtom.addEventListener("click",function(){
    overlay.classList.remove("hidden");
    rules.classList.remove("hidden");
});


const closeButton=document.querySelector(".close");
closeButton.addEventListener("click",function(){
    overlay.classList.add("hidden");
    rules.classList.add("hidden");
});


document.addEventListener("keydown",function(e){
    if(e.key==="Escape")
    {
        overlay.classList.add("hidden");
        result.classList.add("hidden");
        rules.classList.add("hidden");
    }
});