import { calculatePostfix } from "./calculatePostfix";

describe("calculatePostfix", () => {
  it("postfix 계산", () => {
    expect(calculatePostfix("123*+")).toEqual(7);
    expect(calculatePostfix("12+3*")).toEqual(9);
    expect(calculatePostfix("245+*")).toEqual(18);
    expect(calculatePostfix("62/43*3/1-+")).toEqual(6);
  });
});
