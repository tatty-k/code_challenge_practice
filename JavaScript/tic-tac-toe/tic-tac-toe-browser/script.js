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
    boardValues: [],
    square: []
  }

function init(){
    state.turn = "X"
    state.boardValues = []
    getValidBoardLength()
    showBoard();
    createBoardState()
    addEventListeners()
    // playRound()
    }

function addEventListeners(){
    document.querySelectorAll('#board div').forEach(function (el) {
        el.addEventListener('click', placeToken)
        });
}
addEventListeners()

function playRound(){
    console.log("yo")
    //why do I need to declare this instead of accessing from state?
    const board = state.boardValues
    for (let i = 0; i < board.length - 2; i++) {
        for (let j = 0; j < board.length - 2; j++){
            let square = getSquare(state.boardValues, i,j)
            if(isWin(square)===false){
                console.log(square)
                // playRound
            } else {
 
                {alert('we have a winner!')}
            }

        }
    }
}

  function placeToken(evt){
    const marker = evt.target;  
    const colIdx = marker.id[1]
    const rowIdx = marker.id[3]

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
// added below
    const board = state.boardValues
    for (let i = 0; i < board.length - 2; i++) {
        for (let j = 0; j < board.length - 2; j++){
            getSquare(state.boardValues, i,j)
            console.log(state.square)
            if(isWin(state.square)===false){
                
                playRound
            } else {
 
                {alert('we have a winner!')}
            }

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

function getSquare(board, i,j){
    state.square = [];
    for (let changeI = 0; changeI < 3; changeI++) {
        let row = [];
        state.square.push(row);
        for (let changeJ = 0; changeJ < 3; changeJ++) {
          row.push(state.boardValues[i + changeI][j + changeJ]);
        }
      }  
}


function isWin(board){
    let sumDiag1 = 0;
    let sumDiag2 = 0;
    for (let i = 0; i < 3; i++) {
      let sumRow = 0;
      let sumCol = 0;
      sumDiag1 += state.square[i][i];
      sumDiag2 += state.square[i][state.square.length - (i + 1)];
      for (let j = 0; j < 3; j++) {
          console.log(i,j)
        //   console.log(state.square[i][j])
        sumRow += state.square[i][j];
        sumCol += state.square[j][i];
      }
    // console.log(sumRow,'r',sumCol,'c')
      if (sumRow === 3 || sumCol === 3){state.winner = "X"} 
      else if (sumRow === 30 || sumCol === 30){state.winner = "O"} 
    }
    console.log(sumDiag1,'d1',sumDiag2,'d2')
    if (sumDiag1 === 3 || sumDiag2=== 3){state.winner = "X"} 
    else if (sumDiag1 === 30 || sumDiag2 === 30){state.winner = "O"} 
    else {return false}

}

// function setAttributes(el, attrs) {
//     for(var key in attrs) {
//       el.setAttribute(key, attrs[key]);
//     }
//   }

init()

