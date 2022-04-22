export function evaluate(expression: string): number {
   return 3
}

evaluate('1 + 2 * 3'); // 7
evaluate('(1 + 2) * 3'); // 9
evaluate('1 / 32.5 + 167 * (3498 - 1155) * -721 * (4885 - 1) / 0.5'); // -2755685654567.969