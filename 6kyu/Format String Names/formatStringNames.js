function list(names){
    var sentence = "";
    if(names.length == 1){
      return names[0].name;
    } else if (names.length == 2){
      return names[0].name + " & " + names[1].name;
    }
    for(var i = 0; i < names.length; i++){
      if(i!=names.length-1 && i!=names.length-2){
        sentence += names[i].name + ", ";
      } else if(i==names.length-2){
        sentence += names[i].name + " & ";
      } else {
       sentence += names[i].name;
      }
    }
    return sentence;
  }