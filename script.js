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
            playerStatus = playerO;
        }else playerStatus = playerX;
    })
}
console.log(playerStatus);
