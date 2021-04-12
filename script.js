/* DOM */
let player = "X"
CELL = document.getElementsByClassName('cell');


/* Creating Array to hold current state of game*/
var board = Array(9).fill(" ")
console.log(board)
var gameState = "playing"
/* Factory to add user input */
const gameBoard = (()=> { 
    const playerMove = (squareNum,marker) => board.splice(squareNum, 1, marker)
    const reset = () => board = Array(9).fill(" ")
    return {
        playerMove,
        reset
    };
    
})();
function gameStatus() {
    if(gameState === "playing"){
        gameState = "end"
        for (var i = 0; i < CELL.length; i++) {
            CELL[i].removeEventListener('click', test, false);
        }
    }
    else if (gameState === "end"){
        gameState = "playing"
        for (var i = 0; i < CELL.length; i++) {
            CELL[i].addEventListener('click', test, false);
        }
    }
}
/*Factory to push user input into HTML */
const playerCurrent = (()=> {
    const displayChange = (squareNum, marker) => document.getElementById("cell-" + squareNum).innerHTML = marker;
    ;
    return {
        displayChange,
    }
})();
var resetBoard = function resetBoard() {
    for(i = 0; i <9; i++){
        document.getElementById("cell-" + i).innerHTML = " ";
    }
    gameBoard.reset()
    gameStatus()
}
function check(squareNum, marker) {
    console.log(squareNum)
    if (squareNum == 0){
        if (board[1] == marker && board[2] == marker){
            console.log("You Win!")
            gameStatus()

        } else if (board[3] == marker && board[6] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[4] == marker && board[8] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 1){
        if (board[0] == marker && board[2] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[4] == marker && board[7] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 2){
        if (board[1] == marker && board[0] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[4] == marker && board[6] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[5] == marker && board[8] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 3){
        if (board[4] == marker && board[5] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[0] == marker && board[6] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 4){
        if (board[1] == marker && board[7] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[3] == marker && board[5] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[0] == marker && board[8] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[2] == marker && board[6] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 5){
        if (board[2] == marker && board[8] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[4] == marker && board[3] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 6){
        if (board[3] == marker && board[0] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[2] == marker && board[4] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[7] == marker && board[8] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 7){
        if (board[1] == marker && board[4] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[6] == marker && board[8] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
    else if (squareNum == 8){
        if (board[3] == marker && board[0] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[2] == marker && board[5] == marker){
            console.log("You Win!")
            gameStatus()
        } else if (board[6] == marker && board[7] == marker){
            console.log("You Win!")
            gameStatus()
        }
    }
}



/* Changing player after every click and linking with other functions */
var test = function(){
    var value = this.getAttribute("value");
    if (player === "X"){
        /*Locking user input in place */
        if (board[value] === " "){
        gameBoard.playerMove(value,"X")
        playerCurrent.displayChange(value, "X"); 
        player = "O"
        check(value, "X")
        console.log()
        console.log(gameState)
        } else {
            return
        }
    } else  {
        /*Locking user input in place */
        if (board[value] === " "){
        gameBoard.playerMove(value,"O")
        playerCurrent.displayChange(value, "O");
        check(value, "O")
        player = "X"
        console.log()
        console.log(gameState)
        } else{
            return
        }
    }
    
    console.log(board)
    return board
}
var end = function end() {
    console.log(gameState)
}
/* addEventListener to get clicks */
if (gameState == "playing"){
    for (var i = 0; i < CELL.length; i++) {
        CELL[i].addEventListener('click', test, false);
    }
}else if (gameState === "end"){
    for (var i = 0; i < CELL.length; i++) {
        CELL[i].removeEventListener('click', end, false);
    }
}

/* Testing
gameBoard.playerMove(3,"x")

*/