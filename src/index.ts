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

// enum added
enum RType {
  SUCCESS,
  FAILED,
  UNAUTHORIZED,
  FORBIDDEN,
}
interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: RType.SUCCESS,
  data: {
    success: true,
  },
};

const response2: APIResponse<object> = {
  status: 401,
  type: RType.UNAUTHORIZED,
  //   data: {
  //     success: false,
  //   },
  data: "ACCESS DENIED",
};

const response3: APIResponse<object> = {
  status: 404,
  type: RType.FAILED,
  //   data: {
  //     success: false,
  //   },
  data: "Failed to connect",
};

const response4: APIResponse<object> = {
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

// tuple
const arr: [boolean, string, object] = [false, "xD", { name: "dim" }];

console.log(arr);

arr[1] = 3;
console.log(arr);
// array.push() method is also aplicable in tuple but should not be used if not necessary
arr.push(1);
console.log(arr);
