let adjustedFactorial = (num,townLimit) => {
  return (townLimit == 1) ? (num) : (num*factorial(num-1,townLimit-1));
}


let calculateIndexPermutations = (listLength,townLimit,maxDistance) => {
  let permutations = [];
  let numPermutations = adjustedFactorial(listLength,townLimit);
  while(permutations.length < numPermutations){
    // add a new permutation...
  }
  return permutations;
}


function chooseBestSum(t, k, ls) {
  let closestSum = null;
  if(ls.length < k){
    return null;
  } else {
    let permutations = calculateIndexPermutations();
    let newSum = currentIndices.reduce((sum,currentIndex)=>sum+ls[currentIndex],0)
  }
  
  return closestSum;
}

console.log(factorial(5,1));
console.log(factorial(5,2));
console.log(factorial(5,3));