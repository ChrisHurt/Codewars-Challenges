function topThreeWords(text) {
  if(text===null || text === undefined || text.match(/([\'\w])+/g) === null || (text.match(/([\'\w])+/g) && text.match(/([\'])+/g) && text.match(/([\'\w])+/g).length == text.match(/([\'])+/g).length))return [];
  let wordFrequency = {};
  let wordList  = text.match(/([\'\w])+/g).map(word=>word.toLowerCase());
  wordList.forEach(word=>{
    if(wordFrequency.hasOwnProperty(word) == true){
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  });
  wordList = [];
  wordList = Object.keys(wordFrequency).reduce((newWordList,currentWord)=>{
    let injectionPosition = -1;
    let currentWordFrequency = wordFrequency[currentWord];
    for(let i = 0; i < newWordList.length; i++){
      if(currentWord === newWordList[i]){
        break;
      }
      if(currentWordFrequency > wordFrequency[newWordList[i]]){
        newWordList.splice(i,0,currentWord);
        break;
      }
    }
    if(wordList.length === 0){
      newWordList.push(currentWord);
    }
    return newWordList;
  },[])

  wordList = wordList.reduce((newWordList,currentWord)=>{
    if(!newWordList.includes(currentWord)){
      newWordList.push(currentWord);
    }
    if(wordList.length === 0){
      newWordList.push(currentWord);
    }
    return newWordList;
  },[]);

  return wordList.slice(0,3);
}