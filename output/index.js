"use strict";
// function types added
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
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user === null || user === void 0 ? void 0 : user.name} and age is ${user === null || user === void 0 ? void 0 : user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${(user === null || user === void 0 ? void 0 : user.age) > 50 ? "Sir" : "Mr."} ${user === null || user === void 0 ? void 0 : user.name}`);
};
userDetails(193242, { name: "jiku", age: 23 });
sayHello({ name: "jikum", age: 53 });
sayHello({ name: "jikmunn", age: 23 });
// type aliases closed
// functions signature added
let fSig; //void means it doesnot return anything
fSig = (x, y) => {
    console.log(x, y);
};
fSig("call", 911);
let fSigg; //'number' means it does return only 'number' data type
fSigg = (x, y) => {
    const z = x + y;
    console.log(z);
    return z;
};
fSigg(199, 911 + 1);
let calculation; //'number' means it does return only 'number' data type
calculation = (x, y, z) => {
    if (z === "add") {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log(calculation(199, 911 + 1, "add"));
console.log(calculation(199, 911 + 1, "minus"));
// when function takes object as parameters
let userInfo;
userInfo = (_id, detail) => {
    console.log(detail === null || detail === void 0 ? void 0 : detail.name, detail === null || detail === void 0 ? void 0 : detail.age, _id);
};
let userInfoo;
userInfoo = (_id, detail) => {
    return (detail === null || detail === void 0 ? void 0 : detail.age) - _id;
};
userInfo("p-193242", { name: "Munira Jannat", age: 23 });
console.log(userInfoo(2019339024, { name: "Jiku", age: 24 }));
