/* DOM */

CELL = document.getElementsByClassName('cell');

var board = Array(9).fill(" ")
console.log(board)

const gameBoard = (()=> { 
    const playerMove = (squareNum,marker) => board.splice(squareNum, 1, marker)
    return {
        playerMove
    };
})();


var test = function(){
    var value = this.getAttribute("value");
    gameBoard.playerMove(value,"O")
    console.log(board)
    return board
}
for (var i = 0; i < CELL.length; i++) {
    CELL[i].addEventListener('click', test, false);
}

/* Testing
gameBoard.playerMove(3,"x")

*/