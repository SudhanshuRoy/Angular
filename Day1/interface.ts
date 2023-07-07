// we use interface as custom data type or for complex datatype intead of obj in js
// you can't create obj of interface using new keyword

export interface User{
    name:string;
    age?:number; // because of this question marks it is optional here
    id:number;
    email:string;
}
 

let user:User={name:"sudhanshu",age:24,id:2,email:"shudhanshukumarmuz@gmail.com"};

// destructuring of above object instead variable name directly write properties in curlybrasis

let {name:useName,age,id,email}:User={name:"sudhanshu",age:24,id:2,email:"shudhanshukumarmuz@gmail.com"}

console.log("user name : ",useName);

interface Employees extends User{
    salary:number;
}

let employee:Employees={name:"Ram",age:45,id:5,email:"ram@gmail.com",salary:5000};

// if you want to use outside you have to use export keyword    

export interface Login{
    login():User;
}

// Array destructuring use array syntax inteade variable name

let users:User[]=[{name:"sudhanshu",age:24,id:2,email:"shudhanshukumarmuz@gmail.com"},
{name:"raushan",age:28,id:4,email:"raushan@gmail.com"},
{name:"karan",age:34,id:6,email:"karan@gmail.com"}
];

let [user1,user2]:User[]=[{name:"sudhanshu",age:24,id:2,email:"shudhanshukumarmuz@gmail.com"},
{name:"raushan",age:28,id:4,email:"raushan@gmail.com"},
{name:"karan",age:34,id:6,email:"karan@gmail.com"}];

console.log(user1);