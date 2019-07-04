function XO(str) {
    var xoIndex = 0;
    for(var i = 0; i < str.length; i++){
      if(str[i].toLowerCase() == 'x'){
        xoIndex++;
      } else if (str[i].toLowerCase() == 'o') {
        xoIndex--;
      }
    }
    return !Math.abs(xoIndex);
}