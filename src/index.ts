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
