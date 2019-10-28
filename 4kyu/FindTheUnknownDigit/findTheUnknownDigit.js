function solveExpression(exp) {
  console.log('original expression: ' + exp);
    let LHSValue, RHSValue;
    let substituteString;
    for(let i = (exp[0] == '?') ? 1 : 0; i <= 9; i++){
    
      substituteString = exp;
      while(substituteString.includes('?')){
        substituteString = substituteString.replace('?',i.toString());
      }
      let [LHS, RHS] = substituteString.split('='); 
  //     console.log(LHS);
  //     console.log(RHS);
      
      if(LHS.includes('*')){
        let leftOfOperator =  Number(LHS.slice(  0,LHS.indexOf('*') ));
        let rightOfOperator = Number(LHS.slice(LHS.indexOf('*') + 1));
        LHSValue = leftOfOperator * rightOfOperator;
        console.log(`leftOfOperator: ${leftOfOperator}, rightOfOperator: ${rightOfOperator}`);
      } else if(LHS.includes('+')){
        let leftOfOperator =  Number(LHS.slice(  0,LHS.indexOf('+') ));
        let rightOfOperator = Number(LHS.slice(LHS.indexOf('+') + 1));
        LHSValue = leftOfOperator + rightOfOperator;
        console.log(`leftOfOperator: ${leftOfOperator}, rightOfOperator: ${rightOfOperator}`);
      } else if(LHS.includes('-')){
        let leftOfOperator =  Number(LHS.slice(  0,LHS.indexOf('-') ));
        let rightOfOperator = Number(LHS.slice(LHS.indexOf('-') + 1));    
        LHSValue = leftOfOperator - rightOfOperator;
        console.log(`leftOfOperator: ${leftOfOperator}, rightOfOperator: ${rightOfOperator}`);
      }
      
      RHSValue = Number(RHS);
      
      if(LHSValue === RHSValue){
        return i;
      }
    }
    return -1;
  }