function sumStrings(a,b) {
  let outputNumString = "";
  let carriedValue = 0;
  let currentDigit;
  a = a.split('');
  b = b.split('');
  
  while(a.length > 0 || b.length > 0){
    if(a.length > 0 && b.length > 0){
      let aNum = Number(a.pop());
      let bNum = Number(b.pop());
      currentDigit = (aNum + bNum + carriedValue) % 10;
      carriedValue = (aNum + bNum + carriedValue >= 10) ? 1 : 0;
    } else if (a.length > 0){
      let aNum = Number(a.pop());
      currentDigit = (aNum + carriedValue) % 10;
      carriedValue = (aNum + carriedValue >= 10) ? 1 : 0;
    } else if (b.length > 0){
      let bNum = Number(b.pop());
      currentDigit = (bNum + carriedValue) % 10;
      carriedValue = (bNum + carriedValue >= 10) ? 1 : 0;
    }
    outputNumString = currentDigit + outputNumString;
  }
  if(carriedValue === 1){
    outputNumString = '1' + outputNumString;
  } else {
    while(outputNumString[0] === '0'){
      outputNumString = outputNumString.slice(1);
    }
  }
  return outputNumString;
}