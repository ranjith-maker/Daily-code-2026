
import React from "react";
import  ReactDOM from "react-dom/client"
import { useEffect, useState } from "react";
import Colorfull from "./src/Components/Colorfull";



//BG color changer

function Main() {
  
const [count , setCount] = useState(0) 


return (
<>

<div className="counter" >
<h1> Counter is {count} </h1>
<button  onClick={()=>  {setCount(count + 1)}}   style={{color : "black" }} >Increase me </button>

</div>


<Colorfull name = {count}   />

</>

)}

let root = ReactDOM.createRoot(document.getElementById("road"))
root.render(  <Main/> )

 


/*
function Main() {
  
const [count , setCount] = useState(0) 


return (
<>

<div className="counter" >
<h1> Counter is {count} </h1>
<button  onClick={()=>  {setCount(count + 1)}}   style={{color : "black" }}   >Increase me </button>

</div>


<Colorfull/>

</>

)} 

before the colorfull function there is a counter function , so when counter is clicked Main function will run and when Main function executes everything will re-render for an updated state
while doing that Colorfull fucntion will also be re-rendered for its updates state
console.log("first");
useEffect(()=>{
 console.log("useeffect");
    
document.body.style.backgroundColor = color

},[color]) this is a heavy operation , like DOM, keep this in a useEffect(()=>{},[]) because when the parent fucntion  Main is being called then the child function Colorfull will also be executed so when you put in a useEffect it wontbe a  trouble
because since whatever the code inside useEffect runs only when the dependencie's value changes
but the above of the code runs, how can I escape from my parent func , HOC HIgher Order Component, I want to run only when I am clicked and unless my props changed inside the parent function like 

Mani (){

other func runs

<Colorfull name = {count} />

} if this is the case then also we need Raect.memo(Colorfull) what if the count is dynamic, it'll show the new count everytime, only the useEffect function wont run

even when I am inside others
React has beautiful hook called React.memo()
use this when you export it , export default React.memo(Colorfull)
when the parent gets re rendered again and again then sue rerender or else we don't need it , In our case, it is counter, thats why we used memo
React.memo is a performance optimization technique that memoizes a functional component and prevents it from re-rendering unless its props change.


*/



