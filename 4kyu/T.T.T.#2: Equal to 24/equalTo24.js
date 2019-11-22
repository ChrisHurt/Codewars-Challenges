const calcString = (stringExpression) => {
    while(stringExpression.includes('(')){
      let subStrStart = stringExpression.lastIndexOf('(')
      let subStrEnd = stringExpression.slice(subStrStart).indexOf(')') + subStrStart + 1
      stringExpression = stringExpression.slice(0,subStrStart) +
                         calcString(stringExpression.slice(subStrStart+1,subStrEnd-1)) +
                         stringExpression.slice(subStrEnd)
    }
    if(!stringExpression.includes('(')){
      let expressionArray = stringExpression.split('/')
      if(expressionArray.length > 1){
        let lastSubStr = ""
        stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{
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
          } else if(lastSubStr === ""){
            lastSubStr = expSubStr;
          } else {
            lastSubStr = Number(lastSubStr) / Number(expSubStr)
          }
          return newStringExpression
        },"")
      }
      expressionArray = stringExpression.split('*');
      if(expressionArray.length > 1){
        let lastSubStr = ""
        stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{        
          if(expSubStr.includes('/') || expSubStr.includes('+') || expSubStr.includes('-')){
            let appendString = ""
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
            newStringExpression += appendString
            if(currentIndex + 1 === expressionArray.length){
              newStringExpression += lastSubStr
            }
          } else if(currentIndex + 1 === expressionArray.length){
            newStringExpression += Number(lastSubStr) * Number(expSubStr)
            lastSubStr = ""
          } else if(lastSubStr === ""){
            lastSubStr = expSubStr;
          } else {
            lastSubStr = Number(lastSubStr) * Number(expSubStr)
          }
          return newStringExpression
        },"")
      }
      expressionArray = stringExpression.split('-');
      if(expressionArray.length > 1 && expressionArray[0] === ""){
        expressionArray = expressionArray.slice(1)
        expressionArray[0] = -expressionArray[0]
      }
      if(expressionArray.length > 1){
        let lastSubStr = ""
        let nextIsNegative = false
        stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{
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
                newStringExpression += expSubStr.slice(expSubStr.indexOf('+'))
              } else {
                newStringExpression += expSubStr
              }
            }
            lastSubStr = ""
            nextIsNegative = false
          } else if(lastSubStr === ""){
            lastSubStr = expSubStr;
            nextIsNegative = false
          } else {
            lastSubStr -= Number(expSubStr)
            nextIsNegative = false
          }
          return newStringExpression
        },"")
      }
      expressionArray = stringExpression.split('+');
      if(expressionArray.length > 1){
        let lastSubStr = ""
        stringExpression = expressionArray.reduce((newStringExpression,expSubStr,currentIndex)=>{
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
          } else if(lastSubStr === ""){
            lastSubStr = expSubStr;
          } else {
            lastSubStr =  Number(lastSubStr) + Number(expSubStr)
          }
          return newStringExpression
        },"")
      }
    }
    return stringExpression;
  }
  
  const getAllPermutations = (string)=> {
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      let innerPermutations = getAllPermutations(string.substring(0, i) + string.substring(i + 1));
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(string[i] + innerPermutations[j]);
      }
    }
    return results;
  }
  
  function equalTo24(a,b,c,d){ 
    let computedValue = "It's not possible!"
    let variableCombinations = getAllPermutations("0123");
    let variables = [a,b,c,d]
    let operators = ['+','-','*','/']
    let operatorCombinations = []
    for(let i = 0; i < 64; i++){
      let operatorCombination = (i).toString(4);
      while(operatorCombination.length < 3) operatorCombination = '0' + operatorCombination
      operatorCombinations.push(operatorCombination) 
    }
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
      for(let varCombo of variableCombinations){
        for(let opCombo of operatorCombinations){
          for(let brCombo of bracketCombinations){
            let brackets = brCombo.split("-")
            let leftBrackets = brackets.map(bracket=>bracket[0])
            let rightBrackets = brackets.map(bracket=>bracket[1])
            computationString = ""
            computationString += leftBrackets.filter(lb=>lb==='0').map(e=>'(').join('')
            computationString += variables[varCombo[0]]
            computationString += operators[opCombo[0]]
            computationString += leftBrackets.filter(lb=>lb==='1').map(e=>'(').join('')
            computationString += variables[varCombo[1]]
            computationString += rightBrackets.filter(rb=>rb==='2').map(e=>')').join('')
            computationString += operators[opCombo[1]]
            computationString += leftBrackets.filter(lb=>lb==='2').map(e=>'(').join('')
            computationString += variables[varCombo[2]]
            computationString += rightBrackets.filter(rb=>rb==='3').map(e=>')').join('')
            computationString += operators[opCombo[2]]
            computationString += variables[varCombo[3]]
            computationString += rightBrackets.filter(rb=>rb==='4').map(e=>')').join('')
            
            if(calcString(computationString) == 24){
              computedValue = 24
              break
            }
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