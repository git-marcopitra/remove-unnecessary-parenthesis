const { toCharArray } = require("../to-char-array");

const makeSut = toCharArray;

describe('Convert string to array', () => {
  it('should return ["a", "b", "c"]', () => {
    const result = makeSut("abc");
    expect(result).toEqual(["a", "b", "c"]);
  });
});