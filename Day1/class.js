"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_empId;
class Employee {
    constructor(empId, name, address) {
        _Employee_empId.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_empId, empId, "f");
        this.name = name;
        this.address = address;
    }
    //   getNameWithAddress():string{
    //     return "name : "+this.name+" "+" address : "+this.address;
    //   }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_empId = new WeakMap();
/*
let obj=new Employee();

obj.empId=1;
obj.name="john";
obj.address="Muzaffarpur"

console.log(obj); */
let emp = new Employee(2, "Sudhanshu", "Bihar");
console.log(emp.getNameWithAddress());
class Manager extends Employee {
    constructor(empId, name, address) {
        super(empId, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is manager at ${this.address}`;
    }
}
let manager = new Manager(4, "Rahul", "darbhanga");
console.log(manager.getNameWithAddress());
