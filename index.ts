import { mul } from "./lib/math";
import fs from 'fs';

console.log("Starting HelloWorld!");

function useArgs(a: number, b: string, c?: boolean) {
    console.log(`Use args\n`
        + `\t ${a} * 2 = ${a * 2} \n` 
        + `\t ${b}.toupper= ${b.toUpperCase()}\n`
        + `\t bool: ${c || false}`);
}

useArgs(1, "Abc", true);
useArgs(7, "cBa");
//useArgs(0, "", 222);

console.log("\n-----------\n");

function useReturn(a?: string): string {
    return (typeof a == "string") ? 
        a.toUpperCase() :
        "__EMPTY__";
}

console.log("1: ", useReturn("abcd"));
console.log("2: ", useReturn(""));
console.log("3: ", useReturn());

console.log('\n-------------\n');

console.log("2 * 3 = ", mul(2, 3));

console.log("\n---------\n");

let res = fs.readFileSync("./package.json");
console.log("res: ", res.toString().length);