const { getOpeners } = require("../get-openers");
const { toCharArray } = require("../to-char-array");

const makeSut = (text) => getOpeners(toCharArray(text));

describe("Get open parenthesis", () => {
  it("should return []", () => {
    const result = makeSut(") ha");
    expect(result).toEqual([]);
  });
  it("should return [0,1,2,3,4,5,6,7]", () => {
    const result = makeSut("(((((((( ) ha");
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });
  it("should return [0,1,2,3,4,5,6,10]", () => {
    const result = makeSut("((((((( ) (ha");
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 10]);
  });
});
