class Employee {
  #empId: number;
  protected name: string;
   address: string;

  constructor(empId: number, name: string, address: string) {

    this.#empId = empId;
    this.name = name;
    this.address = address;
  }
//   getNameWithAddress():string{
//     return "name : "+this.name+" "+" address : "+this.address;
//   }

getNameWithAddress():string{
    return `${this.name} stays at ${this.address}`
}

}
/*
let obj=new Employee();

obj.empId=1;
obj.name="john";
obj.address="Muzaffarpur"

console.log(obj); */

let emp=new Employee(2,"Sudhanshu","Bihar");

console.log(emp.getNameWithAddress());

class Manager extends Employee{

    constructor(empId: number, name: string, address: string) {

        super(empId,name,address);
      }

      getNameWithAddress():string{
        return `${this.name} is manager at ${this.address}`
    }

}

let manager=new Manager(4,"Rahul","darbhanga");

console.log(manager.getNameWithAddress());

