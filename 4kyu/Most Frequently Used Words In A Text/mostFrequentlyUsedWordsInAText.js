function topThreeWords(text) {
if(text===null || text === undefined)return;
  let wordFrequency = {};
  let wordList  = text.match(/[&\w]+/g);
  console.log(`wordList: ${wordList}`);
  wordList.forEach(word=>{
    if(wordFrequency.hasOwnProperty(word) == true){
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  });
  console.log(wordFrequency);
  
}