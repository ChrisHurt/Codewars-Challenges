let calcString = (stringExpression) => {
  // TODO: calculate from string
  return 24;
}

function equalTo24(a,b,c,d){ 
  console.log(`inputs - a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
  // map binary strings of all combinations of a,b,c,d orders
  let variableCombinations = []
  let variables = [a,b,c,d]
  let numPermutations = 0
  while(numPermutations < 24){
    let varCombo = (numPermutations).toString(4)
    if(varCombo.match(/0/) && varCombo.match(/0/g).length == 1 && 
       varCombo.match(/1/) && varCombo.match(/1/g).length == 1 &&
       varCombo.match(/2/) && varCombo.match(/2/g).length == 1 &&
       varCombo.match(/3/) && varCombo.match(/3/g))
    {
      numPermutations++
      variableCombinations.push(varCombo)
    }
    
  }
  console.log(variableCombinations)
  // map binary strings of all combinations of operators
  let operators = ['+','-','*','/']
  let operatorCombinations = []
  for(let i = 0; i < 64; i++){
    let operatorCombination = (i).toString(4);
    while(operatorCombination.length < 3) operatorCombination = '0' + operatorCombination
    operatorCombinations.push(operatorCombination) 
  }
  // manually assign strings of all combinations of brackets
  let bracketCombinations = [
    '02-24',
    '02',
    '24',
    '03',
    '03-02',
    '03-13',
    '14',
    '14-24',
    '14-13'
  ]
    let computationString = ""
    // for each variable combination consider all bracket variants
    variableCombinations.forEach(varCombo=>{
      operatorCombinations.forEach(opCombo=>{
        bracketCombinations.forEach(brCombo=>{
          let brackets = brCombo.split("-")
          let leftBrackets = brackets.map(bracket=>bracket[0])
          let rightBrackets = brackets.map(bracket=>bracket[1])
          let computationString = ""
          // left br pos-0
          computationString += leftBrackets.filter(lb=>lb==='0').map(e=>'(').join('')
          // var - 1
          computationString += variables[varCombo[0]].toString()      
          
          console.log(computationString)
          // op pos-1
          // left br pos-1
          // var - 2
          // right br pos-2
          // op pos-2
          // left br pos-2
          // var - 3
          // right br pos-3
          // op pos-3
          // var - 4
          // right br pos-4 

          if(calcString(computationString) === 24) return computationString
        })
      })
    })
      // for each scoped order try *,/,+,-
      // calculate the permutation
      // return early if the permutation succeeds
      
  
  
  return "It's not possible!"
}