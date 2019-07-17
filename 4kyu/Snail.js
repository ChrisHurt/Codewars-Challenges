snail = function(array) {
  var xTravel;
  var yTravel = array.length;
  
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
  if(yTravel >= 2){
    while(xTravel > 0 && yTravel > 0){
      console.log("xTravel: " + xTravel);
      console.log("yTravel: " + yTravel);
      
      // Travel along positions barring the very first position
      if(isTravelHorizontal && xTravel > 0){
        for(var i = xPos; (isLeft) ? ( i < xTravel) : ( i > xPos - xTravel) ; (isLeft) ? (i++):(i--)){
          console.log("x: " + xPos + ",y: " + yPos + ",xTra: " + xTravel + ",yTra: " + yTravel + ",isT: " + isTop + ",isL: " + isLeft + ",i:" + i);
          if(isLeft && xPos!=array[0].length-1){
            xPos++;
          } else if (!isLeft && xPos!=0) {
            xPos--;
          }
        }
        isLeft = !isLeft;
      } else if (yTravel > 0){
        for(var i = yPos; (isTop) ? ( i < yTravel) : ( i > yPos - yTravel) ; (isTop) ? (i++):(i--)){
          console.log("x: " + xPos + ",y: " + yPos + ",xTra: " + xTravel + ",yTra: " + yTravel + ",isT: " + isTop + ",isL: " + isLeft + ",i:" + i);
          if(isTop && yPos!=array.length-1){
            yPos++;
          } else if (isTop && yPos!=0){
            yPos--;
          }
        }  
        isTop = !isTop;
      }
      
      // Swap Travel directions
      if(isTravelHorizontal){
        isTravelHorizontal = false;
      } else {
        isTravelHorizontal = true;
      }
      motions++;
      
      // Reduce travel length
      if(isTravelHorizontal && motions >= 3){
        xTravel--;
      } else if(motions > 3){
        yTravel--;
      }
    }
  }

  return snail;
}