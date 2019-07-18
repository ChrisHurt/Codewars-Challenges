snail = function(array) {
  var xTravel;
  var yTravel = array.length;
  console.log(array);
  
  var snail = []
  if(array[0] != undefined){
    xTravel = array[0].length;
  } else {
    return snail
  }
  var isTop = true;
  var isLeft = true;
  var isTravelHorizontal = true;
  var motions = 0;
  
  // Assign the very first position
  if(yTravel == 1){
    snail = array[0];
  } else if (yTravel > 1) {
    snail[0] = array[0][0];
  }
  
  var xPos = 0;
  var yPos = 0;
  var xFor = xPos
  var yFor = yPos;
  var isFirstPos = true;
  if(yTravel >= 2){
    while(xTravel > 0 && yTravel > 0){
      
      // Travel along positions barring the very first position
      if(isTravelHorizontal && xTravel > 0){
        if(motions >= 3){
          xTravel--;
        }
        for(var i = xPos; (isLeft) ? ( i < xFor + xTravel) : ( i > xFor - xTravel) ; (isLeft) ? (i++):(i--)){
          
          if(isFirstPos){
            isFirstPos = false;
          } else {
            snail.push(array[yPos][xPos]);
          }
           
          if(isLeft && xPos < xFor + xTravel - 1){
            xPos++;
          } else if (!isLeft && xPos > xFor - xTravel + 1) {
            xPos--;
          }
        }
        isLeft = !isLeft;
        xFor = xPos;
        yFor = yPos;
      } else if (yTravel > 0){
        if(motions >= 3){
          yTravel--;
        }
        
        for(var i = yPos; (isTop) ? ( i < yFor + yTravel) : ( i > yFor - yTravel) ; (isTop) ? (i++):(i--)){
          
          if(isFirstPos){
            isFirstPos = false;
          } else {
            snail.push(array[yPos][xPos]);
          }
          if(isTop && yPos < yFor + yTravel - 1){
            yPos++;
          } else if (!isTop && yPos > yFor - yTravel + 1){
            yPos--;
          }
        }  
        isTop = !isTop;
        xFor = xPos
        yFor = yPos
      }
      
      motions++;
      isFirstPos = true;
      
      // Swap Travel directions, TODO: confirm order is correct
      if(isTravelHorizontal){
        isTravelHorizontal = false;
      } else {
        isTravelHorizontal = true;
      }
      
    }
  }

  return snail;
}