function rot13(message){
  let shiftExtent = 13
  return message.split("").map(character=>{
    let asciiValue = character.charCodeAt(0);
    if( (asciiValue >= 97 && asciiValue <= 122 && asciiValue + shiftExtent > 122) ||
        (asciiValue >= 65 && asciiValue <= 90 && asciiValue + shiftExtent > 90) ){
      return String.fromCharCode(character.charCodeAt(0) + shiftExtent - 26)
    } else if((asciiValue >= 97 && asciiValue <= 122) || (asciiValue >= 65 && asciiValue <= 90)){
      return String.fromCharCode(character.charCodeAt(0) + shiftExtent)
    } else {
      return character
    }
  }).join("")
}