export function evaluate(expression: string): number {
  expression = expression.replace(/(\s*)/g, "");
  
  let outStack = [];
  let operatorStack= [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/') {
      if (operatorStack.length == 0) {
        operatorStack.push(expression[i]);
      };
      if (operatorStack.length !== 0) {
        if (expression[i] == '*' || expression[i] == '/') {
          operatorStack.push(expression[i]);
        };
        if (expression[i] == '+' || expression[i] == '-') {
          for (let i = 0; i < operatorStack.length; i++) {
            if (operatorStack[i] == '*' || operatorStack[i] == '/') {
              outStack.push(operatorStack.pop());
            };
          };
          operatorStack.push(expression[i]);
        };
      };
    } else {
      outStack.push(expression[i]);
    };
  };

  if (operatorStack.length !== 0) {
    for (let i = 0; i < operatorStack.length; i++) {
      outStack.push(operatorStack.pop());
    };
  };
  return 0;
}

evaluate('1 + 2 * 3'); // 7
// evaluate('(1 + 2) * 3'); // 9
// evaluate('1 / 32.5 + 167 * (3498 - 1155) * -721 * (4885 - 1) / 0.5'); // -2755685654567.969
