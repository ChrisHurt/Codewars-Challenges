let calcString = (stringExpression) => {
  console.log(` START stringExpression: ${stringExpression}`)
  while(stringExpression.includes('(')){
    let subStrStart = stringExpression.lastIndexOf('(') + 1
    let subStrEnd = stringExpression.slice(subStrStart).indexOf(')')
    stringExpression = stringExpression.slice(0,subStrStart) +
                       calcString(stringExpression.slice(subStrStart,subStrEnd)) +
                       stringExpression.slice(subStrEnd)
    console.log(`stringExpression: ${stringExpression}`)
  }


  // while brackets...
  // find inner most brackets
  // solve subexpression by recursion
  return 24;
}

function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

function equalTo24(a,b,c,d){ 
  console.log(`inputs - a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
  // map binary strings of all combinations of a,b,c,d orders
  let variableCombinations = []
  let variables = [a,b,c,d]
  variableCombinations = getAllPermutations("0123");
  console.log(variableCombinations)
//   let numPermutations = 0
//   while(numPermutations < 24){
//     let varCombo = (numPermutations).toString(4)
//     if(varCombo.match(/0/) && varCombo.match(/0/g).length == 1 && 
//        varCombo.match(/1/) && varCombo.match(/1/g).length == 1 &&
//        varCombo.match(/2/) && varCombo.match(/2/g).length == 1 &&
//        varCombo.match(/3/) && varCombo.match(/3/g))
//     {
//       numPermutations++
//       variableCombinations.push(varCombo)
//     }
    
//   }
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
          // op pos-1
          computationString += operators[opCombo[0]]
          // left br pos-1
          computationString += leftBrackets.filter(lb=>lb==='1').map(e=>'(').join('')
          // var - 2
          computationString += variables[varCombo[1]].toString()      
          // right br pos-2
          computationString += rightBrackets.filter(rb=>rb==='2').map(e=>')').join('')
          // op pos-2
          computationString += operators[opCombo[1]]
          // left br pos-2
          computationString += leftBrackets.filter(lb=>lb==='2').map(e=>'(').join('')
          // var - 3
          computationString += variables[varCombo[2]].toString()    
          // right br pos-3
          computationString += rightBrackets.filter(rb=>rb==='3').map(e=>')').join('')
          // op pos-3
          computationString += operators[opCombo[2]]
          // var - 4
          computationString += variables[varCombo[3]].toString()
          // right br pos-4 
          computationString += rightBrackets.filter(rb=>rb==='4').map(e=>')').join('')
          console.log(computationString)

          if(calcString(computationString) === 24) return computationString
        })
      })
    })
      // for each scoped order try *,/,+,-
      // calculate the permutation
      // return early if the permutation succeeds
      
  
  
  return "It's not possible!"
}