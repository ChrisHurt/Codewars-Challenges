// function calculatePermutation(currentTotal, t, k, ls){
// }

function chooseBestSum(t, k, ls) {
  let closestSum = null;
  let calculating = true;
  let currentIndices = [];
  let changingIndex;
  
  if(ls.length < k){
    return null;
  } else {
    for(let i = 0; i < k; i++){
      currentIndices.push(i);
    }
    changingIndex = k - 1;
    while(calculating){
    
      // Check if closestSum can be improved
      let newSum = currentIndices.reduce((sum,currentIndex)=>sum+ls[currentIndex],0)
      if(newSum < t && (closestSum == null || newSum > closestSum)){
        closestSum = newSum;
      }
      
      // Change the closestSum indices to consider a new permutation
      if(currentIndices[changingIndex] < ls.length - 1 && !currentIndices.includes(currentIndices[changingIndex]+1){
        currentIndices[changingIndex]++;
      
      // otherwise, change the index to consider
      } else {
        // check if fully right stacked
          // if so return closestSum
        if(currentIndices[currentIndices.length-1] == ls.length - 1){
          let reversedIndices = currentIndices.reverse();
          let comparisonIndex = ls.length - 1;
          let rightStacked = true;
          
          for(let m = 1; m < currentIndices.length; m++){
            if(reversedIndices[m] == comparisonIndex - 1){
              comparisonIndex--;
            } else {
              rightStacked = false;
            }
          }
        }
        if(rightStacked){
          return closestSum;
        }
        // else decrease the change index
          // check if iteration is possible
        
      }
    }
  }
  
  return closestSum;
}