// why do we even need TS ?

// let age = 20;

// age = "Twenty"

// console.log(age+10);
// it isnt throwing an error we proper ans as Twenty10, why, age has Number,String, it isnt giving any errors for us
// we need to debug all the code , where was the fault
// when we write , age = "Twenty" , in the same time show me an error that it already has Number as a value and cant update as a String                                                              
// this is what TS solves , helps us to define a type, 
// whatever we write we need define the type as well, It is strict to datatype
// as we know Browser only understands JS, TS gets converted to JS by TS's compiler itself
// TS mainly helped to improve DX experience,  if there is an error it shows right away


// How to start with TS
// npm install typescript ts-node --save-dev
// npx ts-node first.ts
// node first.ts
// npx tsc first.ts           -- this creates a js file as well as the browser and Node JS can only understand JS only

// npx tsc --init         - for ts.config  
// node first.ts       -- to see answer
// npx tsc --watch         -- to directly convert in js file as well


// // Number
// let a:Number = 10;
// let b:number = 20;

// // String
// let name:string = "Rohith"

// // Boolean
// let isAllowed:boolean  = true

// //bigint

// let num:bigint = 8736476348723678n 

// let abc:null = null

// let ocd:undefined = undefined


//  Lecture 2
// Type inference in TS refers to the ability of the TS compiler to automatically determines the type of a variable based on the value assigned to it, ex – 
// This means that even if we don’t explicitly specify a type, TS can  infer the most appropriate type and apply it.

// I don’t need to always write the type like this, let a:number = 10
// B = 10
// B = "Rohit", it throws an error, since it is initialized as number, the compiler understands it's value will be an number.
// -----------
// let money;

// money = 100;
// money = "Rupees"
// console.log(money); --- Rupees
// this is different, here I initiate a variable as money and didn't declare it as any value explicitly, after I gave it to 100, ok, it took number type that's what I thought, but when I hover it it showed me type:any, it means it can be any type doesn’t necessarily a number type, so I gave  a string  value, It worked didn’t throw any error, printed the last declared value, it printed, money
// worked like JS here ☹

// Now if you initiate with the type it'll throw an error let 
// money:number 

// money = 100;

// money = "Rupees"
// console.log(money); money, it prints Rupees, it executes, In TS also works like JS in execution the good part is it shows what is wrong while writing itself.

// This any is too dangerous for us, as it can take any data type as value, throws NO error

// let money:any 
// money = 100;
// money = "Rupees"

// for unknown if we try to run any operation like this, it throws an error

// let value:unknown
// value = 55;
// value = "Rookie"
// console.log(value.toUpperCase() );

// NON Primitive Types
// Arrays , Objects, Functions
// Array, we need to declare both type and [] array symbol

// let arr:number[] = [1,2,3,4,5,6]

// but in array sometimes we've both the values right like string and numbers , Boolean together in an array

// first : open the bracket () , and union symbol : (    |   |    ) 
// let are:(string | number | boolean )[] = [10,20,"Ten", "Twenty",false] 
// are.push(true)
// console.log(are);[ 10, 20, 'Ten', 'Twenty', false, true ]

// this | symbol is known as UNION, can array number Boolean come together 

// Tuple
// let tuple:[string,number,number,string,boolean] = ["Ram" , 
// 10,20,"Otp",false]
// Tuple is what are the values you write that many data type you need write beforehand itself, above I had written 5 data types and only five values can exist, first value has to be string, second value has to be number,in second value, if I write "nagar" a string instead of any number, it throws an error

//  this applies for all. This is what we call tuple,  
// -----------------------


// Compile time
// It refers to the phase when the source code is translated into machine code or an immediate format eg- bytecode. This is done by a compiler.
// In C++
// Code is compiled first, turned into Machine Code --→ Gives it to CPU ,it is Run time
// In Java
// Code ---→ compile -→ Bytecode -→ CPU
// Errors detected at this phase are called compile – time errors.
// Examples of compile-time errors include:
// Syntax errors (eg. Missing semicolons)
// Type Mismatches (rg, assigning a string to a variable which declared as a number in typescript ).
// Variable declarations without hesitation initialization (if required by the language)
// JS is a Interpreter Language
// It executes line by line
// In JS, lets say there is a 10 lines of code, after the first lien itself it executes, it wont turn it as a Machine code, that’s why isn't giving you an error when you assign number variable to string
// That’s why JS is slow compared to C++, in C++ all the code gets compiled at once and given to CPU
// Here in JS one by one by one line given to CPU, 1000 lines, 1000 times to CPU, now in C++ 1000 lines of code, given once to CPU and gets executed
// In JS, we could define the type while writing that’s why it wouldn't give us errors, where as in C++ we need write like a int = 10
// Runtime
// It refers to the phase when the program is executed after it has been compiled (or interpreted).
// Errors detected during this phase are called runtime errors.
// Examples of runtime errors include:
// Dividing by zero.
// Accessing undefined variables or null references.
// Running out of memory.
// Examples of Runtime Activities:
// Executing code instructions.
// Handling user inputs.
// Interacting with APIs or databases
// IN 2008, JS bring V8 engine, after that it boomed , it converted from interpreted from JIT, Just in Time language
// V8 takes the JS code and converts it into machine code as JIT
// And gives it to CPU
// It looks a the code, get it one by one, and gives it to the cpu
// C and C++ is Platform dependent language
// Java JS is Platform independent language
// What about TS, Typescript , is it compiler or interpreter language?
// Am not running TS file anywhere, we 're just converting into JS and js runs it, People call it transpiler, we're converting it into one lang to another language, we aren’t converting into machine code or binary code .
// Object
// inline
// let obj1: { name :string, age : number, gender:string } = {
// name : "rohith",
// age: 20,
// gender : "female"
// }
// let person: {name : string, age:number, shirt: string }
// person = {
// name : "Rohith",
// age : 25,
// shirt : "Blue color"
// }
// //just like this, we defined waht type its gonna be and then declared the value to it
// let n:number;
// n=1
// <!-- Using Type Alises -->
// type customer = {
// name :string,
// age : number,
// city :string
// }
// let c1 :customer = {
// name : "Rohith",
// age : 20,
// city: "delhi",
// }
// //now in c1 what types we declared? customer type, waht is customer type, which has name age city , this way it looks clean
// interface Admin{
// name:string,
// age : number,
// city:string
// }
// interface Admin{
// id:number
// }
// let customer:Admin = {
// name : "Rohith",
// age : 20,
// city: "delhi",
// id:450
// }
// What are all things we mentioned in the Admin and when we use that Admin interface, we need to use all of them like name age city id.
// whenever we write lets use interface not type , why?as we can write interface once again as well like i did with id, and those interfaces get merged ,
// 1. Declaration Merging, interfaces can be reopened and extended automatically.
// Useful in: library typings, extending global objects, framework ecosystems
// Use:
// •
// interface → for object structures/classes
// •
// type → for unions, mapped types, function compositions, advanced types
// Interface is for Objects
// Type is for primitive







// 3 TypeScript Lecture 3

// Remember when we said, What are all things we mentioned in the Admin and when we use that Admin interface, we need to use all of them like name age city id.
// What if the person we enter doesn't have Aadhar card ?

// But we have in our interface like this
// interface Person {
// name : string,
// age: number,
// device : string
// aadhar? : number

// }

// let obj:Person = {
// name : "Oppo",
// age : 55,
// device: "Mobile"
// }

// We can just write aadhar in ? question mark and not mention in the object we make, it'll work alright, wont throw error

// Interface with extend key word

// interface Human{
// name:string,
// age:number
// }

// interface Professor extends Human{
// salary:number,
// id:number
// }

// interface BankEmployee extends Human{

// position:string,
// branch:string

// }


// let user:Professor = {
 
// name:"Rohan",
// age:20,
// salary : 20000,
// id:54
 
// }
// console.log(user);
// { name: 'Rohan', age: 20, salary: 20000, id: 54 }

// let users:BankEmployee = {

// name:"Rohith",
// age:22,
// position : "Manager",
// branch : "Dwaraka"

// }

// console.log(users);

// { name: 'Rohith', age: 22, position: 'Manager', branch: 'Dwaraka' }

// Here Professor and bankEmployee both share name and age, so instead of writing for each we made a single inderence as Human and used extend key word
// With EXTEND we made it reusable 

// Utility types of interface 
// interface Customer {
// name : string
// branch : string
// balance :number
// }

// let obj5 : Partial <Customer> = {
// name : "Rohith",
// branch : "Anna Nagar",
// }

// Partial means we don't need to write all things, all becomes optional
//  won't throw error

// let obj5 : Required <Customer> = {

// name : "Rohith",
// branch : "Anna Nagar",
// balance : 100
// }
// Required means we need write all the columns

// let obj5 : Readonly <Customer> = {
// name : "Rohith",
// branch : "Anna Nagar",
// balance : 100
// }
// obj5.name = "sljlfn
// Readonly means once we declared we cant change the values, if we try to change it throws an error






