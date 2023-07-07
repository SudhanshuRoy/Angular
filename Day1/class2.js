"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Student_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, name, marks, address) {
        _Student_id.set(this, void 0);
        __classPrivateFieldSet(this, _Student_id, id, "f");
        this.name = name;
        this.marks = marks;
        this.address = address;
    }
    getMarks() {
        return this.marks;
    }
    static run() {
        return "Students are running";
    }
}
_Student_id = new WeakMap();
let student = new Student(1, "Sudhanshu", 78, { street: "chhapki", city: "muzaffarpur", state: "Bihar", pin: "844112" });
console.log(Student.run());
/*
 1.you can't non-static content in static area
2. can access static property only with class name
3. access private in side the class only
4.and can access protected inside the child class only

*/
class Teacher extends Student {
    getMarks() {
        return this.marks;
    }
    login() {
        return { name: "sudhanshu", age: 24, id: 2, email: "shudhanshukumarmuz@gmail.com" };
    }
}
let teacher = new Teacher(2, "new teacher", 45, { street: "chhapki", city: "muzaffarpur", state: "Bihar", pin: "844112" });
// console.log(teacher.marks); protected can be access only inside the class itself and its subclass
