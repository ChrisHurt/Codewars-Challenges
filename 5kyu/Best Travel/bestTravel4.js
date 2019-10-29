let adjustedFactorial = (num,townLimit) => {
  return (townLimit == 1) ? (num) : (num*adjustedFactorial(num-1,townLimit-1));
}

function chooseBestSum(t, k, ls) {
  let closestSum = null;
  let permutationList = [];
  if(ls.length < k){
    return null;
  } else {
    let numPermutations = adjustedFactorial(ls.length, k);
    let permutationIndex = 1;
    let permutation = "";
    while(numPermutations !== 0 && permutation.length <= ls.length){
      permutation = permutationIndex.toString(2);
      if(permutation.match(/1/g).length === k){
        numPermutations--;
        while(permutation.length < ls.length){
          permutation = '0' + permutation;
        }
        permutationList.push(permutation);
      }
      permutationIndex++;
    }
  }
  permutationList.forEach(permutation=>{
    permutationSum = 0;
    for(let j = 0; j < ls.length; j++){
      if(permutation[j] == 1){
        permutationSum += ls[j];
      }
    }
    if(permutationSum <= t && (closestSum == null || permutationSum > closestSum)){
      closestSum = permutationSum;
    }
  });
  
  return closestSum;
}