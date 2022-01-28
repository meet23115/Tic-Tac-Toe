let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = ()=>{
    if(turn === "X"){
        turn = "O";
        return turn;
    }
    else{
        turn = "X";
        return turn;
    }
}

// Function to check winner
const checkWinner = ()=>{
    let gameText = document.getElementsByClassName("gameText");
    let wins = [
        [0, 1, 2, -1, 6, 0],
        [3, 4, 5, -1, 18, 0],
        [6, 7, 8, -1, 30, 0],
        [0, 3, 6, -13, 18, 90],
        [1, 4, 7, -1,18, 90],
        [2, 5, 8, 11, 18, 90],
        [0, 4, 8, -1, 18, 45],
        [2, 4, 6, -1, 18, 135],
    ]
    wins.forEach(e =>{
        if((gameText[e[0]].innerText === gameText[e[1]].innerText) && (gameText[e[1]].innerText === gameText[e[2]].innerText) && (gameText[e[0]].innerText !== "" )){
            document.querySelector(".info").innerText = "Player " + gameText[e[0]].innerText + " Won";
            isGameOver = true;
            // gameOver.play();
            document.querySelector(".image").getElementsByTagName("img")[0].style.width = "10rem";
            document.querySelector(".line").style.width = "94.44%";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let gameText = element.querySelector(".gameText");

    element.addEventListener('click', ()=>{
        if(gameText.innerText === ''){
            gameText.innerText = turn;
            turn == "X" ? element.querySelector(".gameText").style.color = "#da3c3c" : element.querySelector(".gameText").style.color = "#0000ff"; 
            // if(turn == "X"){
            //     element.querySelector(".gameText").style.color = "#da3c3c";
            // }
            // else{
            //     element.querySelector(".gameText").style.color = "#0000ff";
            // }
            changeTurn();
            checkWinner();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Player "+ turn + "'s turn";
            }
        }        
    })
})

// Reset button logic
let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let gameText = document.querySelectorAll(".gameText");
    Array.from(gameText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Player "+ turn + "'s turn";
    document.querySelector(".image").getElementsByTagName("img")[0].style.width = "0rem";
    document.querySelector(".line").style.width = "0vw";
})