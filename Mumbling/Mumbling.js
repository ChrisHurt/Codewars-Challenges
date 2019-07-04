function accum(s) {
	var retStr = "";
  for(var i = 0; i < s.length; i++){
    retStr += s[i].toUpperCase();
    for(var j = 0; j < i; j++){
      retStr += s[i].toLowerCase();
    }
    if(i != s.length - 1){
      retStr += '-';
    } 
  }
  return retStr;
}