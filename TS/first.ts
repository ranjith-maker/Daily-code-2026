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

// We can write Array of Objects with interface as well
// interface People{ name :string , age:number, city:string }

// let arr:People[] = [
// {name:"Rohan", age: 10 , city: "delhi"  },
// {name : "Mohan" , age : 20 , city:"mumbai" } 
// ]

// Function in TS
// function sum(a:number):number {
// return a+5
// }
// console.log(sum(10));

// what we return that type should also be defined after function bracket (a: type ):type
// define the type of parameter and returning type as well one before bracket  :type) after ):type

// function meet(name:string,  score:number  ):void {
//     console.log(name,score);
// }
// meet("Anand",50);

// if you don’t return anything you can use void as a return type 


// function meet(names:string, marks:number):string{
//    return `${names} scored ${marks} for 250 `
// }
// console.log(meet("Ram",200 )); //Ram scored 200 for 250 

// Default Parameter
// function good(names:string = "Raj"):string{
// return `My name is ${names}`
// }
// console.log(good()); My name is Raj
	
// function good(names:string = "Raj"): string {
// return `My name is ${names}`
// }
// console.log(good("Rio")); My name is Rio



// Optional Parameter
// function gate(name?:string) {    
// console.log(name || "Mohith");
// }
// gate()
// gate("Rohan")
// Mohith
// Rohan
// gate()
// Since name is optional we called empty function but we handled that as well inside fn, either name or Mohith so empty args gets Mohith


// Arrow Function
// const sum = (a:number , b:number):number=>{
//     return a+b
// }
// console.log(sum(5,10));  15

// Callback Function 

// function place(amount:number, 
// callback:(name:string)=>void):number {

//     callback("Rohan")
//     return amount + 10
// }
// console.log(
// place(20, (name: string ) : void =>{
//     console.log(name);
    
// }));

// callback:(name:string)=>void , why here name:string is callback is a function, so we opened () i taccespts a args that is name that is strinkg so name:string , just amount:number
//  cb returns nothing so void and place returns a number so :number
//  (name: string ) : void =>{
//     console.log(name);
   
 
// while calling the ans Function just we need to see normal JS this is how we write and here we used Type and since it returns anything so void that it


// function youtube(channel:string , subscribers:( followers :number)=>void):string {

// subscribers(50000)
// return channel
// }

// let result =  youtube( "Mr.Beast", (followers : number ):void  =>{
//     console.log(followers);
// })
// console.log(result);

// 50000
// Mr.Beast


// followers ---> parameter
// number ---> parameters type 
// void , returns nothing

// For callback the answer comes inside itself, for first param the ans comes in when we call
// You can also make it look clean like custom interfaces for Object, you can use type for Callback 

// type count  = (followers: number)=>void

// function youtube(channel:string , subscribers: count ):string {

// subscribers(50000)
// return channel

// }

// let result =  youtube( "Mr.Beast", (followers : number ):void  =>{
//     console.log(followers);
// })

// console.log(result);

//  Rest Parameter

// function sum(...arr:number[]) {

//     return(
// arr.reduce((acc,val)=> acc+ val ,0) )
// }

// let adds = sum(10,50,36,4)
// console.log(adds); 100
// ---------------------------------------
// Class in JS 

// class Person{

// constructor(naam, aga, citi ){

// this.naam  = naam;
// this.aga = aga,
// this.citi = citi

// }}

// let obj1 = new Person("Rohith" , 22, "Delhi")
// let obj2 = new Person(12 , "Rohith", false)

// console.log(obj1);
// console.log(obj2);
// Person { naam: 'Rohith', aga: 22, citi: 'Delhi' }
// Person { naam: 12, aga: 'Rohith', citi: false }

// This is the problem with JS, in obj1 is right, in obj2 I changed the values yet we gotta answers no warning, yes, obviously JS doesn't know and it wasn't designed to handle that.

// Let's change this with TS
// class Person {

// name:string
// age:number
// city:string

// constructor( name:string, age:number, city:string   ){

//     this.name = name
//     this.age = age
//     this.city = city
// }

// meet():void{
//     console.log( `My name is ${this.name} , and age is ${this.age}, am from ${this.city} ` );
    
// }}

// let user1 = new Person("Rohan" , 25, "Delhi" )

// console.log(user1);
// user1.meet()

// Person { name: 'Rohan', age: 25, city: 'Delhi' }
// My name is Rohan , and age is 25, am from Delhi 



// Important Concept: Hot Code
// “Hot code” means:
// •	code executed many times
// Example:
// •	loops
// •	frequently called functions
// •	event handlers
// Only hot code gets heavily optimized.

// One More Interesting Thing: Deoptimization
// If assumptions break, the engine may discard optimized code.
// Example:
// function add(a, b) {
//     return a + b
// }

// add(10, 20)       // numbers
// add("Hi", "JS")   // strings
// The engine expected numbers.
// Now behavior changed.
// So it may deoptimize and recompile.

// Short Definition
// JIT compilation is the process where a JavaScript engine compiles code into optimized machine code during runtime to improve performance.

// but JS wont compile the code like C++ right ? then why JIT compiles it ?
// Correct — JavaScript is different from C++.
// C++ is ahead-of-time compiled (AOT), while JavaScript is just-in-time compiled (JIT).
// ________________________________________
// C++ Compilation
// In C++:
// int a = 10;
// int b = 20;
// cout << a + b;
// Before running:
// 1.	Entire code is compiled
// 2.	Machine code executable is generated
// 3.	OS runs the executable
// Flow:
// C++ Code
//    ↓
// Compiler
//    ↓
// Executable File (.exe)
//    ↓
// Run
// Compilation happens BEFORE execution.
// JavaScript Works Differently
// JavaScript was originally designed for browsers and needed:
// •	fast startup
// •	dynamic behavior
// •	no manual compilation step
// So JS engines execute code immediately.
// Example:
// console.log("Hello")
// Browser runs it instantly.

// Then Why Does JIT Compile?
// Because pure interpretation is slow.
// If the engine only interpreted:
// Read line → Execute
// Read line → Execute
// every single time, performance would be poor.
// So modern engines do this:
// Start interpreting quickly
//         ↓
// Detect frequently used code
//         ↓
// Compile only that code to machine code
//         ↓
// Run optimized version
// This gives:
// •	fast startup
// •	high performance
// Best of both worlds.
// Key Difference
// C++	JavaScript
// Fully compiled before running	Compiled during execution
// Produces executable file	No separate executable
// Static types	Dynamic types
// Optimization before runtime	Optimization during runtime
// ________________________________________
// Why JS Cannot Fully Compile Like C++
// Because JavaScript is highly dynamic.
// Example:
// let x = 10
// x = "hello"
// x = true
// Type changes at runtime.
// Even functions can change:
// function greet() {
//    console.log("Hi")
// }

// greet = 10
// This flexibility makes traditional compilation harder.
// So engines wait until runtime to understand actual behavior.
// ________________________________________
// Important Insight
// JavaScript engines DO generate machine code internally.
// You just don’t see:
// •	.exe files
// •	manual compile steps
// The compilation happens automatically inside the engine while the program runs.











