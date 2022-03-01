import { mul1 } from "../lib/math1";
import assert from 'assert';
import { mul2 } from '../lib/math2';
import pow from "../lib/math2";
import fs from 'fs';

describe("Test import of self module", () => {

  it("Must exec imported mul1 from `export {...}`", () => {
    let res = mul1(2, 3);
    assert.equal(6, res);
  });

  it("Must exec imported mul2 from `export function`", () => {
    let res = mul2(2, 4);
    assert.equal(8, res);
  });

  it("Must exec imported pow from `export default ()=>{}`", () => {
    assert.equal(16, pow(4));
  });

  it("Must use Node.js internal module `fs`", () => {
    // And check autoimport in VSCode
    let res = fs.readFileSync("package.json");
    console.log(res.toString());
    assert.equal("object", typeof res);
    assert(res instanceof Buffer, "Not a Buffer");
    assert(res.length > 0);
  });
});