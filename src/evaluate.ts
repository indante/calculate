import { calculatePostfix } from "./calculatePostfix";
import { infixToPostfix } from "./infixToPostfix";

export function evaluate(expression: string): number {
  const postfix = infixToPostfix(expression);
  const result = calculatePostfix(postfix);

  return result;
}
