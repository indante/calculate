import { infixToPostfix } from "./infixToPostfix";

describe("infixToPostfix", () => {
  it("괄호 없는 경우 - 한 자릿수", () => {
    expect(infixToPostfix("1 + 2 * 3")).toEqual("1,2,3,*,+");
  });

  it("괄호 있는 경우 - 한 자릿수", () => {
    expect(infixToPostfix("(1 + 2) * 3")).toEqual("1,2,+,3,*");
  });

  it("괄호 없는 경우 - 여러 자릿수", () => {
    expect(infixToPostfix("10 + 20 * 30")).toEqual("10,20,30,*,+");
    expect(infixToPostfix("100 + 20 * 30")).toEqual("100,20,30,*,+");
  });

  // it("괄호 있는 경우 - 여러 자릿수", () => {
  //   expect(infixToPostfix("(10 + 20) * 30")).toEqual("10,20,+,30,*");
  // });

  it("음수가 있는 경우 - 여러 자릿수", () => {
    expect(infixToPostfix("(10 + -20) * 30")).toEqual("10,-20,+,30,*");
    expect(infixToPostfix("-8+3+2")).toEqual("-8,3,2,+,+");
    expect(infixToPostfix("(8-3)+2")).toEqual("8,3,-,2,+");
  });
  it("실수가 있는 경우 - 여러 자릿수", () => {
    expect(infixToPostfix("0.3 + 0.1 - 0.2 * 0.4")).toEqual(
      "0.3,0.1,0.2,0.4,*,-,+"
    );
    expect(infixToPostfix("0.01 * (3 + 4)")).toEqual("0.01,3,4,+,*");
  });
});
