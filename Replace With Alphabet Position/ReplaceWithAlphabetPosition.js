function alphabetPosition(text) {
    text = text.toLowerCase();
    var retStr = "";
    
    for (var i = 0; i < text.length; i++){
      if(text[i].match(/[a-z]/)){
        if(text[i] == 'a'){
          retStr += "1 "
        } else {
          retStr += (text[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1) + " ";
        }
      }
    }
  
    return (retStr.slice(0,retStr.length-1));
  }