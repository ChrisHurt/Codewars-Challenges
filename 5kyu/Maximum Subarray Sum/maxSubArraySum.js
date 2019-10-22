var sequenceSum = (arr) => {
  return arr.reduce((total,currentElem)=>total+currentElem)
}
var maxSequence = function(arr){
  let maxSum = 0;
  for(let i = 0; i < arr.length; i++){
    let arraySequence = arr.slice(i)
    while(arraySequence.length){
      let sequenceTally = sequenceSum(arraySequence)
      if(sequenceTally > maxSum)
        maxSum = sequenceTally
      arraySequence.pop()
    }
  }
  return maxSum
}

