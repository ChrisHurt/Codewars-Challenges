const calcString = (stringExpression) => {
//   console.log(` START stringExpression: ${stringExpression}`)
  while(stringExpression.includes('(')){
    let subStrStart = stringExpression.lastIndexOf('(')
    let subStrEnd = stringExpression.slice(subStrStart).indexOf(')') + subStrStart + 1
    stringExpression = stringExpression.slice(0,subStrStart) +
                        calcString(stringExpression.slice(subStrStart+1,subStrEnd-1)) +
                        stringExpression.slice(subStrEnd)
//     console.log(`After recombination stringExpression: ${stringExpression}`)
  }
  if(!stringExpression.includes('(')){
    // / - divide
    let expressionArray = stringExpression.split('/')
    if(expressionArray.length > 1){
      let lastSubStr = ""
      stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{
        // if expSubStr has an operator in it, add it back to the expression after the last expression
        if(expSubStr.includes('*') || expSubStr.includes('+') || expSubStr.includes('-')){
          let appendString = ""
          if(lastSubStr !== ""){
            if(expSubStr.indexOf('+') > expSubStr.indexOf('-') && expSubStr.indexOf('+') > expSubStr.indexOf('*')){
              appendString = Number(lastSubStr) / Number(expSubStr.slice(0,expSubStr.indexOf('+')))
              lastSubStr = expSubStr.slice(expSubStr.indexOf('+'))
            } else if(expSubStr.indexOf('*') > expSubStr.indexOf('-') && expSubStr.indexOf('*') > expSubStr.indexOf('+')){
              appendString = Number(lastSubStr) / Number(expSubStr.slice(0,expSubStr.indexOf('*')))
              lastSubStr = expSubStr.slice(expSubStr.indexOf('*'))
            } else {
              appendString = Number(lastSubStr) / Number(expSubStr.slice(0,expSubStr.indexOf('-')))
              lastSubStr   = expSubStr.slice(expSubStr.indexOf('-'))
            }
//             console.log("appendString",appendString)
          } else {
            if(expSubStr.lastIndexOf('+') > expSubStr.lastIndexOf('-') && expSubStr.indexOf('+') > expSubStr.indexOf('*')){
              appendString = expSubStr.slice(0,expSubStr.lastIndexOf('+')+1)
              lastSubStr = expSubStr.slice(expSubStr.lastIndexOf('+')+1)
            } else if(expSubStr.indexOf('*') > expSubStr.indexOf('-') && expSubStr.indexOf('*') > expSubStr.indexOf('+')) {
              appendString = expSubStr.slice(0,expSubStr.lastIndexOf('*')+1)
              lastSubStr = expSubStr.slice(expSubStr.lastIndexOf('*')+1)
            } else {
              appendString = expSubStr.slice(0,expSubStr.lastIndexOf('-')+1)
              lastSubStr   = expSubStr.slice(expSubStr.lastIndexOf('-')+1)
            }
          }
          newStringExpression += appendString
          if(currentIndex + 1 === expressionArray.length){
            newStringExpression += lastSubStr
          }
        } else if(currentIndex + 1 === expressionArray.length){
          if(lastSubStr[0] == '+' || lastSubStr[0] == '-'){
            newStringExpression += lastSubStr[0]
            lastSubStr.slice(1)
          }
          newStringExpression += Number(lastSubStr) / Number(expSubStr)
          lastSubStr = ""
        // if expSubStr has no operator in it, store it as the lastSubStr
        } else if(lastSubStr === ""){
          lastSubStr = expSubStr;
        // if expSubStr and lastSubStr have no operators, calc value and store in lastSubStr 
        } else {
          lastSubStr = Number(lastSubStr) / Number(expSubStr)
        }
        
//         console.log('')
//         console.log("expSubStr: ",expSubStr)
//         console.log("lastSubStr: ",lastSubStr)
//         console.log("newStringExpression: ",newStringExpression)
//         console.log('')
        
        return newStringExpression
      },"")
    }
//     console.log(`After '/' stringExpression: ${stringExpression}`)
    // * - multiply
    expressionArray = stringExpression.split('*');
//     console.log("expressionArray",expressionArray)
    if(expressionArray.length > 1){
      let lastSubStr = ""
      stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{        
        // if expSubStr has an operator in it, add it back to the expression after the last expression
        if(expSubStr.includes('/') || expSubStr.includes('+') || expSubStr.includes('-')){
          let appendString = ""
          // Find the first operator
          if(lastSubStr !== ""){
            if(expSubStr.indexOf('/') > expSubStr.indexOf('+') && expSubStr.indexOf('/') >  expSubStr.indexOf('-')){
              appendString = Number(expSubStr.slice(0,expSubStr.indexOf('/'))) * Number(lastSubStr)
              lastSubStr = expSubStr.slice(expSubStr.indexOf('/'))
            } else if(expSubStr.indexOf('+') > expSubStr.indexOf('/') && expSubStr.indexOf('+') >  expSubStr.indexOf('-')){
              appendString = Number(expSubStr.slice(0,expSubStr.indexOf('+'))) * Number(lastSubStr)
              lastSubStr = expSubStr.slice(expSubStr.indexOf('+'))
            } else {
              if(expSubStr.indexOf('-') === 0){
                appendString = Number(expSubStr.slice(expSubStr.indexOf('-'))) * Number(lastSubStr)
                lastSubStr   = ""
              } else {
                appendString = Number(expSubStr.slice(0,expSubStr.indexOf('-'))) * Number(lastSubStr)
                lastSubStr   = expSubStr.slice(expSubStr.indexOf('-'))
              }
            }
            
          // Find the last operator
          } else {
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
          }
//           console.log("appendString",appendString)
          newStringExpression += appendString
          if(currentIndex + 1 === expressionArray.length){
            newStringExpression += lastSubStr
          }
          // + (currentIndex + 1 === expressionArray.length) ? lastSubStr : ""
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
//         console.log('')
//         console.log("expSubStr: ",expSubStr)
//         console.log("lastSubStr: ",lastSubStr)
//         console.log("newStringExpression: ",newStringExpression)
//         console.log('')
        return newStringExpression
      },"")
    }
//     console.log(`After '*' stringExpression: ${stringExpression}`)
    // - - subtract
    expressionArray = stringExpression.split('-');
//     console.log("- expressionArray",expressionArray)
    // Handle '-' values at start of array
    if(expressionArray.length > 1 && expressionArray[0] === ""){
      expressionArray = expressionArray.slice(1)
      expressionArray[0] = -expressionArray[0]
    }
    if(expressionArray.length > 1){
      let lastSubStr = ""
      let nextIsNegative = false
      stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{
        // if expSubStr has an operator in it, add it back to the expression after the last expression
        if(expSubStr === ""){
          nextIsNegative = true
        } else if(currentIndex + 1 === expressionArray.length){
          if(Number(expSubStr) == expSubStr){
            if(nextIsNegative){
              newStringExpression += Number(lastSubStr) + Number(expSubStr)
            } else {
              newStringExpression += Number(lastSubStr) - Number(expSubStr)
            }
          } else {
            if(lastSubStr !== ""){
              if(nextIsNegative){
                newStringExpression += Number(lastSubStr) + Number(expSubStr.slice(0,expSubStr.indexOf('+')))
              } else {
                newStringExpression += Number(lastSubStr) - Number(expSubStr.slice(0,expSubStr.indexOf('+')))
              }
//               newStringExpression += Number(lastSubStr) - Number(expSubStr.slice(0,expSubStr.indexOf('+')))
              newStringExpression += expSubStr.slice(expSubStr.indexOf('+'))
            } else {
              newStringExpression += expSubStr
            }
          }
          lastSubStr = ""
        // if expSubStr has no operator in it, store it as the lastSubStr
          nextIsNegative = false
        } else if(lastSubStr === ""){
          lastSubStr = expSubStr;
        // if expSubStr and lastSubStr have no operators, calc value and store in lastSubStr 
          nextIsNegative = false
        } else {
          lastSubStr -= Number(expSubStr)
          nextIsNegative = false
        }
//         console.log('')
//         console.log("expSubStr:",expSubStr)
//         console.log("lastSubStr: ",lastSubStr)
//         console.log("nextIsNegative: ",nextIsNegative)
//         console.log("newStringExpression:",newStringExpression)
//         console.log('')
        
        return newStringExpression
      },"")
    }
//     console.log(`After '-' stringExpression: ${stringExpression}`)
    
    // + - add
    expressionArray = stringExpression.split('+');
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
//     console.log(`After '+' stringExpression: ${stringExpression}`)

  }
  
//   console.log(`Returned stringExpression: ${stringExpression}`)
  return stringExpression;
}

const getAllPermutations = (string)=> {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
//     var firstChar = string[i];
//     var charsLeft = string.substring(0, i) + string.substring(i + 1);
    let innerPermutations = getAllPermutations(string.substring(0, i) + string.substring(i + 1));
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(string[i] + innerPermutations[j]);
    }
  }
  return results;
}

function equalTo24(a,b,c,d){ 
//   console.log(`inputs - a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
  // map binary strings of all combinations of a,b,c,d orders
  let computedValue = "It's not possible!"
  let variableCombinations = getAllPermutations("0123");
  let variables = [a,b,c,d]
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
    '03-02',
    '03-13',
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
          computationString += variables[varCombo[0]]
          // op pos-1
          computationString += operators[opCombo[0]]
          // left br pos-1
          computationString += leftBrackets.filter(lb=>lb==='1').map(e=>'(').join('')
          // var - 2
          computationString += variables[varCombo[1]]
          // right br pos-2
          computationString += rightBrackets.filter(rb=>rb==='2').map(e=>')').join('')
          // op pos-2
          computationString += operators[opCombo[1]]
          // left br pos-2
          computationString += leftBrackets.filter(lb=>lb==='2').map(e=>'(').join('')
          // var - 3
          computationString += variables[varCombo[2]]
          // right br pos-3
          computationString += rightBrackets.filter(rb=>rb==='3').map(e=>')').join('')
          // op pos-3
          computationString += operators[opCombo[2]]
          // var - 4
          computationString += variables[varCombo[3]]
          // right br pos-4 
          computationString += rightBrackets.filter(rb=>rb==='4').map(e=>')').join('')
          
          if(calcString(computationString) == 24){
            computedValue = 24
          }
          if(computedValue === 24) break
        }
        if(computedValue === 24) break
      }
      if(computedValue === 24) break
    }
  if(computedValue === 24){
    return computationString
  } else {
    return "It's not possible!"
  }
}
// Unit Tests

// console.log("Testing calcString for '2--1', your answer is:",calcString("2--1"))
// Test.assertSimilar(Number(calcString("2--1")), 3);

// console.log("Testing calcString for '72*((96/72)-1)', your answer is:",calcString("72*((96/72)-1)"))
// Test.assertSimilar(Number(calcString("72*((96/72)-1)")), 24);

// console.log("Testing calcString for '(96/8*6)*12', your answer is:",calcString("(96/8*6)*12"))
// Test.assertSimilar(Number(calcString("(96/8*6)*12")), -40);

// console.log("Testing calcString for '5*-8', your answer is:",calcString("5*-8"))
// Test.assertSimilar(Number(calcString("5*-8")), -40);

// console.log("Testing calcString for '(1+84)-6+1', your answer is:",calcString("(1+84)-6+1"))
// Test.assertSimilar(Number(calcString("(1+84)-6+1")), 80);

// console.log("Testing calcString for '6/3+4/1', your answer is:",calcString("6/3+4/1"))
// Test.assertSimilar(Number(calcString("6/3+4/1")), 6);

// console.log("Testing calcString for '5+10/5', your answer is:",calcString("5+10/5"))
// Test.assertSimilar(Number(calcString("5+10/5")), 7);

// console.log("Testing calcString for '4+2*10+10', your answer is:",calcString("4+2*10+10"))
// Test.assertSimilar(Number(calcString("4+2*10+10")), 34);

// console.log("Testing calcString for '4+2*0', your answer is:",calcString("4+2*0"))
// Test.assertSimilar(Number(calcString("4+2*0")), 4);

// console.log("Testing calcString for '4+2*(10-10)', your answer is:",calcString("4+2*(10-10)"))
// Test.assertSimilar(Number(calcString("4+2*(10-10)")), 4);
