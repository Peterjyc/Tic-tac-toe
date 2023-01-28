/* eslint-disable */
let gameBoard = Array(9).fill(null);

let playerX = 'X';
let playerO = 'O';

let playerStatus = playerX;



for (let i = 1; i < 10; i++){
    let cell = document.getElementById(i.toString());
    cell.addEventListener("click", function(){


        cell.innerHTML = playerStatus;
        if(playerStatus == playerX){
            gameBoard[i] = playerX;
            playerStatus = playerO;
        }else {
            gameBoard[i] = playerO;
            playerStatus = playerX;
        }
        console.log(playerStatus);
        console.log(gameBoard);
    })
}
console.log(playerStatus);
console.log(gameBoard);
