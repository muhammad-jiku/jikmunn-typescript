// function types added
let myFunc: Function;

myFunc = () => {
  console.log("first");
};
myFunc();

// it's not function that's why its delivering errors
myFunc = 5;
console.log(myFunc);

// declaring option value
const myFuncc = (a: number, b: number, c?: string) => {
  // '?:' means optional
  console.log(`Total calculation is ${a + b}`);
};
myFuncc(364, 164);
// it will show error
myFuncc(364, "164");

// declaring default value
const myFunnc = (a: number, b: number, c: string = "JIKUM") => {
  console.log(c);
  console.log(`Total calculation is ${a + b}`);
};
myFunnc(364, 164);

// declaring function data type
const add = (a: number, b: number, c: string = "JIKUM"): number => {
  console.log(c);
  const d = a + b;
  console.log(d);
  return d;
};
add(364, 164);

//  function type closed

// type aliases added

// type aliases
type stringOrName = string | number;
type userInfoType = { name: string; age: number };

const userDetails = (id: stringOrName, user: userInfoType) => {
  console.log(
    `User id is ${id}, name is ${user?.name} and age is ${user?.age}`
  );
};

const sayHello = (user: userInfoType) => {
  console.log(`Hello ${user?.age > 50 ? "Sir" : "Mr."} ${user?.name}`);
};

userDetails(193242, { name: "jiku", age: 23 });
sayHello({ name: "jikum", age: 53 });
sayHello({ name: "jikmunn", age: 23 });
// type aliases closed

// functions signature added
let fSig: (a: string, b: number) => void; //void means it doesnot return anything

fSig = (x: string, y: number) => {
  console.log(x, y);
};
fSig("call", 911);

let fSigg: (a: number, b: number) => number; //'number' means it does return only 'number' data type

fSigg = (x: number, y: number) => {
  const z = x + y;
  console.log(z);
  return z;
};
fSigg(199, 911 + 1);

let calculation: (a: number, b: number, c: string) => number; //'number' means it does return only 'number' data type

calculation = (x: number, y: number, z: string) => {
  if (z === "add") {
    return x + y;
  } else {
    return x - y;
  }
};
console.log(calculation(199, 911 + 1, "add"));
console.log(calculation(199, 911 + 1, "minus"));

// when function takes object as parameters
let userInfo: (
  id: number | string,
  details: {
    name: string;
    age: number;
  }
) => void;

userInfo = (
  _id: number | string,
  detail: {
    name: string;
    age: number;
  }
) => {
  console.log(detail?.name, detail?.age, _id);
};

let userInfoo: (
  id: number,
  details: {
    name: string;
    age: number;
  }
) => number;

userInfoo = (
  _id: number,
  detail: {
    name: string;
    age: number;
  }
) => {
  return detail?.age - _id;
};

userInfo("p-193242", { name: "Munira Jannat", age: 23 });
console.log(userInfoo(2019339024, { name: "Jiku", age: 24 }));
