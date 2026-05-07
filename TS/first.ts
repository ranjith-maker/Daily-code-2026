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



