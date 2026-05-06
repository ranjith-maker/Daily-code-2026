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





