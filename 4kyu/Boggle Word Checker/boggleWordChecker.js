function checkWord( board, word ) {
  let currentPositions = [];
  let wordIndex = 0;
  for(let row = 0; row < board.length; row++){
    for(let col = 0; col < board[row].length; col++){
      if(board[row][col] === word[wordIndex]){
        currentPositions.push([`${row}-${col}`]);
      }
    }
  }
  let flagReturnTrue = false;
  while(wordIndex != word.length){
    wordIndex++;
    if(flagReturnTrue){
      break;
    }
    currentPositions.forEach((positionList,index)=>{
      if(positionList.length == word.length){
        flagReturnTrue = true;
      }
      
      if(positionList.length >= wordIndex){
        let row = Number(positionList[positionList.length -1].slice(0,positionList[positionList.length -1].indexOf('-')));
        let col = Number(positionList[positionList.length -1].slice(positionList[positionList.length -1].indexOf('-')+1));
        
        // Check Top
        if(row > 0 && board[row - 1][col] === word[wordIndex] && !positionList.includes(`${row - 1}-${col}`) && positionList.length == wordIndex){
          positionList.push(`${row - 1}-${col}`);
        } else if(row > 0 && board[row - 1][col] === word[wordIndex] && !positionList.includes(`${row - 1}-${col}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row - 1}-${col}`);
        }
        // Check Top-Right
        if(row > 0 && col < board.length - 1 && board[row -1][col + 1] === word[wordIndex] && !positionList.includes(`${row - 1}-${col + 1}`) && positionList.length == wordIndex){
          positionList.push(`${row - 1}-${col + 1}`);
        } else if(row > 0 && col < board.length - 1 && board[row -1][col + 1] === word[wordIndex] && !positionList.includes(`${row - 1}-${col + 1}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row - 1}-${col + 1}`);
        }
        // Check Right
        if(col < board.length - 1 && board[row][col + 1] === word[wordIndex] && !positionList.includes(`${row}-${col + 1}`) && positionList.length == wordIndex){
          positionList.push(`${row}-${col + 1}`);
        } else if(col < board.length - 1 && board[row][col + 1] === word[wordIndex] && !positionList.includes(`${row}-${col + 1}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row}-${col + 1}`);
        }
        // Check Bottom-Right
        if(row < board.length - 1 && col < board.length - 1 && board[row + 1][col + 1] === word[wordIndex] && !positionList.includes(`${row + 1}-${col + 1}`) && positionList.length == wordIndex){
          positionList.push(`${row + 1}-${col + 1}`);
        } else if(row < board.length - 1 && col < board.length - 1 && board[row + 1][col + 1] === word[wordIndex] && !positionList.includes(`${row + 1}-${col + 1}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row + 1}-${col + 1}`);
        }
        // Check Bottom
        if(row < board.length - 1 && board[row + 1][col] === word[wordIndex] && !positionList.includes(`${row + 1}-${col}`) && positionList.length == wordIndex){
          positionList.push(`${row + 1}-${col}`);
        } else if(row < board.length - 1 && board[row + 1][col] === word[wordIndex] && !positionList.includes(`${row + 1}-${col}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row + 1}-${col}`);
        }
        // Check Bottom-Left
        if(row < board.length - 1 && col > 0 && board[row + 1][col - 1] === word[wordIndex] && !positionList.includes(`${row + 1}-${col - 1}`) && positionList.length == wordIndex){
          positionList.push(`${row + 1}-${col - 1}`);
        } else if(row < board.length - 1 && col > 0 && board[row + 1][col - 1] === word[wordIndex] && !positionList.includes(`${row + 1}-${col - 1}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row + 1}-${col - 1}`);
        }
        // Check Left
        if(col > 0 && board[row][col - 1] === word[wordIndex] && !positionList.includes(`${row}-${col - 1}`) && positionList.length == wordIndex){
          positionList.push(`${row}-${col - 1}`);
        } else if(row < board.length - 1 && board[row][col - 1] === word[wordIndex] && !positionList.includes(`${row}-${col - 1}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row}-${col - 1}`);
        }
        // Check Top-Left
        if(row > 0 && col > 0 && board[row - 1][col - 1] === word[wordIndex] && !positionList.includes(`${row - 1}-${col - 1}`) && positionList.length == wordIndex){
          positionList.push(`${row - 1}-${col - 1}`);
        } else if(row > 0 && col > 0 && board[row - 1][col - 1] === word[wordIndex] && !positionList.includes(`${row - 1}-${col - 1}`)) {
          currentPositions.push(positionList.slice(0,positionList.length - 1));
          currentPositions[currentPositions.length - 1].push(`${row - 1}-${col - 1}`);
        }
      }
    })
  }
  if(flagReturnTrue){
    return true;
  }
  return false;
}