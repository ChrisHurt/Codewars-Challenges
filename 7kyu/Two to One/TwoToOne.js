function longest(s1, s2) {
    var alphaString = "";
    for(var k = 0; k < 26; k++){
      var reg = new RegExp(String.fromCharCode(97+k));
      if(s1.match(reg)){
        alphaString += s1.match(reg);
      } else if(s2.match(reg)){
        alphaString += s2.match(reg);
      }
    }
    return alphaString;
  }