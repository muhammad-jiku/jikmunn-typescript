"use strict";
// defined variables
let fullName = "Munira Akhter Jannat Mili";
let age = 22;
console.log(fullName, age);
// It will return errors becaause previoust 'fullName' variables were assign as 'string' so it will not receive any other data types except 'string'
// fullName = 34
fullName = "Jikmunn";
// It will return errors becaause previoust 'age' variables were assign as 'number' so it will not receive any other data types except 'number'
// age = "22";
age = 23;
console.log(fullName, age);
// undefined variables
let xD;
// It will return last declared data type's value because it's intial data-type and value is undefined
console.log(xD);
xD = "xD";
xD = 364 + 164;
console.log(xD);
//  function when data type is not defined its accepts any data types
function lol(a, b) {
    return a + b;
}
console.log(lol("Jiku", 364));
//  function when data type defined its accepts only defined data types
function add(a, b) {
    return a + b;
}
console.log(add(164, 364));
// array when its values data-type is not defined
const arrs = ["35", "25", "14"];
arrs.push(10);
console.log(arrs);
// array when its values data-type is not defined
const numbers = [];
numbers.push(10, 25, 36, 5);
console.log(numbers);
// array when its values are multiple data-types it will accepts only values data-types
const multiples = [10, 25, true, "go"];
multiples.push(false, "xD", 36, 5, {
    name: "lol",
});
console.log(multiples);
// object case
const person = {
    name: "Muhammad Azizul Hoque Jiku",
    age: 23,
    height: `5'7"`,
};
console.log(person);
// it will not accept that data type
person.age = "23";
console.log(person);
// it will accept that data type
person.age = 24;
console.log(person);
