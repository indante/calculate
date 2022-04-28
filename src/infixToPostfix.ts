export function infixToPostfix(expression: string) {
  const trimeedExpression = expression.replace(/(\s*)/g, "");

  const result: string[] = [];
  const operatorStack: string[] = [];

  for (let i = 0; i < trimeedExpression.length; i++) {
    const char = trimeedExpression[i];

    if (char === "-" && !isNumber(trimeedExpression[i - 1])) {
      result.push("negative");
    } else if (char === "*" || char === "/") {
      const lastOperator = operatorStack[operatorStack.length - 1];

      if (lastOperator === "*" || lastOperator === "/") {
        operatorStack.pop();
        result.push(lastOperator);
        operatorStack.push(char);
      } else {
        operatorStack.push(char);
      }
    } else if (char === "+" || char === "-") {
      const lastOperator = operatorStack[operatorStack.length - 1];

      if (lastOperator === "*" || lastOperator === "/") {
        operatorStack.pop();
        result.push(lastOperator);
        operatorStack.push(char);
      } else {
        operatorStack.push(char);
      }
    }

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

    if (isNumber(char) || trimeedExpression[i] === ".") {
      const lastChar = trimeedExpression[i - 1];
      const isNegative = result[result.length - 1] === "negative";
      if (isNumber(lastChar) || lastChar === "." || isNegative) {
        if (isNegative) {
          result.pop();
          result.push(`-${char}`);
        } else {
          const combined = result.pop() + char;
          result.push(combined);
        }
      } else {
        result.push(char);
      }
    }
  }

  while (operatorStack.length > 0) {
    const operator = operatorStack.pop();
    if (operator === undefined) {
      break;
    }
    result.push(operator);
  }

  return result.join(",");
}

function isNumber(value: string) {
  return !isNaN(Number(value));
}
