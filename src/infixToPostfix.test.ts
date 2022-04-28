import { infixToPostfix } from "./infixToPostfix";

describe("infixToPostfix", () => {
  it("괄호 없는 경우", () => {
    expect(infixToPostfix("1 + 2 * 3")).toEqual("123*+");
  });

  it("괄호 있는 경우", () => {
    expect(infixToPostfix("(1 + 2) * 3")).toEqual("12+3*");
  });
});
