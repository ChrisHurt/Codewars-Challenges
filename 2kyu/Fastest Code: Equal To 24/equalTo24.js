let calcString = (stringExpression) => {
  console.log(` START stringExpression: ${stringExpression}`)
  while(stringExpression.includes('(')){
    let subStrStart = stringExpression.lastIndexOf('(')
    let subStrEnd = stringExpression.slice(subStrStart).indexOf(')') + subStrStart + 1
    stringExpression = stringExpression.slice(0,subStrStart) +
                       calcString(stringExpression.slice(subStrStart+1,subStrEnd-1)) +
                       stringExpression.slice(subStrEnd)
    console.log(`After recombination stringExpression: ${stringExpression}`)
  }
  if(!stringExpression.includes('(')){
    let expressionArray = []
    // * - multiply
    expressionArray = stringExpression.split('*');
    if(expressionArray.length > 1){
      let lastSubStr = ""
      stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{        
        // if expSubStr has an operator in it, add it back to the expression after the last expression
        if(expSubStr.includes('/') || expSubStr.includes('+') || expSubStr.includes('-')){
          // Find furthest index
          let appendString = ""
          if(expSubStr.lastIndexOf('/') > expSubStr.lastIndexOf('+') && expSubStr.lastIndexOf('/') >  expSubStr.lastIndexOf('-')){
            appendString = expSubStr.slice(0,expSubStr.lastIndexOf('/')+1)
            lastSubStr = expSubStr.slice(expSubStr.lastIndexOf('/')+1)
          } else if(expSubStr.lastIndexOf('+') > expSubStr.lastIndexOf('/') && expSubStr.lastIndexOf('+') >  expSubStr.lastIndexOf('-')){
            appendString = expSubStr.slice(0,expSubStr.lastIndexOf('+')+1)
            lastSubStr = expSubStr.slice(expSubStr.lastIndexOf('+')+1)
          } else {
            appendString = expSubStr.slice(0,expSubStr.lastIndexOf('-')+1)
            lastSubStr   = expSubStr.slice(expSubStr.lastIndexOf('-')+1)
          }
          console.log(`expSubStr: ${expSubStr}`)
          console.log(`lastSubStr: ${lastSubStr}`)
          console.log(`appendString: ${appendString}`)
//           newStringExpression += lastSubStr + appendString
          newStringExpression += appendString
        } else if(currentIndex + 1 === expressionArray.length){
          newStringExpression += Number(lastSubStr) * Number(expSubStr)
          lastSubStr = ""
        // if expSubStr has no operator in it, store it as the lastSubStr
        } else if(lastSubStr === ""){
          lastSubStr = expSubStr;
        // if expSubStr and lastSubStr have no operators, calc value and store in lastSubStr 
        } else {
          lastSubStr = Number(lastSubStr) * Number(expSubStr)
        }
        
        return newStringExpression
      },"")
    }
    console.log(`After '*' stringExpression: ${stringExpression}`)
    // / - divide
    expressionArray = stringExpression.split('/');
    if(expressionArray.length > 1){
      let lastSubStr = ""
      stringExpression = expressionArray.reduce((newStringExpression,expSubStr)=>{
        // if expSubStr has an operator in it, add it back to the expression after the last expression
        if(expSubStr.includes('+') || expSubStr.includes('-')){
          newStringExpression += lastSubStr + expSubStr
          lastSubStr = ""
        // if expSubStr has no operator in it, store it as the lastSubStr
        } else if(lastSubStr === ""){
          lastSubStr = expSubStr;
        // if expSubStr and lastSubStr have no operators, calc value and store in lastSubStr 
        } else {
          lastSubStr /= expSubStr
        }
        
        return newStringExpression
      },"")
    }
    console.log(`After '/' stringExpression: ${stringExpression}`)
    
    // collapse +- symbols as needed
    
    // + - add
    expressionArray = stringExpression.split('+');
    console.log(expressionArray)
    if(expressionArray.length > 1){
      let lastSubStr = ""
      stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{
        // if expSubStr has an operator in it, add it back to the expression after the last expression
        if(expSubStr.includes('-')){
          newStringExpression += Number(Number(lastSubStr) + 
                                 Number(expSubStr.slice(0,expSubStr.indexOf('-')))) + 
                                 expSubStr.slice(expSubStr.indexOf('-'))
        } else if(currentIndex + 1 === expressionArray.length){
          if(Number(expSubStr) == expSubStr){
            newStringExpression += Number(lastSubStr) + Number(expSubStr)
          } else {
            newStringExpression += lastSubStr + expSubStr
          }
          lastSubStr = ""
        // if expSubStr has no operator in it, store it as the lastSubStr
        } else if(lastSubStr === ""){
          lastSubStr = expSubStr;
        // if expSubStr and lastSubStr have no operators, calc value and store in lastSubStr 
        } else {
          lastSubStr =  Number(lastSubStr) + Number(expSubStr)
        }
        
        return newStringExpression
      },"")
    }
    console.log(`After '+' stringExpression: ${stringExpression}`)
    // - - subtract
    expressionArray = stringExpression.split('-');
    if(expressionArray.length > 1){
      let lastSubStr = ""
      stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{
        // if expSubStr has an operator in it, add it back to the expression after the last expression
        if(currentIndex + 1 === expressionArray.length){
          if(Number(expSubStr) == expSubStr){
            newStringExpression += Number(lastSubStr) - Number(expSubStr)
          } else {
            newStringExpression += lastSubStr + expSubStr
          }
          lastSubStr = ""
        // if expSubStr has no operator in it, store it as the lastSubStr
        } else if(lastSubStr === ""){
          lastSubStr = expSubStr;
        // if expSubStr and lastSubStr have no operators, calc value and store in lastSubStr 
        } else {
          lastSubStr -= Number(expSubStr)
        }
        
        return newStringExpression
      },"")
    }
    console.log(`After '-' stringExpression: ${stringExpression}`)
  }


  // while brackets...
  // find inner most brackets
  // solve subexpression by recursion
  
  console.log(`Returned stringExpression: ${stringExpression}`)
  return stringExpression;
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
  let computedValue = "It's not possible!"
  let variableCombinations = []
  let variables = [a,b,c,d]
  variableCombinations = getAllPermutations("0123");
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
    '',
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
    for(let varCombo of variableCombinations){
      for(let opCombo of operatorCombinations){
        for(let brCombo of bracketCombinations){
          let brackets = brCombo.split("-")
          let leftBrackets = brackets.map(bracket=>bracket[0])
          let rightBrackets = brackets.map(bracket=>bracket[1])
          computationString = ""
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
          
          if(Number(calcString(computationString)) == 24){
            computedValue = 24
          }
          if(computedValue === 24) break
        }
        if(computedValue === 24) break
      }
      if(computedValue === 24) break
    }
    if(computedValue === 24) console.log(`correct solution: ${computationString}`)
  return computedValue
}