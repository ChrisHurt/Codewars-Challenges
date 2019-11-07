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
  let decodedString = "";
  let currentTrack = 0;
  let primaryInterval,secondaryInterval;
  let 
  
  string = string.split('')
  while(string.length > 0){
  
  }
  
  return decodedString;
}