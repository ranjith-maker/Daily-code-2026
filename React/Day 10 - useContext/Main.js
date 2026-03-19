// import React , {useState }  from "react"
// import ReactDOM from "react-dom/client"
// import Increase from "./src/components/Increase"
// import Decrease from "./src/components/Decrease"

// function App() {

// const [count, setCount  ] = useState(0)


// return(

// <>

// <h1>Hello Coder Army </h1>

// <Increase parcount = {count} setcounts = {setCount} />
// <Decrease  parcount = {count} setcounts  = {setCount} />

// </>

// )}


// let road = ReactDOM.createRoot(document.getElementById("road"))

// road.render(<App/> )




/*

So I am calling the parent funciton as usual, <h1>Parent Counter is :  {count} </h1>
<Increase parcount = {count} setcounts = {setCount}   />, inside the aprent func, am returning the child fucntion also , in child fucntion am am taking (passing arugurments) props frmo parent ad sending it to child 
function Increase({parcount,setcounts }) so that I can show over there 
It is a counter app, the button is in child component, and counter wording is frmo both 
<h1>Parent Counter is :  {count} </h1> , <h2> Child Counter is {parcount} </h2>
if my button is in the child component, I need to call from there right? yes so passed props frmo parent setcounts = {setCount}, also since showing parcount = {count} 
---------

Let's say three components, Parent , child1 , child2
child has Increment button , child2 has Decrement button
but this const [ count, setCount ] = useState(0) is created in child1 only, when child2 button is clicked, you the state of child has to change(decrease)
Previously we shared a props to child state which created in parent, now , child1 has variable , how to send to send it to child 2 ? , child2 is not a child of child1 to easily share the props
parent can call child , child can't call parent, this where the State Lifting concept comes in the picture
state is getting lifted, from child1 to parent, If parent has the state then it can share it to both the child right ? by easily sending the props.... isnt't it common sense , yes it is.

2️⃣ Lift State Up

If multiple components need the same data:

Move the state to the closest common parent.

Pass data and setters down.

 */

