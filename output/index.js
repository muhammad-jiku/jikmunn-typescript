"use strict";
let myFunc;
myFunc = () => {
    console.log("first");
};
myFunc();
// it's not function that's why its delivering errors
myFunc = 5;
console.log(myFunc);
// declaring option value
const myFuncc = (a, b, c) => {
    // '?:' means optional
    console.log(`Total calculation is ${a + b}`);
};
myFuncc(364, 164);
// it will show error
myFuncc(364, "164");
// declaring default value
const myFunnc = (a, b, c = "JIKUM") => {
    console.log(c);
    console.log(`Total calculation is ${a + b}`);
};
myFunnc(364, 164);
// declaring function data type
const add = (a, b, c = "JIKUM") => {
    console.log(c);
    const d = a + b;
    console.log(d);
    return d;
};
add(364, 164);
