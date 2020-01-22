//searches for static 3X3 magic squares
function magicSqr(grid){
    let count = 0;
    if (grid.length < 3 || grid[0].length <3){return count}
    
    for(let i = 0; i < grid.length - 2; i++){
      for(let j = 0; j < grid[i].length -2; j++){
        
        let sqr = getSquare(grid,i,j)
        
        if(isMagic(sqr) === true){
          count++
        }
      }
    }
    return count
  }
  
  function getSquare(grid, i, j){
    return [
          grid[i][j],
          grid[i][j+1],
          grid[i][j+2],
          grid[i+1][j],
          grid[i+1][j+1],
          grid[i+1][j+2],
          grid[i+2][j],
          grid[i+2][j+1],
          grid[i+2][j+2],
        ]
  }
  
  function isMagic(square){
    
    if(Array.from(new Set(square)).length !== 9 ||
      square.some(x => x < 1 || x > 9)) {return false}
    if(square[0]+square[1]+square[2] === 15 &&
      square[3]+square[4]+square[5] === 15 &&
      square[6]+square[7]+square[8] === 15 &&
      square[0]+square[3]+square[6] === 15 &&
      square[1]+square[4]+square[7] === 15 &&
      square[2]+square[5]+square[8] === 15 &&
      square[0]+square[4]+square[8] === 15 &&
      square[2]+square[4]+square[6] ===15 
    ){
      return true
    } else {
      return false
    }
  }