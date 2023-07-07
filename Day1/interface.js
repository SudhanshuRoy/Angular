"use strict";
// we use interface as custom data type or for complex datatype intead of obj in js
// you can't create obj of interface using new keyword
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "sudhanshu", age: 24, id: 2, email: "shudhanshukumarmuz@gmail.com" };
// destructuring of above object instead variable name directly write properties in curlybrasis
let { name: useName, age, id, email } = { name: "sudhanshu", age: 24, id: 2, email: "shudhanshukumarmuz@gmail.com" };
console.log("user name : ", useName);
let employee = { name: "Ram", age: 45, id: 5, email: "ram@gmail.com", salary: 5000 };
// Array destructuring use array syntax inteade variable name
let users = [{ name: "sudhanshu", age: 24, id: 2, email: "shudhanshukumarmuz@gmail.com" },
    { name: "raushan", age: 28, id: 4, email: "raushan@gmail.com" },
    { name: "karan", age: 34, id: 6, email: "karan@gmail.com" }
];
let [user1, user2] = [{ name: "sudhanshu", age: 24, id: 2, email: "shudhanshukumarmuz@gmail.com" },
    { name: "raushan", age: 28, id: 4, email: "raushan@gmail.com" },
    { name: "karan", age: 34, id: 6, email: "karan@gmail.com" }];
console.log(user1);
