const removeParentheses = require("..");

const makeSut = removeParentheses;

describe("Remove unnecessary parenthesis", () => {
  it('"(a" => "a"', () => {
    const result = makeSut("(a");
    expect(result).toBe("a");
  });
  it('"(a(a))" => "(a(a))"', () => {
    const result = makeSut("(a(a))");
    expect(result).toBe("(a(a))");
  });
  it('(((aa)) => ((aa))', () => {
    const result = makeSut("(((aa))");
    expect(result).toBe("((aa))");
  });
  it('"aa)" => "aa"', () => {
    const result = makeSut("aa)");
    expect(result).toBe("aa");
  });
});
