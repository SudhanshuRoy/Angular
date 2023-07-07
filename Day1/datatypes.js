"use strict";
let fname = "Sudhanshu";
// fname=500;
fname = fname.toUpperCase();
console.log(fname);
let age;
// console.log(age);  error this value is being used before being assigned 
age = 10;
age = 10.7;
let dob = " 1998";
let result = parseInt(dob);
// ways to defining arrays in typescript
let empList;
empList = ["sudhanshu", "rajesh", "raushan", "vikesh"];
let numList;
numList = [1, 2, 3, 4];
let sortedList = numList.filter((num) => num % 2 == 0);
let sum = numList.reduce((acc, num) => acc + num);
let empName = empList.find((name) => name === "sudhanshu");
console.log("even num in list of number : ", sortedList);
console.log("sum : ", sum);
console.log("emp name : " + empName);
// enums 
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
let c = Color.blue;
console.log("color : ", c);
let d = 0 /* Day.Sunday */;
//tuple datatypes
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
// any datatypes
let departmant;
departmant = "Engineering";
departmant = 10;
