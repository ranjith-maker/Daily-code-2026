
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

-----
Dual core 
 it has 2 processor , you run youtube and vlc , each processor handles one for each, this is what we call parallel 
 2 cores both are getting executed on same time
now you're running all 4 here in dual core, youtube, VLC, PUBG , VS Code
dual core - both core gets 2 for each to run it by context switching

In a dual-core system, two tasks can execute simultaneously (parallelism), while additional tasks are scheduled via context switching across the cores, combining both parallelism and concurrency.

------------
I asked Ai this
so context switching is what we call concurrently ?
Good question — and this is where precision matters (especially in interviews) ❗
👉 Short answer:
No — context switching is NOT concurrency
It is a mechanism used to achieve concurrency
________________________________________
🧠 Think of it like this
🔁 Context Switching
= How the CPU switches between tasks
⚡ Concurrency
= What we achieve (handling multiple tasks at once)
________________________________________
🍽️ Real-World Analogy
Chef example again 👨‍🍳:
•	Cooking rice 🍚
•	Frying veggies 🥕
•	Making sauce 🍅
What’s happening?
•	Chef switches tasks → context switching
•	Chef handles multiple dishes → concurrency
________________________________________
💡 So:
Concept	Meaning
Context Switching	Technique (switching tasks)
Concurrency	Result (multiple tasks handled)
________________________________________
❗ Important Correction
Your statement:
"context switching is what we call concurrency"
❌ Not correct
✅ Correct version:
Context switching is one of the ways to implement concurrency on a single CPU.
________________________________________
⚙️ More Technical (Interview Ready)
💼 Definition:
Concurrency is the ability of a system to manage multiple tasks by overlapping execution, while context switching is the process of saving and restoring task states to enable this behavior on a single CPU.
________________________________________
🔥 Bonus Insight (Very Important)
Concurrency can exist without context switching too 🤯
Example:
•	Async I/O (Node.js)
•	Event loop
👉 Node.js:
•	Doesn’t constantly switch threads
•	Uses callbacks/promises
________________________________________
🎯 Clean Mental Model
•	1 Core + Context Switching → Concurrency
•	Multiple Cores → Parallelism
•	Both combined → Real-world systems
________________________________________
If you want, next step I’d strongly recommend:
👉 I can show how Node.js achieves concurrency WITHOUT heavy context switching
That’s the concept that cracks most interviews 💡

Our RAM is 8GB, Pubg is 20GB
RAM has to run other tasks as well, and RAM can't take all 20 GB to run Pubg
If RAM cant take all 20gb then how will it run Pubg on the device?
If pubg is 20GB that doesn't mean all 20GB is executed and run,
The pubg app coded (written) in chunks only 
UI has certain size actual game play has certain size , different modes in games as well, we choose to play and while we play we don’t play all mode at a single time neither we can 
So that specific only goes to the RAM while we play that’s why 4GB RAM also runs PUBG app
This is what we call virtual memory – the needed portion of app size only gets to RAM to run it

Just like the Swiggy app we used to code the homepage code brings in the first click and it wont bring the code of the foods, unless we click 
Same to pubg RAM it just needs to run what it gets
	
I asked Ai this

When Dual core creates a multiple threads and if there is 4 apps to run, each threads gets each task to run 

You’re close, but the idea needs a bit of correction.
A dual-core CPU does not automatically create threads or assign one thread per app like that.
Here’s how it actually works:
1. Cores vs Threads
•	A dual-core processor has 2 physical cores. 
•	Each core can run one or more threads at a time (depending on features like Simultaneous Multithreading, e.g., Intel Hyper-Threading). 

2. Who creates threads?
•	Applications create threads, not the CPU. 
•	For example: 
o	One app might create 1 thread 
o	Another might create 10 threads 
3. What happens with 4 apps on a dual-core CPU?
Let’s say:
•	You have 4 apps running 
•	CPU has 2 cores 
The operating system scheduler decides how to run them:
•	It does not assign one app per core permanently 
•	Instead, it uses time slicing: 
o	Runs App 1 for a few milliseconds 
o	Switches to App 2 
o	Then App 3, App 4, and repeats 
This is called context switching
4. Key correction to your statement
“each thread gets each task to run”
❌ Not exactly
✔ Correct idea:
•	Threads are created by apps 
•	The OS schedules those threads across available cores 
•	If there are more threads than cores, they share CPU time

Multiple processor is allocated to run 1 app in single processor device

-----------------------------


Lets say there is a Pizza Hut
They are selling, Pizza, Coke, Burger
Making for pizza – 10min Coke – 2mins Burger – 5mis
There are 6 customers
Lets say if things tasks run synchronously 
No.of customer 	Time taken to serve them
1)Pizza	10mis
2)Coke	12mis
3)Coke	14 mis
4)Burger	19 mis 
5)Pizza	29mis
6)Coke	31 mis
  









If your website works like will anyone wanna visit it ?
JS is a Synchronous language, and your website is made of JS, what happens then ?
Yet we execute asynchronous task as well with the help of Web API

Same above hotel tasks runs asynchronously…

1)Pizza
2)Coke
3)Coke
4)Burger
5)Pizza
6)Coke
  It promises to first customer that as soon as your order is prepared I’ll serve you 
 As a server I noted down all the request from customer and 
After 2 mis whoever ordered their table is served, promise resolved,
After 3 more mins, burger is served, , promise resolved,
After 5 more mis, all pizza is also served , promise resolved,
So within 10 mins all the promises are resolved 
When I ran Synchronously it took 31 mins to complete the tasks
Here only 10 mins to complete all the tasks
Here we may think like 1pizza is 10mins 2pizza so 20mis right?, Nope there are many chefs , multithreading is going on to handle single tasks
Parallelly

*/


