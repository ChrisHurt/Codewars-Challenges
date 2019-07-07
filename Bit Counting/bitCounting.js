var countBits = function(n) {
    var binaryString = n.toString(2);
    var bits = 0;
    for(var i = 0; i < binaryString.length; i++){
      if(Number(binaryString[i]) === 1){
        bits++;
      }
    }
    return bits;
  };