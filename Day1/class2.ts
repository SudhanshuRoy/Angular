
import {Login,User} from './interface';

interface Address{
    street:string;
    city:string;
    state:string;
    pin:string;
}

class Student{
    #id:number;
    name:string;
   protected marks:number;
   /*
   address:{
    street:string;
    city:string;
    state:string;
    pint:string;
   }
   */
  address:Address;
    constructor(id:number,name:string,marks:number,address:Address){
        this.#id=id;
        this.name=name;
        this.marks=marks;
        this.address=address;
    }

     getMarks():number{
        return this.marks;
    }

    static run():string{
return "Students are running";
    }
}

let student=new Student(1,"Sudhanshu",78,{street:"chhapki",city:"muzaffarpur",state:"Bihar",pin:"844112"});

console.log(Student.run());
/*
 1.you can't non-static content in static area 
2. can access static property only with class name 
3. access private in side the class only 
4.and can access protected inside the child class only

*/


class Teacher extends Student implements Login {

getMarks(): number {
    return this.marks;
}

login(): User {
    return {name:"sudhanshu",age:24,id:2,email:"shudhanshukumarmuz@gmail.com"};
}

}

let teacher=new Teacher(2,"new teacher",45,{street:"chhapki",city:"muzaffarpur",state:"Bihar",pin:"844112"});
// console.log(teacher.marks); protected can be access only inside the class itself and its subclass