//searches for magic squares of any size in any sized grid

let state = {
    grid: [],
    sqrLength: 0,
    square2D: [],
    square1D: [],
    highestNumInSquare: 0,
    squareCount: 0,
    counter: {},
    magicSum: 0
  };
  
  function numMagicSquares(squareLength, grid) {
    squareLength = squareLength - 1;
  
    state.sqrLength = squareLength;
    state.grid = grid;
    state.highestNumInSqr = (state.sqrLength + 1)*(state.sqrLength + 1)
    
    if (grid.length < squareLength || grid[0].length < squareLength) {return 0}
  
    for (let i = 0; i < grid.length - squareLength; i++) {
      for (let j = 0; j < grid[i].length - squareLength; j++) {
        let sqr = square(grid, i, j);
        if (isMagic(square(state.grid, i, j)) === true) {
          console.log("square found")
          state.squareCount++;
        }
      }
    }
    console.log(state.sqrLength, "sl", state.squareCount, "sc", state.square2D)
    return state.squareCount;
  }
  
  function square(grid, i, j) {
    state.square2D = [];
    state.square1D = [];
    
    for (let changeI = 0; changeI <= state.sqrLength; changeI++) {
      let row = [];
      state.square2D.push(row);
      for (let changeJ = 0; changeJ <= state.sqrLength; changeJ++) {
        row.push(grid[i + changeI][j + changeJ]);
        state.square1D.push(grid[i + changeI][j + changeJ]);
      }
    }
    let square2D = state.square2D;
    let square1D = state.square1D;
    return square2D;
  }
  
  function isValid(sqr){
    let square1D = state.square1D
  
    for (let i = 0; i < square1D.length; i++) {
        state.counter[square1D[i]] = state.counter[square1D[i]] || 0;
        state.counter[square1D[i]]++;
    }
  
    let countValues = Object.values(state.counter);
    let countKeys = Object.keys(state.counter);
  
    if (
      countValues.every(x => x !== 1) ||
      countValues.length !== state.highestNumInSqr ||
      countKeys.some(x => x < 1 || x > state.highestNumInSqr)
    ) {
      console.log("validation false")
      return false;
    }
    return true
  }
  
  function isMagic(sqr) {
    if(isValid(sqr)===false){return false}
    
    getMagicSum(state.highestNumInSqr);
  
    let sumDiag1 = 0;
    let sumDiag2 = 0;
    for (let i = 0; i < sqr.length; i++) {
      let sumRow = 0;
      let sumCol = 0;
      sumDiag1 += sqr[i][i];
      sumDiag2 += sqr[i][state.sqrLength + 1 - (i + 1)];
      for (let j = 0; j < sqr.length; j++) {
        sumRow += sqr[i][j];
        sumCol += sqr[j][i];
      }
      if (sumRow === state.magicSum && sumCol === state.magicSum) {continue} 
      else {return false}
    }
  
    if (sumDiag1 !== state.magicSum || sumDiag2 !== state.magicSum) {
      return false;
    }
    return true;
  }
  
  function getMagicSum(highestNumInSqr) {
    let magicSum = 0;
    for (let i = highestNumInSqr; i > 0; i--) {
      magicSum += i;
    }
    magicSum = magicSum / (state.sqrLength+1)
    state.magicSum = magicSum
  }