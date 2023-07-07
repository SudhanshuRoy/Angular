let fname="Sudhanshu";
// fname=500;

fname=fname.toUpperCase();

console.log(fname);

let age:Number;

 // console.log(age);  error this value is being used before being assigned 

age=10;
age=10.7;

let dob=" 1998";

let result=parseInt(dob);

// ways to defining arrays in typescript

let empList:String[];

empList=["sudhanshu","rajesh","raushan","vikesh"];

let numList:Array<number>;

numList= [1, 2, 3, 4];

let sortedList=numList.filter((num)=>num%2==0);

let sum=numList.reduce((acc,num)=>acc+num);

let empName=empList.find((name)=>name==="sudhanshu");

console.log("even num in list of number : ",sortedList)

console.log("sum : ",sum);

console.log("emp name : "+empName);


// enums 

enum Color{
    red,
    blue,
    green
}

let c:Color=Color.blue;

console.log("color : ",c);

const enum Day{
    Sunday,
    Monday,
    Tuesday
}

let d:Day=Day.Sunday;


//tuple datatypes

let swapNumbs:[number,number];

function swapNumbers(num1:number,num2:number):[number,number]{
    return [num1,num2];
}

swapNumbs=swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];

// any datatypes

let departmant:any;
departmant="Engineering";
departmant=10;