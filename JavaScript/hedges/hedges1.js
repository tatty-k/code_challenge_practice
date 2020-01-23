function numHedgeNeighbors(garden, i, j){
    let neighborCount = 0
  
    for(let changeI = -1; changeI <= 1; changeI++){
        for(let changeJ = -1; changeJ <= 1; changeJ++){
          if(changeI === 0 && changeJ === 0) {continue}
          
          let neighborI = i + changeI
          let neighborJ = j + changeJ
          
          if( 0 <= neighborI &&
              neighborI < garden.length &&
              0 <= neighborJ &&
              neighborJ < garden[0].length){
              if(garden[neighborI][neighborJ] === 1){
                neighborCount++
               }
            }
          }
        }
    return neighborCount
  }
  
  function oneYearGrowth(garden){
    
    let height = garden.length
    let width = garden[0].length
    
    let newGarden = [...Array(height)]
    newGarden.forEach( (x, i) =>
                      newGarden[i] = [...Array(width).fill(0)] )
    for(let i = 0; i < height; i++){
      for(let j = 0; j < width; j++){
        let hedgeNeighbors = numHedgeNeighbors(garden, i, j)
          if(garden[i][j] === 1 && hedgeNeighbors === 8)
            {newGarden[i][j] = 0}
          else if (garden[i][j] === 0 && hedgeNeighbors > 0)
            {newGarden[i][j] = 1}
          else {newGarden[i][j] = garden[i][j]}
      }
    }
    return newGarden
  }
  
  function numPairs(garden){
    let pairs = 0
    
    for(let i = 0; i < garden.length; i++){
      for(let j = 0; j < garden[0].length; j++){
        console.log(pairs)
        if (garden[i][j] === 1){
          pairs += numHedgeNeighbors(garden, i, j)
          console.log(pairs)
        }
      }
    }
    console.log(pairs)
    return pairs/2
  }
  
  function growth(years, garden){
      if(!garden.length || !garden[0].length){return 0}
      
      for(let i = 0; i < years; i++){
        garden = oneYearGrowth(garden)
      }
    return numPairs(garden)
  }