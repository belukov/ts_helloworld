import assert from 'assert';
import { printIPoint, printTPoint } from '../lib/types';

describe("Test `type` and `interface`", () => {

  const myPoint = { x: 1, y: 2 };
  
  it("Check use typed function", () => {

    let res = printTPoint({p: {...myPoint}, color: "red"});
    assert.equal("TPoint: 1, 2, red", res);
  });

  it("Check use interfaced function", () => {

    assert.equal(
      "IPoint: 1, 2, green",
      printIPoint({...myPoint, color: "green"}));
    assert.equal(
      "IPoint: 1, 2, _none_",
      printIPoint(myPoint));
  });
});