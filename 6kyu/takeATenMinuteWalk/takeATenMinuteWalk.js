function isValidWalk(walk) {
    var northSouthPos = 0;
    var eastWestPos = 0;
    walk.forEach((dir)=>{
      switch(dir){
        case 'n':
          northSouthPos++;
          break;
        case 's':
          northSouthPos--;
          break;
        case 'w':
          eastWestPos--;
          break;
        case 'e':
          eastWestPos++;
          break;
      }
    });
      if(walk.length != 10 || northSouthPos != 0 || eastWestPos != 0){
        return false;
      }
      return true;
  }