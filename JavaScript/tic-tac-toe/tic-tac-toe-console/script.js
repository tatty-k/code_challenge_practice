//TODO: 
// fix bugs in validating user input
// -- prevent users from placing token on spot that is already taken
// -- add if statement for repeated correct chars.
// -- what to do if user cancels out of prompt window 
//simplify code
// -- try re-writing with a place token method in class
// -- re-think board design -- better system of storing updating state?
// -- simplify win logic

let state = {
    turn:"X",
    scoreX:0,
    scoreO:0,
    ties:0,
    winner:'',
    boardShown: ['','','','','','','','',''],
    boardValues: [0,0,0,0,0,0,0,0,0]
  }
  
  
  function showBoard(){
    let scoreBoard = `
  X's score: ${state.scoreX}, O's score: ${state.scoreO}, Tied games: ${state.ties}
  
  ${state.turn}'s turn
  ---------------------------
  `
    
    let board = `
     A   B   C
  1   ${state.boardShown[0]} |  ${state.boardShown[1]} | ${state.boardShown[2]}
    -----------
  2   ${state.boardShown[3]} |  ${state.boardShown[4]} | ${state.boardShown[5]}
    -----------
  3   ${state.boardShown[6]} |  ${state.boardShown[7]} | ${state.boardShown[8]}
  `
    console.log(scoreBoard)
    console.log(board)
  }

  function init(){
    state.turn = "X",
    state.boardShown = ['','','','','','','','','']
    state.boardValues = [0,0,0,0,0,0,0,0,0]
    showBoard();
    playRound()
  }

  function playRound(){
    placeToken();
    showBoard();
    if(isWin()===true){
      alert(`congrats ${state.winner}`)
      init();
    } else {
      playRound();
    }
  }

  function placeToken(){
    let move = getValidMove()
 
    if(state.turn === "X"){
      state.boardShown[move]= "X"
      state.boardValues[move] = 1
      state.turn = "O"
    }
    else {
      state.boardShown[move] = "O"
      state.boardValues[move] = 10
      state.turn = "X"
    }
  }
  
  
  function getValidMove(){
    let move = prompt('Use grid to enter move. For example, "a1" will place a token at the top left corner of board')  
    
    while(!isValid(move)){
      move = prompt('Your entry was invalid, please use a-c to choose a row and 1-3 to choose a column') 
    }

    if(move === "a1"){move = 0}
    if(move === "b1"){move = 1}
    if(move === "c1"){move = 2}
    if(move === "a2"){move = 3}
    if(move === "b2"){move = 4}
    if(move === "c2"){move = 5}
    if(move === "a3"){move = 6}
    if(move === "b3"){move = 7}
    if(move === "c3"){move = 8}
    
    return move
  }

  function isValid(move){

    move = Array.from(move.replace(/[" "]/g, '').toLowerCase())
    
    let chars = ["a","b","c","1","2","3"]
   
    if( move.length !== 2 || !charsValid(chars, move) ){return false}
        
    else {return true}
  
    }
    
    function charsValid(array1, array2){
      for(let i = 0; i < array2.length; i++){
        if(!array1.includes(array2[i])){
          return false
        }
      }
      return true
    }

function isWin(array){
  let board = state.boardValues
  
  let col1Total = 0
  let col2Total = 0
  let col3Total = 0

  let row = 0
  for(let i = 0; i < board.length; i+= 3){
    col1Total += board[i]
    col2Total += board[i+1]
    col3Total += board[i+2]

    row = board.slice(i, i+3)
    let sumOfRow = sum(row)
    
    if(sumOfRow === 3){state.scoreX++;
                      state.winner = "X";
                      return true}
    
    if(sumOfRow === 30){state.scoreO++
                      state.winner = "O";
                      return true}
  }
  
  if(col1Total === 3 || 
     col2Total === 3 || 
     col3Total === 3 ||
     board[0]+board[4]+board[8] == 3){state.scoreX++
                                      state.winner = "X"
                                      return true}
  
  if(col1Total === 30 || 
     col2Total === 30 || 
     col3Total === 30 ||
     board[2]+board[4]+board[6] == 30){state.scoreO++
                                      state.winner = "O";
                                      return true}
  
  let sumOfArray = sum(board)
  
  if(sumOfArray === 45){state.ties++
                        return true}

  return false

  }

function sum(array){
  let sum = 0
  for(let i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum
}

init()
