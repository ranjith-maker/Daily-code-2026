
import sum from "./second.js";
sum(3,5)

console.log("Hello I am first");



/*

Lecture 02 Import and export in details

lets see the diff beetween require and import export , commonjs , ES6 module(MJS)
CJS is still followed by companies
CJS is synchronous 
ES6 is Asynchornous

this is the common JS ones

First.js
const sum = require("./second")

sum(3,4)
console.log("Hello am first");


Second.js
console.log("hello am sescond");
function sum(a,b) {
    console.log(a+b);
}
module.exports = sum

now the ans is 
hello am sescond
7
Hello am first

let say I want some more functions from other files like 

First.js
const sum = require("./second")

//require("./third")
//require("./four")
//require("./five")

sum(3,4)
console.log("Hello am first");
lets see the what does Synchronous mean in Common JS


first second file will run then third then four then five then only first.js file'll run
Common js runs in non-strict mode


in ES6 
First.js

import sub from "./secon.js"

sub(6,5)
console.log("I am from first");




Second.js
console.log("Am a Second file");

function sum(a,b) {
console.log(a+b);  
}
export default sum

Package.json
{
    "type": "module"
}

let say I want some more functions from other files like 

First.js
import sub from "./second.js"

//import mul from three.js
//import div from four.js
//import square frmo five.js


sub(6,5)

console.log("I am from first");

ES Modules (import) are not inherently asynchronous in the way you’re thinking. They don’t behave like setTimeout or Promises running in parallel arbitrarily. Instead:
🔹 What actually happens
•	ES6 modules are loaded and evaluated before your script runs. 
•	The browser (or Node.js) builds a dependency graph first. 
•	Then it fetches modules (can be parallel). 
•	But execution order is still controlled and deterministic.

•  Fetching may happen in parallel 
•	second.js, three.js, four.js, five.js can be downloaded simultaneously. 
•  Execution is NOT random or uncontrolled 
•	Each module runs once, in dependency order. 
•	Your main file runs only after all imports are ready. 
•  It WILL wait before running your code 
•	If second.js has heavy work at the top level, your file will wait until it finishes evaluating.

  Module loading (network) can be parallel 
  Module execution is synchronous and ordered
🔹 Simple analogy
•	ES Modules = "download together, execute in order" 
•	CommonJS = "load and execute one-by-one immediately"

ES6 runs in strict mode
-------
In Node js if you're importing any folder itself, we can import that only no need to write file name.js as well it understands it automatically unlike 
const {sum,sub,mul,div} = require ("./folder")

JS is a single threaded synchronous language
where as 
 Node.js has an event-driven architecture capable of asynchronous I/O input output. 

Process
Single threaded, Multi threaded, ASynchronous,single core, Octa core, 
parallelism, Concurrent,

while buying a smart phone, we hear twerms like single core, double core, quad core, Octa core, we thought the more the core the higher the performance in mobile
lets see whats here

in laptop
we are running Youtube , watching movie in VLC, playing PUBG game as well
if our laptop(device) is Single processor , we can play either pubg or youtube or vlc , this is the logic it seems, yet our device can run all 3 being an single processor ? how ?
this is where Context switching comes into the picture,    for some time it runs youtube, for some time vlc , and some time it runs PUBG, this context switching is so fast that it looks like all 3 runs in concurrently, this isn't parallelly runs
it runs concurrently, it means just as I explained above, for sometime one runs, another some time another runs .....  by switching the context in the middle of the process and complete all the heavy tasks


*/


