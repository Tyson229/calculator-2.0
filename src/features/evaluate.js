function evaluate(previousOperand, currentOperand, operator) {
  switch (operator) {
    case "+":
      return parseFloat(previousOperand) + parseFloat(currentOperand);
    case "-":
      return parseFloat(previousOperand) - parseFloat(currentOperand);
    case "*":
      return parseFloat(previousOperand) * parseFloat(currentOperand);
    case "/":
      return parseFloat(previousOperand) / parseFloat(currentOperand);
  }
}
export default evaluate;