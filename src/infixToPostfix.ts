export function infixToPostfix(expression: string) {
  const trimeedExpression = expression.replace(/(\s*)/g, "");

  const result: string[] = [];
  const operatorStack: string[] = [];

  for (let char of trimeedExpression) {
    if (char === "(") {
      operatorStack.push(char);
    }

    if (char === ")") {
      while (true) {
        const operator = operatorStack.pop();

        if (operator === undefined || operator === "(") {
          break;
        }

        result.push(operator);
      }
    }

    // 지금부터는 + - * /
    if (char === "*" || char === "/") {
      const lastOperator = operatorStack[operatorStack.length - 1];

      if (lastOperator === "*" || lastOperator === "/") {
        operatorStack.pop();
        result.push(lastOperator);
        operatorStack.push(char);
      } else {
        operatorStack.push(char);
      }
    }

    if (char === "+" || char === "-") {
      const lastOperator = operatorStack[operatorStack.length - 1];

      if (lastOperator === "*" || lastOperator === "/") {
        operatorStack.pop();
        result.push(lastOperator);
        operatorStack.push(char);
      } else {
        operatorStack.push(char);
      }
    }

    if (!isNaN(Number(char))) {
      result.push(char);
    }
  }

  while (operatorStack.length > 0) {
    const operator = operatorStack.pop();
    if (operator === undefined) {
      break;
    }
    result.push(operator);
  }

  return result.join("");
}
