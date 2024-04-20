import { TUser } from '../Types/user.types';

let x = 12;

x = 'string';

// Type description after:
let test: string = 'test';
let num: number = 1;

// Error: Type '12' is not assignable to type 'string'.
test = 12;

let boolean: boolean = true;

type User = {
  name: string;
  age: number;
  isBanned: boolean;
};

const user = {
  name: 'John',
  age: 25,
  isBanned: false,
};

type TTest1 = string | null | number;
const test1: string | null | number = 12;

function test2(num1: number, num2: number) {
  console.log(num1 + num2);
}
// Will not work because of the type
// test2('ads', 'asd);

// Will work
test2(1, 2);

const showUser = (user: TUser) => {
  Object.keys(user).forEach((key) => {
    console.log(`${key}: ${user[key]}`);
  });
};
showUser({ name: 'John', age: 25, isBanned: false });
