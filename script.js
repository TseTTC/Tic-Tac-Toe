/* DOM */
let player = "X"
CELL = document.getElementsByClassName('cell');

/* Creating Array to hold current state of game*/
var board = Array(9).fill(" ")
console.log(board)

/* Factory to add user input */
const gameBoard = (()=> { 
    const playerMove = (squareNum,marker) => board.splice(squareNum, 1, marker)
    return {
        playerMove
    };
 
})();
/*Factory to push user input into HTML */
const playerCurrentX = (()=> {
    const displayChange = (squareNum, marker) => document.getElementById("cell-" + squareNum).innerHTML = marker
    return {
        displayChange
    }
})();
const playerCurrentO = (()=> {
    const displayChange = (squareNum, marker) => document.getElementById("cell-" + squareNum).innerHTML = marker
    return {
        displayChange
    }
})();

/* Changing player after every click and linking with other functions */
var test = function(){
    var value = this.getAttribute("value");
    if (player === "X"){
        gameBoard.playerMove(value,"X")
        playerCurrentX.displayChange(value, "X");
        player = "O"
        console.log()   
    } else {
        gameBoard.playerMove(value,"O")
        playerCurrentO.displayChange(value, "O");
        player = "X"
        console.log()
    }
    
    console.log(board)
    return board
}
/* addEvenListener to get clicks */
for (var i = 0; i < CELL.length; i++) {
    CELL[i].addEventListener('click', test, false);
}

/* Testing
gameBoard.playerMove(3,"x")

*/