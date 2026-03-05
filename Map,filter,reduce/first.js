




// //MAP
// 🟢 EASY (Understand map / filter properly first)
// 🔹 Basic map() (Rendering Lists Pattern)
// 1.	Given ["apple", "banana", "mango"], return a new array with all values in uppercase.
// 2.	Convert [1,2,3,4] into [1,4,9,16].
// 3.	Given:
// 4.	const users = [
// 5.	  { id: 1, name: "John" },
// 6.	  { id: 2, name: "Jane" }
// 7.	]
// Return an array of only names.
// 8.	Add a new property isActive: true to every user object.
// 9.	Add index to every element while mapping.




// 1.	Given ["apple", "banana", "mango"], return a new array with all values in uppercase.


// let arr = ["apple pie", "yellow banana ", "may mango"];

// let res = arr.split(" ")
// console.log(res);

// let arr = ["apple pie" ,"yellow banana" ,"may mango"];

// let res = arr.map((item) => {

//     return item.split(" ")
//     .map((word) =>  word.charAt(0).toUpperCase() + word.slice(1)  ).join(" ")
// } ) 


// console.log(res);


//   return item.split(" ")  .map((word) =>  word.charAt(0).toUpperCase()   )
// with this we got the 1st letter only made caps A P Y B M M


// since slice usually deletes the 1st character , here word is applepie, we don't want small (ap) here, so that  AP YB MM we are joining with join(" ")
// before join(" ")  [ [ 'Apple', 'Pie' ], [ 'Yellow', 'Banana' ], [ 'May', 'Mango' ] ]
// why we write join here so that we can make those 2 words in one string 
// after join [ 'Apple Pie', 'Yellow Banana', 'May Mango' ]



// // 2.	Convert [1,2,3,4] into [1,4,9,16].

// let arr = [1,2,3,4];
// let res = arr.map((item) => item * item  )
// console.log(res); [ 1, 4, 9, 16 ]

// 3.	Given:
// 7.Return an array of only names.
//8.	Add a new property isActive: true to every user object.
// // 9.	Add index to every element while mapping.

// const users = [ 
//       { id: 1, name: "John" },
// 	  { id: 2, name: "Jane" }
// 	] 

// let res = users.map((us)=>  ({...us, isActive : true} ))

// console.log(res);
// [
//   { id: 1, name: 'John', isActive: true },
//   { id: 2, name: 'Jane', isActive: true }
// ]


// if we want to add new properties in object then using same spread operator only using map 
// ({...oldones, xx : xx })


// const users = ["john"]

// let res = [...users, "Jane"  ]
// console.log(res); //[ 'john', 'Jane' ]
// so if we want to add a new string we can get it in using ...spread operator


// 9.	Add index to every element while mapping.

// const users = [ 
//       { id: 1, name: "John" },
// 	  { id: 2, name: "Jane" },
// 	  { id: 3, name: "Joo" },

// 	] 

// let res = users.map((us, idx) => {
//     return {...us, isActive : true, index : idx }
// }   )

// console.log(res);

// [
//   { id: 1, name: 'John', isActive: true, index: 0 },
//   { id: 2, name: 'Jane', isActive: true, index: 1 },
//   { id: 3, name: 'Joo', isActive: true, index: 2 }
// ]

// Most modern JavaScript (React, Redux, functional style) prefers:

// immutable updates

// Meaning:

// ❌ don't change original object

// ✅ create a new one with spread

// Example mental rule:

// map → transform
// filter → remove
// reduce → combine

// ✅ Simple rule you can remember

// map + object change = {...oldObject, newProperty}

// Conditional property update inside map

// 1. Sometimes you only want to update one specific object in the array.

// Example: Activate only user with id = 2
// const users = [
//   { id: 1, name: "John"},
//   { id: 2, name: "Janny"}
// ];


// let res = users.map((us) => {
//     return us.id === 2 ? {...us, isActive : true } : us 
// })

// console.log(res);
// [
//   { id: 1, name: 'John', isActive: false },
//   { id: 2, name: 'Jane', isActive: true }
// ]
// map → check condition → update only matching item , This pattern is very common in React state updates.


// 2️⃣ Adding computed properties

// You can add properties that are calculated dynamically.

// Example: Add nameLength
// const users = [
//   { id: 1, name: "John"},
//   { id: 2, name: "Janny"}
// ];

// let res = users.map((us) => {
//     return {...us, namelength : us.name.length}
// } )
// console.log(res);

// [
//   { id: 1, name: 'John', namelength: 4 },
//   { id: 2, name: 'Janny', namelength: 5 }
// ]



// 3️⃣ Returning a completely different structure

// map() doesn't have to return the same object structure.

// const users = [
//   { id: 1, name: "John"},
//   { id: 2, name: "Janny"}
// ];

// let res = users.map((us) =>{
//     return {label : us.name , value : us.id } 
// } )
// console.log(res);
// [ { label: 'John', value: 1 }, { label: 'Janny', value: 2 } ]




// Basic filter() (Conditional Rendering Pattern)
// 1	Return only even numbers from [1,2,3,4,5,6].
// 2.	Filter users whose age > 18.
// 3.	Remove falsy values from:
// 4.	[0, "", null, "hello", undefined, 5]
// 5.	Filter completed todos:
// 6.	{ id:1, completed:true }
// 7.	Remove duplicate numbers using filter.


// 1)	Return only even numbers from [1,2,3,4,5,6].

// let arr = [1,2,3,4,5,6];

// let res = arr.filter((num) => ( num % 2 === 0 )  )
// console.log(res);   [2,4,6]



// 	2) Filter users whose age > 18.

// let age = [16,17,18,19,20,21,22,21,11,20,25]
// let res = age.filter((num) => {
//     return num > 18
// } )

// console.log(res); [ 19, 20, 21, 22, 21, 20, 25 ]

// let res = [...new Set(age.filter((num) => {
//     return num > 18
// }) )]
// console.log(res); [ 19, 20, 21, 22, 25 ]


// 3)	Remove falsy values from:
// let arr =	[0, "", null, "hello", undefined, 5]

// let res = arr.filter(Boolean)
// console.log(res); [ 'hello', 5 ]


// 4)	Filter completed todos:
// let todos =[
// { id:1, completed:false },
// { id:2, completed:true },
// { id:3, completed:true },
// { id:4, completed:false },
// { id:5, completed:true },
// { id:6, completed:false},
// ]

// let res = todos.filter((tds) => {
//     return tds.completed 
// })
// console.log(res);

// [
//   { id: 2, completed: true },
//   { id: 3, completed: true },
//   { id: 5, completed: true }
// ]




// 🔹 Basic reduce() (Aggregation Pattern)
// 11.	Sum [1,2,3,4].
// 12.	Find maximum number in array.
// 13.	Count how many times "apple" appears in:
// ["apple","banana","apple","mango"]
// 14.	Convert:
// ["a", "b", "c"]
// into:
// { a:true, b:true, c:true }
// 15.	Count total cart value:
// [
//   { price: 100, qty: 2 },
//   { price: 50, qty: 1 }
// ]

// 1) Sum [1,2,3,4]
// let arr = [1,2,3,4]
// let res = arr.reduce((prev,cur) => prev + cur)
// console.log(res); 10 

// 2. Sum	

// let arr = [10,20,30,40]

// let res = arr.reduce((pre, cur) => {

// return pre + cur

// },0)


// console.log(res); 100

// If no initial value:

// pre = first element
// cur = second element

// If initial value exists:

// pre = initial value
// cur = first element

// 3. Find maximum number in array.

// let arr = [10,2,3,15]

// let res = arr.reduce((pre,cur) =>{
//     return Math.max(pre , cur)
// } )

// console.log(res); 15

// 4)	Count how many times "apple" appears in:
//  ["apple","banana","apple","mango"]
// let arr =  ["apple","banana","apple","mango"];

// let freq = {};

// for(let item of arr){

// freq[item] = (freq[item] || 0)  + 1 

// }


// console.log(freq);
// { apple: 2, banana: 1, mango: 1 }


// let res = arr.reduce((acc,item) =>{

// acc[item] =( acc[item] || 0 ) + 1
// return acc
// },{} )

// console.log(res); 
// { apple: 2, banana: 1, mango: 1 }


// Return the unique Element
// let arr =  ["apple","banana","apple","mango","mango"]

// let freq = {};

// for(let item of arr){

// freq[item] = ( freq[item] || 0 ) + 1


// }

// let uniq = [];

// for(let key in freq){

// if( freq[key] === 1 ){
//     uniq.push(key)
// }}

// console.log(uniq);
// [ 'banana' ]






//  5)	Convert: ["a", "b", "c"] into:
// { a:true, b:true, c:true }


// let arr = ["a", "b", "c"];

// let res = arr.reduce((obj, val)  => {

//     obj[val] = true
//     return obj
// },{})

// console.log(res);
// { a: true, b: true, c: true }

// 6) Give ids to these array of Elements 
// let arr = ["apple", "banana", "orange"];

// let res = arr.reduce((obj, val, idx ) =>{

//    obj[idx] = val
//     return  obj
// },{} )

// console.log(res);
//  { '0': 'apple', '1': 'banana', '2': 'orange' }

// 15.	Count total cart value:
// [
//   { price: 100, qty: 2 },
//   { price: 50, qty: 1 }
// ]

// let arr =  [
//   { price: 100, qty: 2 },
//   { price: 50, qty: 3 }
// ]

// let res = arr.reduce((acc, item ) =>{
//     return acc + item.price * item.qty
// }, 0 ) 

// console.log(res); 350

//-------------------------------------------
// 🔹 Combining filter + map
// 1.	From users, return names of users older than 18.
// 2.	Show only active users and return <li> style objects (just return formatted string for now).
// 3.	From products, return discounted price (10% off) 



// 1) From users, return names of users older than 18.
// const users = [
//   { id: 1, name: 'John', age: 20 },
//   { id: 2, name: 'Jane', age: 17 },
//   { id: 3, name: 'Bob', age: 25 },

// ];

// let res = users.filter((us) => us.age > 18  ).map((us) => us.name )

// console.log(res); [ 'John', 'Bob' ]

   
// 2) Show only active users's name 
// const users = [
//   { id: 1, name: 'John', isActive: true },
//   { id: 2, name: 'Jane', isActive: false },
//   { id: 3, name: 'Bob', isActive: true },
// ];

// let res = users.filter((us) => us.isActive === true ).map((us) => us.name )
// console.log(res);
// [ 'John', 'Bob' ]


// 3) Return an array of discounted prices with 10% off for each product.

// First all the cart's price

// const prod = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
//   { id: 3, name: 'Tablet', price: 300 },
// ];

// let res = prod.reduce((acc,val) =>{
// return acc + val.price

// },0 )
// console.log(res); 1800







// Now discount with 10% with all prod

// let res = prod.map((item) =>{
//     return item.price -  item.price * 10/100
// } )

// console.log(res); [ 900, 450, 270 ]

// Return an array if the user has purchased higher than $1000

// const prod = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 1500 },
//   { id: 3, name: 'Tablet', price: 1800 },
// ];


// let res = prod.filter((item)=> item.price > 1000 ).map((item) => item.price - item.price * 10/100 )
// console.log(res); [ 1350, 1620 ]




// Real UI Pattern Questions
// 1.	Given cart items, calculate total items count.
// 2.	Group users by role:
// { id:1, role:"admin" }
// 3.	From comments array, count how many comments each user made.
// 4.	Flatten nested array:
// [[1,2], [3,4], [5]]
// 5.	Remove a user by id (immutably — important for React state).
// 6.	Toggle completed for a todo by id.
// 7.	Check if at least one user is admin (without using .some()).


// 1)	Given cart items, calculate total items count.

// const prod = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
//   { id: 3, name: 'Tablet', price: 300 },
// ];

// let res = prod.reduce((acc,cur) => acc + 1 ,0 )
// console.log(res); 3

// We needed cur only to loop over each item.
// Since we just count items, we didn’t need to access properties like cur.name or cur.price.
// console.log(prod.length); this also gives same ans 
 

// 2.Group users by role:
// { id:1, role:"admin"  role: "user"}

// const users = [
//   { id: 1, name: 'John', role: 'admin' },
//   { id: 2, name: 'Jane', role: 'user' },
//   { id: 3, name: 'Bob', role: 'admin' },
//   { id: 4, name: 'Alice', role: 'user' },
// ];


// let res =  users.reduce((acc, val ) => {

//    ( acc[val.role] = acc[val.role] || []).push(val)
// return acc
// },{} )

// console.log(res);

// {
//   admin: [
//     { id: 1, name: 'John', role: 'admin' },
//     { id: 3, name: 'Bob', role: 'admin' }
//   ],
//   user: [
//     { id: 2, name: 'Jane', role: 'user' },
//     { id: 4, name: 'Alice', role: 'user' }
//   ]
// }

// 3.	From comments array, count how many comments each user made.


// Sample data: comments array
// const comments = [
//   { id: 1, user: "Alice", text: "Great post!" },
//   { id: 2, user: "Bob", text: "Thanks for sharing." },
//   { id: 3, user: "Alice", text: "I agree with this." },
//   { id: 4, user: "Charlie", text: "Interesting perspective." },
//   { id: 5, user: "Bob", text: "Good read!" },
//   { id: 6, user: "Alice", text: "Loved this part." }
// ];

// let res = comments.reduce((acc,com) =>{

// acc[com.user] = ( acc[com.user] || 0 ) + 1
// return acc

// },{} )
// console.log(res); { Alice: 3, Bob: 2, Charlie: 1 }



// 4.	Flatten nested array:
// let arr =  [[1,2], [3,4], [5]];

// let res = arr.reduce((acc,cur) =>{
// return acc.concat(cur)

// },[] )

// console.log(res); [ 1, 2, 3, 4, 5 ]


// 5. Remove a user by id (immutably — important for React state).


// const users = [
//   { id: 1, name: 'John',},
//   { id: 2, name: 'Jane',},
//   { id: 3, name: 'Bob', },
//   { id: 4, name: 'Alice' },
// ];

// let res = users.filter((us) => {
// return us.id !== 2 

// } )

// console.log(res);

// | Goal                 | Condition      |
// | -------------------- | -------------- |
// | Keep specific user   | `id === value` |
// | Remove specific user | `id !== value` |






// 6. Toggle completed for a todo by id (immutably)

// const todos = [
//   { id: 1, title: "Learn JavaScript", completed: false },
//   { id: 2, title: "Practice React", completed: true },
//   { id: 3, title: "Build a Todo App", completed: false },
//   { id: 4, title: "Study DSA", completed: false }
// ];


// // Write code to toggle the "completed" value of the todo with id = toggleId
// // without mutating the original array.

//  const toggleId = 3;

// let res = todos.map((todo) =>{

// if( todo.id === toggleId ){
// return {...todo, completed : !todo.completed  }
// }
// return todo
// } )

// console.log(res);

// [
//   { id: 1, title: 'Learn JavaScript', completed: false },
//   { id: 2, title: 'Practice React', completed: true },
//   { id: 3, title: 'Build a Todo App', completed: true },
//   { id: 4, title: 'Study DSA', completed: false }
// ]


// 7.	Check if at least one user is admin (without using .some()).

// const users = [
//   { id: 1, name: 'John', role: 'admin' },
//   { id: 2, name: 'Jane', role: 'user' },
//   { id: 3, name: 'Bob', role: 'admin' },
//   { id: 4, name: 'Alice', role: 'police' },
// ];

// let res = users.some((us)  => us.role === "admin" )
// console.log(res); true
// so some checks if at least one element is admin, then it returns true


// (without using .some()).

// let found = false;


// for(let i of users){

//     if( i.role === "admin"){
//         found = true
//         break
//     }

// }
// console.log(found); true



// 8. Question

// Find the first admin user without using .find()

// const users = [
//   { id: 1, name: 'John', role: 'user' },
//   { id: 2, name: 'Jane', role: 'user' },
//   { id: 3, name: 'Bob', role: 'admin' },
//   { id: 4, name: 'Alice', role: 'admin' }
// ];

// 👉 Return the first user whose role is "admin".

// Expected output: { id: 3, name: 'Bob', role: 'admin' }

// let res = users.find((fin) =>{

// if( fin.role === "admin" ){
//     return fin
// }})

// console.log(res); { id: 3, name: 'Bob', role: 'admin' }

// without using .find()

// let found = null;

// for(let i of users){

// if( i.role === "admin" ){
//     found = i
//     break;
// }}

// console.log(found); { id: 3, name: 'Bob', role: 'admin' }




// | Method     | Purpose                 | Return       |
// | ---------- | ----------------------- | ------------ |
// | `some()`   | At least one matches    | `true/false` |
// | `every()`  | All must match          | `true/false` |
// | `filter()` | Get matching items      | new array    |
// | `find()`   | Get first matching item | object       |


// 26.	Convert array of users into object indexed by id:
// { 1: {id:1,name:"John"} }

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Bob" },
//   { id: 4, name: "Alice" },

// ];

// Write code to convert this array into an object
// where the key is the user id.

// let res = users.reduce((acc, val) => {
//   acc[val.id] = val
//   return acc;
// }, {});

// console.log(res);

// {
//   '1': { id: 1, name: 'John' },
//   '2': { id: 2, name: 'Jane' },
//   '3': { id: 3, name: 'Bob' },
//   '4': { id: 4, name: 'Alice' }
// }


