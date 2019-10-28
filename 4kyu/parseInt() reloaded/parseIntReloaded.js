let parseDigit = (string) => {
  switch(string){
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'five':
      return 5;
    case 'six':
      return 6;
    case 'seven':
      return 7;
    case 'eight':
      return 8;
    case 'nine':
      return 9;  
    case 'ten':
      return 10;
    case 'eleven':
      return 11;
    case 'twelve':
      return 12;
    case 'thirteen':
      return 13;
    case 'fourteen':
      return 14;
    case 'fifteen':
      return 15;
    case 'sixteen':
      return 16;
    case 'seventeen':
      return 17;
    case 'eighteen':
      return 18;
    case 'nineteen':
      return 19;
  }
  
  return 0;
}

let parseTens = (string) => {
  switch(string){
    case 'twenty':
      return 20;
    case 'thirty':
      return 30;
    case 'forty':
      return 40;
    case 'fifty':
      return 50;
    case 'sixty':
      return 60;
    case 'seventy':
      return 70;
    case 'eighty':
      return 80;
    case 'ninety':
      return 90;
  }
  return 0;
}

let parsePairing = (string) => {
  if( string.includes('-') ){
    let tensStrings = string.slice( 0,string.indexOf('-') );
    let digit = string.slice(string.indexOf('-')+1);
    return parseTens(tensStrings) + parseDigit(digit);
  } else {
    let digit = parseDigit(string);
    if(digit){
      return digit;
    } else {
      digit = parseTens(string);
      if(digit){
        return digit;
      }
    }
  }
  return 0;
}

let parseUnit = (string) => {
  switch(string){
    case 'hundred':
      return 100;
    case 'thousand':
      return 1000;
    case 'million':
      return 1000000;
  }
  return null;
}

function parseInt(string) {
  console.log(`string: ${string}`);

  let num = 0;
  let delimitedString = string.split(' ');
  
  let multiplicationFactor = 1;
  let lastMultiplierString = "";
  while(delimitedString.length > 0){
    let digitString = delimitedString.pop();
    let digit = parsePairing(digitString); 
    console.log(`digitString: ${digitString}, digit: ${digit}, num: ${digit*multiplicationFactor}`);
    if(digit !== 0){
      num += multiplicationFactor * digit;
//       multiplicationFactor = 1;
    } else if (parseUnit(digitString)!=null){
      if(lastMultiplierString == "hundred"){
        multiplicationFactor = 1;
      }
      multiplicationFactor *= parseUnit(digitString);
      
      
      lastMultiplierString = digitString;
    }
  }
  return num;
}