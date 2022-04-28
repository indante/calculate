export function calculatePostfix(postfix: string) {
  const stack: number[] = [];

  for (let char of postfix.split(",")) {
    if (isNaN(Number(char))) {
      const firstPopStack = stack.pop();
      const secondPopStack = stack.pop();

      if (char === "+" && firstPopStack && secondPopStack) {
        stack.push(Number(secondPopStack) + Number(firstPopStack));
      }

      if (char === "-" && firstPopStack && secondPopStack) {
        stack.push(Number(secondPopStack) - Number(firstPopStack));
      }

      if (char === "*" && firstPopStack && secondPopStack) {
        stack.push(Number(secondPopStack) * Number(firstPopStack));
      }

      if (char === "/" && firstPopStack && secondPopStack) {
        stack.push(Number(secondPopStack) / Number(firstPopStack));
      }
    } else {
      stack.push(Number(char));
    }
  }

  return stack[0];
}
