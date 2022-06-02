
import { IObject } from './interfaces';
// Types

// Numbers

let nr: number = 2;

nr = 3;

const number: number = 3;

number = 'String';

// String

let firstName: string = 'Denis';
const lastName: number = 'John';

firstName = true;
lastName = true;

// Boolean

const isOk: boolean = false;
let isError: boolean = true;

isOk = 1;
isError = 'Denis';

// Any

let anyVar: any = 2;

anyVar = 'Denis';

// Union types

let unionTypes: number | string | boolean;

unionTypes = 'Denis';

unionTypes = 1;

unionTypes = true;

type Bank = number | string | boolean;

let bank: Bank;

bank = 'String';

bank = true;

bank = 2;


type Style = 'bold' | 'italic';

let style: Style;

style = 'bold';

style = 'Times New Roman';

// Typescript types vs Javascript types

function sum (a: any , b: any) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Incorrect types");
    return;
  }
  return a + b;
}


console.log(sum('2', 3));

// Type assignment and type inference

function sayFullName (firstName: string, lastName: string, showName: boolean) {
  const fullName = firstName + lastName;
  if (showName) {
    console.log(`The full name is ${fullName}`);
  } else {
    console.log(showName);
  }
}

let name1 = 'Denis';
let name2 = 'John';
let showName = false;

sayFullName(name1, name2, showName);
// Objects types

const obj: object = {
  firstName: 'John',
  lastName: 'Denis',
  phone: '12312312',
  age: 21,
  employee: true
}

const obj2: IObject = {
  firstName: 'John',
  lastName: 'Denis',
  phone: '12312312',
  age: 21,
}

const obj3: IObject = {
  firstName: 'John',
  lastName: 'Denis',
  phone: '12312312',
  age: 21,
}

const obj4: IObject = {
  firstName: 'John',
  lastName: 'Denis',
  phone: '12312312',
  age: 21,
}

console.log(obj4.phone)

// Array types

let array: string[] = ['Denis'];
let array2: number[] = [2];
let array3: any[] = [];
array.push('John');
array2.push(2);
array3.push(false);

// Tuples

const person: {
  firstName: string,
  lastName: string,
  role: [number, string]
} = {
  firstName: 'Denis',
  lastName: 'Lalo',
  role: [2, 'Denis']
}

person.role.push(4);

// Enum

const ADMIN = 'admin';
const USER = 'user';

const user = {
  name: 'Denis',
  role: ADMIN
}

enum Roles {
  ADMIN = 'admin',
  USER = 'user'
}

const user2 = {
  name: 'Denis',
  role: Roles.ADMIN
}