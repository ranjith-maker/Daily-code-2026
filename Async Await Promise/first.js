
function test1(){

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
      const sum = "First Promise Resolved";
      resolve(sum)
        
    }, 4000);
})
 return p1
}


function test2(){
const p2 = new Promise((resolve, reject)=>{

    setTimeout(() => {
           const sum = "Second Promise Resolved";
      resolve(sum)   

    }, 3000);
})
 return p2
}


async function greet() {
    
console.log("I welcome you all JS thinkers");
    
let [data1, data2] = await Promise.all([test1(), test2()])
console.log(data1);
console.log(data2);

}


greet()

// I welcome you all JS thinkers
// First Promise Resolved
// Second Promise Resolved

// Now both are independent function we got both in the same time 






// Async Await

// let p1 = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         let fine = false;

//         if (fine) {
//             resolve("Hello everyone")
//         } else {
//             reject("Not so fine")
//         }
//     }, 2000);

// })

// async function greet() {

//     try {
//         let data = await p1;
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// greet()
// Not so fine



// let p1 = new Promise((res,rej)=>{

// setTimeout(() => {
    
// const fine = "Am first promise"
// res(fine)

// }, 3000);
// })


// let p2 = new Promise((res, rej)=>{

// setTimeout(() => {
//     let fin = "Am Second promise"
//     res(fin)
// }, 2000);

// })



// async function first() {
    
// let data2 = await p2;
// console.log(data2);

// let data1 = await p1;
// console.log(data1);

// }

// first()
// Am Second promise
// Am first promise
// so it is all about how you have written the console inside the async await





// Am first promise
// Am Second promise



// even when you write 2 async functions so that it takes another 2 mins to solve, NOPE, definetly not,
// why,as soon as the JS starts to run, it goes from the top to bottom, when it sees promises, it starts the timer and executes it as the time is over, it doesnt care for first written promise or second written promise or 2 async await function to resolve, which async function is first called
    

// as soon as you create  an async function, creat ea variable to await the promise




// function test1() {
//     console.log("hello in test1");
    
// return new Promise((res, rej)=>{

// setTimeout(() => {
//     let fine = "Am first Promise"
//     res(fine)
// }, 2000);

// })}


// function test2() {
//     console.log("hello in test 2");
    
// return new Promise((res, rej)=>{
//   setTimeout(() => {
//   let fin = "Am second Promise"
//   res(fin)
//   }, 2000);
    
// })}


// async function greet() {
    
// console.log("hello in asyn fun");


// let data1 = await test1()
// console.log(data1);

// let data2 = await test2()
// console.log(data2);

// }
// console.log("hello before calling fun");
// greet()
// console.log("hello after calling fun");




// hello before calling fun
// hello in asyn fun
// hello in test1
// hello after calling fun
// Am first Promise
// hello in test 2
// Am second Promise

// Asusual JS starts to compile from top to bottom, it saw 2 fucntions, (since func contents will be executes only when it is called, JS neglects for now ) and normal consolelog so printed this "hello before calling fun"
// and greet() is called, inside greet before await there is a normal consolelog so printed this "hello in asyn fun" 
// and saw await test1() went to that promise, before settimeout there was a normal consolelog so printed "hello in test1" next line was settout, so gave to the brower to handle and wait, 
// came to main thread saw 1 consoellog , printed it "hello after calling fun" 
// now after 2 secs, printed Am first Promise, now only goes down to awaiting test2()test has one normal consolelog before settout so printed "hello in test 2 and now waits another 5sec and printed  
// Am second Promise

// after waiting(timer), the WeB API sends the settout (cb)function to callback queue and if it resolves, those Promises are put into the Microtask queue and now eventloop keeps checks the call stack once it is empty , event loop puts this promises from micro task to call stack , now am right ? 

// console.log("1");

// setTimeout(() => {
//     console.log("2 - setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3 - Promise");
// });

// console.log("4");

// Output:
// 1
// 4
// 3 - Promise  ← Microtask runs first
// 2 - setTimeout  ← Then callback queue



// Am first Promise
// Am second Promise




// async function meet(){

// }
// meet().then((val=>console.log(val)))
// Oops oncepts





// Promise {<fulfilled>: 'Oops oncepts'}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// "Oops oncepts"
// Async function always returns a promise, even if you write a normal striung inside async function, it'll say Promise fulfilled, you can see this in browser console




// class Book{

// constructor(naam,year,pgs){

// this.name = naam;
// this.year = year;
// this.pages = pgs;

// }

// boomark(){
//   console.log("Book mark the important pages");
  
// }}

// let user1 = new Book("CS", 2022, 400)
// let user2 = new Book("Science", 2000, 100)
// console.log(user1);
// console.log(user2);


// class Human{

//   constructor(naam,city,age){
// this.name = naam;
// this.place = city;
// this.age = age;
  
// }
// eat(){
//   console.log("You can eat");
  
// }}

// let h1 = new Human("Ayush", "Delhi", 55)


// class Human{

//   constructor(naam,city,age){
// this.name = naam;
// this.place = city;
// this.age = age;
  
// }}

// Human.prototype.eat = function () {
//   console.log("you can eat");
  
// } 

// let h1 = new Human("Ayush", "Delhi", 55)

// Making it inside class is new way and making it outside class is old way, Using new way is preferrable as ES6 
// and Yes both are shared memory, because both methods live on the prototype, not inside each object.




// console.log(this);

// function fun() {
//   console.log(this);
  
// }

// fun()


// let obj = {

// name : "rohith",
// age : 22,
// fun :  function () {
//   console.log(this);
// }}

// console.log(obj.fun());
// let obj ={

// name:"OPPO",
// age : 22,
// fun : function (){
//   function abc(){
//     console.log(this);
//  }}
// }



// let obj = {

//   name : "OPPO",
//   age : 22,
//   fun : function(){
//     let arrow = ()=>{
//       console.log(this);
      
//     } 
//     arrow()
//   }}

// obj.fun()


// console.log(globalThis);




// let user1 = {
//   name : "Rohith",
//   age : 20
// }

// let user2 = {
//   name : "Mohith",
//   age : 55
// }

// function greet() {
//   console.log(`hello ${this.name}`);
  
// }


// class incAge {
//   constructor(val, naam) {

//     this.age += val;
//     console.log(this.age);

//     this.name = naam;
//     console.log(this.name);


//   }
// }

// let bin = incAge.bind(user1,10,"Rohan")

// bin()









































