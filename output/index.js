"use strict";
// generics
const addID = (obj) => {
    // or const addID = <T extends object>(obj: T) => {
    let _id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { _id });
};
let user = addID({
    name: "jiku",
    age: 23,
    country: "Bangladesh",
});
let user1 = addID("ki");
console.log(user);
console.log(user1);
const response1 = {
    status: 200,
    type: "awake",
    data: {
        success: true,
    },
};
const response2 = {
    status: 404,
    type: "sleep",
    //   data: {
    //     success: false,
    //   },
    data: "false",
};
console.log(response1);
console.log(response2);
