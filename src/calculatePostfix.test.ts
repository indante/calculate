import { calculatePostfix } from "./calculatePostfix";

describe("calculatePostfix", () => {
  it("한자릿수 postfix 계산 ", () => {
    expect(calculatePostfix("1,2,3,*,+")).toEqual(7);
    expect(calculatePostfix("1,2,+,3,*")).toEqual(9);
    expect(calculatePostfix("2,4,5,+,*")).toEqual(18);
    expect(calculatePostfix("6,2,/,4,3,*,3,/,1,-,+")).toEqual(6);
  });

  it("여러자릿수 postfix 계산 ", () => {
    expect(calculatePostfix("10,20,*")).toEqual(200);
    expect(calculatePostfix("10,20,3,*,+")).toEqual(70);
    expect(calculatePostfix("10,20,-")).toEqual(-10);
  });
});
