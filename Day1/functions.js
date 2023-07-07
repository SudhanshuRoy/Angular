"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(5 + 8);
const sub = (num1, num2) => num1 - num2;
console.log(sub(18, 12));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(5, 6));
// optional parameter
function addWithOpt(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log("sum of 5 and 8 : ", addWithOpt(5, 8));
console.log("sum of 5, 8 and 9 : ", addWithOpt(5, 8, 9));
// required is pass then that will be used otherwise default value given will be used or know as required parameters
function subWithRequierd(num1, num2, num3 = 2) {
    return num1 - num2 - num3;
}
console.log("substract : ", 100 - 20 - 80);
// passing n numbers of parameters or known as rest parameters
function addAnyNumbers(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(addAnyNumbers(1, 2, ...numbers));
console.log(addAnyNumbers(1, 2, ...[1, 2, 3, 4]));
console.log(addAnyNumbers(1, 2, 1, 2, 3, 4));
// Generics
function getItems(items) {
    return new Array().concat(items);
}
let concatNumbs = getItems([1, 2, 3, 4, 5]);
// or  let concatNumbs=getItems<number>([1,2,3,4,5]);
let concatString = getItems(['a', 'b', 'c', 'c']);
