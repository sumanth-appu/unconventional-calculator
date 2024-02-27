const defaultnumm = 0;
let currentResult = defaultnumm;
let logentries = [];
function getUserInput() {
  return parseInt(userInput.value);
}
// calculate the reult and write on user log
function writeoutput(operator, resultbefore, resultafter) {
  const calcDescription = `${resultbefore}${operator}${resultafter}`;
  outputResult(currentResult, calcDescription);
  return calcDescription;
}
//write value on the display
function writelog(operation, previousResult, opernum) {
  const logentr = {
    operation: operation,
    previousresult: previousResult,
    num: opernum,
  };
  logentries.push(logentr);
  console.log(logentries);
}
// calculation function with conditional statements
function calculate(Type) {
  const Input = getUserInput();
  const inireuslt = currentResult;
  let mathopr;
  if (Type === "Add") {
    currentResult += Input;
    mathopr = "+";
  } else if (Type === "Subtract") {
    currentResult -= Input;
    mathopr = "-";
  }else if(Type==="MULTIPLY"){
    currentResult *= Input;
    mathopr = "*";
  }else if(Type==="DIVIDE"){
    currentResult /= Input;
    mathopr ="/";
  }

  writeoutput(mathopr, inireuslt, Input);
  writelog(Type, inireuslt, Input);
}

//  Different Functions for calculation
function add() {
  calculate("Add");
}
function subtract() {
  calculate("Subtract");
}
function multlipy() {
  calculate("MULTIPLY");
}
function divide() {
calculate("DIVIDE");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multlipy);
divideBtn.addEventListener("click", divide);
