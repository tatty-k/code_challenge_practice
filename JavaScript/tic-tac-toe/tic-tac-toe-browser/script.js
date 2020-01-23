//playRound
    //add event listeners to squares on board -- maybe seperate this into different function
    //loops through board and checks square (getSquare) for winner (isWin)
        //if not winner - restart playRound
        //else - show user winner and score

//getSquare
    //use idx from playRound as well as nested loops with range i+0-i+2, and j+0-j+2
    //send square to state 

// --- maybe re-think logic: hard to debug if/else
//isWin
    //loop through ttt square, check for win conditions
        //if win conditions met, update state with winner
        //else return false

let state = {
    spots : document.querySelectorAll('div'),
    message : document.querySelector('h1'),
    turn:"X",
    scoreX:0,
    scoreO:0,
    ties:0,
    winner:'',
    boardLength: 0,
    boardValues: []
  }

function init(){
    state.turn = "X"
    state.boardValues = []
    getValidBoardLength()
    showBoard();
    createBoardState()
    playRound()
    }

function playRound(){

document.querySelectorAll('#board div').forEach(function (el) {
    el.addEventListener('click', placeToken)
    });
    isWin()
    if(isWin(state.boardValues)===false){
        playRound
    } else {
        alert(`congrats ${state.winner}`)
    }
}

  function placeToken(evt){
    const marker = evt.target;  
    colIdx = marker.id[1]
    rowIdx = marker.id[3]

    // make sure there isn't a marker there already
    if(!state.boardValues[rowIdx][colIdx]) {
        if(state.turn === "X"){
            state.boardValues[rowIdx][colIdx]=1
            document.querySelector(`#c${colIdx}r${rowIdx}`).textContent = "X"
            state.turn = "O"
        } else {
            state.boardValues[rowIdx][colIdx]=10
            document.querySelector(`#c${colIdx}r${rowIdx}`).textContent = "O"
            state.turn = "X"
        }
    } 
 }

function getValidBoardLength(){
    state.boardLength = prompt("Enter board length between 3 and 10")

    if(isNaN(state.boardLength)){
        alert("You must enter a numerical character")
        getValidBoardLength()}
    else if(state.boardLength  < 3){
        alert("board length must be at least 3 characters")
        getValidBoardLength()
    } else if (state.boardLength  > 10){
        alert("board length must be 10 characters or less")
        getValidBoardLength()
    }
}

function createBoardState(){
    let length = parseInt(state.boardLength)
    let newBoard = [...Array(length)]
    newBoard.forEach( (x, i) => newBoard[i] = [...Array(length).fill(0)] )
    state.boardValues = newBoard
}

//TODO figure out how to dynamically set multiple attributes
function showBoard(){
    let board = document.querySelector('#board')
    let boardSpots = state.boardLength * state.boardLength
    let row = -1
    for(let i = 0; i < boardSpots; i++){
        if(i % state.boardLength === 0) {row++}
        let newDiv = document.createElement('div')
        newDiv.id = `c${i%state.boardLength}r${row}`
        board.appendChild(newDiv)
        // setAttributes(board, { "grid-template-columns": `repeat(${state.boardLength}, 10vmin)`,
        //                         "grid-template-rows": `repeat(${state.boardLength}, 10vmin)` })
        board.setAttribute("style",`grid-template-columns: repeat(${state.boardLength}, 10vmin)`)
    }
}

function isWin(board){
    console.log("hit")
    let sumDiag1 = 3;
    let sumDiag2 = 0;
    for (let i = 0; i < state.boardLength; i++) {
      let sumRow = 0;
      let sumCol = 0;
      sumDiag1 += state.boardValues[i][i];
      sumDiag2 += state.boardValues[i][state.boardLength - (i + 1)];
      for (let j = 0; j < state.boardValues; j++) {
        sumRow += state.boardValues[i][j];
        sumCol += state.boardValues[j][i];
      }

      //need to figure out how to end function after changing state
      if (sumRow === 3 || sumCol === 3){state.winner = "X"} 
      else if (sumRow === 30 || sumCol === 30){state.winner = "O"} 
    //   console.log(state.boardValues)
    // console.log(sumDiag1,'d1',sumDiag2,'d2',sumRow,'r',sumCol,'c')
      else {return false}
    }
    if (sumDiag1 === 3 || sumDiag2=== 3){state.winner = "X"} 
    else if (sumDiag1 === 30 || sumDiag2 === 30){state.winner = "O"} 
    else {return false}
    
    console.log(state.boardValues)
    console.log(sumDiag1,'d1',sumDiag2,'d2',sumRow,'r',sumCol,'c')

}

// function setAttributes(el, attrs) {
//     for(var key in attrs) {
//       el.setAttribute(key, attrs[key]);
//     }
//   }

init()

