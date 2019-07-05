function createPhoneNumber(numbers){
    var phoneNumber = "";
    for(var i = 0; i < numbers.length; i++){
      switch (i){
        case 0:
          phoneNumber += "(" + numbers[i];
          break;
        case 2:
          phoneNumber += numbers[i] + ") ";
          break;
        case 5: 
          phoneNumber += numbers[i] + "-";
          break;
        case 1:
        case 3:
        case 4:
        case 6:
        case 7:
        case 8:
        case 9:
          phoneNumber += numbers[i];
          break;
      }
      
    }
    return phoneNumber;
  }