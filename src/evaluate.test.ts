import { evaluate } from "./evaluate"

describe('evalute', () => {
  it('기본 사칙연산이 잘 동작한다', () => {
    expect(evaluate('1+2')).toEqual(3)
  })

  it('입출력 예시가 잘 동작해야 한다', () => {
    expect(evaluate('1 + 2 * 3')).toEqual(7)
    expect(evaluate('(1 + 2) * 3')).toEqual(9)
    expect(evaluate('1 / 32.5 + 167 * (3498 - 1155) * -721 * (4885 - 1) / 0.5')).toEqual(-2755685654567.969)
  })
})