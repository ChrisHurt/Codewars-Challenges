function encodeRailFenceCipher(string, numberRails) {
  let rails = [];
  let currentTrack = 0;
  let direction = 1;
  string = string.split('');
  for(let i = 0; i < numberRails; i++){
    rails.push([]); 
  }
  while(string.length > 0){
    rails[currentTrack].push(string.shift());
    
    if(currentTrack === numberRails - 1){
      direction = -1;
    } else if(currentTrack === 0){
      direction = 1;
    }
    currentTrack += direction;
  }
  
  return rails.reduce((encodedString,rail)=>{
    encodedString += rail.join('');
    return encodedString;
  },"");
}

function decodeRailFenceCipher(string, numberRails) {
  let decodedStringArray = new Array(string.length);
  let currentTrack = 0;
  let currentIndex = 0;
  let destinationIndex = 0;
  let fullLength = string.length;
  let primaryInterval,secondaryInterval;
  let primaryNext = true;
  string = string.split('')

  while(string.length > 0 && currentTrack < fullLength){
    decodedStringArray[destinationIndex] = string.shift();
    
    if(string.length > 0 && currentTrack === 0 || currentTrack === numberRails - 1){
      primaryInterval = 2*numberRails - 2;
      destinationIndex += primaryInterval;
    } else if(string.length > 0){
      primaryInterval = 2*numberRails - 2*(1 + currentTrack);
      secondaryInterval = 2*currentTrack;
      if(primaryNext){
        destinationIndex += primaryInterval;
      } else {
        destinationIndex += secondaryInterval;
      }
      primaryNext = !primaryNext;
    }
    if(destinationIndex > fullLength - 1){
      currentTrack++;
      destinationIndex = currentTrack;
      primaryNext = true;
    }
    currentIndex++;
  }
  
  return decodedStringArray.join('');
}