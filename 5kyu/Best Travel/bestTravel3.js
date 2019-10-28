let calculateIndexPermutations = (num,townLimit,permutations,permutationString) => {
  for(let i = num-1; i >= 0; i--){
    permutationString += i.toString()
    calculateIndexPermutations(i,townLimit,permutations,permutationString);
  }
}





function chooseBestSum(t, k, ls) {
  let closestSum = null;
  if(ls.length < k){
    return null;
  } else {
    let permutations = calculateIndexPermutations(t,k,[],"");
    let newSum = currentIndices.reduce((sum,currentIndex)=>sum+ls[currentIndex],0)
  }
  
  return closestSum;
}

console.log(factorial(5,1));
console.log(factorial(5,2));
console.log(factorial(5,3));