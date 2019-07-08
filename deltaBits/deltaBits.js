function convertBits(a, b){
    var aStr = a.toString(2);
    var bStr = b.toString(2);
    var diffBits = 0;
    var zeroString = "";
    
    for(var j = 0; j < Math.abs(aStr.length - bStr.length); j++){
     zeroString += "0";
    }
    
    (aStr.length < bStr.length) ? (aStr = zeroString + aStr) : (bStr = zeroString + bStr );
    
    for(var i = aStr.length - 1; i >=0; i--){
      if(aStr[i] !== bStr[i] && (aStr[i] == 1 ||  bStr[i] == 1)){
        diffBits++;
      }
    }
    
    return diffBits;
}