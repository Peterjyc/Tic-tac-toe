/* eslint-disable */

let playerX = 'X';
let playerO = 'O';

const gameBoard = {
    status : Array(9).fill(null),
    player : playerX,
    winStatus : null,

}

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

function winStatus(a, b, c){
}
