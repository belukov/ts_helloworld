
import "mocha";
import assert from "assert";


describe("Test function args and returns", () => {

  it("Should check func typed args", () => {

    assert.equal("num: 6; str: ABC; bool: true", useArgs(3, "aBc", true));
    assert.equal("num: 14; str: CBA; bool: false", useArgs(7, "cbA"));
    //useArgs(1, "aaa", 222); // Compilation error
  });

  it("Should check func typed result", () => {

    assert.equal("ABCD", useReturn("abCd"));
    assert.equal("", useReturn(""));
    assert.equal("__EMPTY__", useReturn());
    //assert.equal("123", useReturn(123)); // Compilation error
  });
});

function useArgs(a: number, b: string, c?: boolean) {
  return ""
    + `num: ${a * 2}; `
    + `str: ${b.toUpperCase()}; `
    + `bool: ${c || false}`;
}

function useReturn(a?: string): string {
  return (typeof a == "string") ? 
      a.toUpperCase() :
      "__EMPTY__";
}