function iqTest(numbers){
    var evenNum = 0;
    var oddNum = 0;
    var oddIndex,evenIndex;
    var numArr = numbers.split(' ');
    for(var i = 0; i < numArr.length; i++){
      if(numArr[i] % 2){
        oddNum++;
        oddIndex = i;
      } else {
        evenNum++;
        evenIndex = i;
      }
    }
    if(oddNum > evenNum){
      return (evenIndex+1);
    } else {
      return (oddIndex+1);
    }
  }