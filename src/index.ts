// generics
const addID = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  // or const addID = <T extends object>(obj: T) => {
  let _id = Math.floor(Math.random() * 100);
  return { ...obj, _id };
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

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: "awake",
  data: {
    success: true,
  },
};

const response2: APIResponse<object> = {
  status: 404,
  type: "sleep",
  //   data: {
  //     success: false,
  //   },
  data: "false",
};

console.log(response1);
console.log(response2);
