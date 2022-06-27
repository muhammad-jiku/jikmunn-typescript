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
// interface in generics
// enum added
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILED"] = 1] = "FAILED";
    RType[RType["UNAUTHORIZED"] = 2] = "UNAUTHORIZED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.SUCCESS,
    data: {
        success: true,
    },
};
const response2 = {
    status: 401,
    type: RType.UNAUTHORIZED,
    //   data: {
    //     success: false,
    //   },
    data: "ACCESS DENIED",
};
const response3 = {
    status: 404,
    type: RType.FAILED,
    //   data: {
    //     success: false,
    //   },
    data: "Failed to connect",
};
const response4 = {
    status: 403,
    type: RType.FORBIDDEN,
    //   data: {
    //     success: false,
    //   },
    data: "Forbidden connection",
};
console.log(response1);
console.log(response2);
console.log(response3);
console.log(response4);
