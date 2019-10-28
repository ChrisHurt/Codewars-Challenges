function solveExpression(exp) {
  console.log('original expression: ' + exp);
    let LHSValue, RHSValue;
    let substituteString;
    let startPos = 0;
    if( ( (exp[0] == '?') && (exp[2] == '*' || exp[2] == '+' || exp[2] == '-') ) || exp.includes('??') ){startPos = 1;}
  //   if(exp[0] == '?'){startPos = 1;}
    
    for(let i = startPos; i <= 9; i++){
      console.log('i: ' + i);
      if(exp.includes(i.toString())){continue;}
      substituteString = exp;
      while(substituteString.includes('?')){
        substituteString = substituteString.replace('?',i.toString());
      }
      let [LHS, RHS] = substituteString.split('='); 
      let leftOfOperatorString,rightOfOperatorString = '';
      let operator = '';
      if(LHS.includes('*')){
        operator = '*';
      } else if(LHS.includes('+')){
        operator = '+';
      } else if(LHS.includes('-')){
        operator = '-';
      }
      leftOfOperatorString =  LHS.slice(  0,LHS.indexOf(operator) );
      rightOfOperatorString = LHS.slice(LHS.indexOf(operator) + 1);    
      console.log(`leftOfOperator: ${leftOfOperatorString}, rightOfOperator: ${rightOfOperatorString}`);
     
      switch(operator){
        case '*': 
          LHSValue = Number(leftOfOperatorString) * Number(rightOfOperatorString);
          break;
        case '+': 
          LHSValue = Number(leftOfOperatorString) + Number(rightOfOperatorString);
          break;
        case '-': 
          LHSValue = Number(leftOfOperatorString) - Number(rightOfOperatorString);
          break;
        default:
          LHSValue = Number(LHS);
          break;
      }
      
      RHSValue = Number(RHS);
      
      if(LHSValue === RHSValue){
        return i;
      }
    }
    return -1;
  }