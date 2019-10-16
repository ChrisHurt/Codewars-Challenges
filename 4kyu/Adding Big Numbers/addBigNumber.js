let prependString = (evaluatedDigit,printString) => {
  let carriedValue = 0;
  if (evaluatedDigit < 10){
    printString = (evaluatedDigit).toString() + printString
  } else {
    printString = (evaluatedDigit % 10).toString() + printString
    carriedValue = Math.round((evaluatedDigit - (evaluatedDigit % 10))/10)
  }
  return {
    newPrintString: printString,
    newCarriedValue: carriedValue
  }
}

function add(a, b) {
  let indexA = a.length - 1;
  let indexB = b.length - 1;
  let carriedValue = 0;
  let printString = ""
  
  while(indexA >= 0 || indexB >= 0){
    if(indexA >= 0 && indexB >= 0){
      let evaluatedDigit = Number(a[indexA]) + Number(b[indexB]) + carriedValue
      let {
        newPrintString,
        newCarriedValue
      } = prependString(evaluatedDigit,printString)
      printString = newPrintString
      carriedValue = newCarriedValue
    } else if (indexB >= 0){
      let evaluatedDigit = Number(b[indexB]) + carriedValue
      let {
        newPrintString,
        newCarriedValue
      } = prependString(evaluatedDigit,printString)
      printString = newPrintString
      carriedValue = newCarriedValue
    } else if (indexA >= 0){
      let evaluatedDigit = Number(a[indexA]) + carriedValue
      let {
        newPrintString,
        newCarriedValue
      } = prependString(evaluatedDigit,printString)
      printString = newPrintString
      carriedValue = newCarriedValue
    }
    indexA--
    indexB--
  }
  if (carriedValue)
    printString = carriedValue + printString
    
  return printString
}