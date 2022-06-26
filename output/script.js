"use strict";
// variables
let a;
let b;
let c;
a = "5";
b = "364";
c = true;
console.log(a, b, c);
c = 1;
console.log(a, b, c);
c = "juk";
console.log(a, b, c);
// array
const arr = [];
arr.push("25", "ju", "0", 1);
console.log(arr);
const arrr = [];
arrr.push("25", "ju", "0", 1);
console.log(arrr);
// object
let obj;
obj = {
    fName: "Jiku",
    age: 23,
    badGuy: true,
};
console.log(obj);
obj = 364;
console.log(obj);
obj = [3, "hi", false, 0]; // array is one kind of object
console.log(obj);
let objj;
objj = {
    nam: "KUJI",
    age: 23,
    regular: true,
};
console.log(objj);
objj = {
    nam: "KI Chas",
    age: "23",
    regular: false,
};
console.log(objj);
objj = [3, "hi", false, 0]; // array is one kind of object but here it did not match 'objj' data types that's why it's gonna be error
console.log(objj);
