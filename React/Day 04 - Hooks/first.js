
import React, {useState} from "react";
import ReactDom from "react-dom/client"


function Counter() {

    let [count, setCount] = useState(0);


  function inc() {
    count = count + 1
    setCount(prevCount => prevCount + 1 )
}

function dec() {
       if(count > 0){
    count = count - 1 
      setCount(prevCount => prevCount - 1 )
}}


    return(
    <div  id="first">  
        <h1>Count is {count} </h1>
        <button onClick={inc} > Increase {count} </button> 
        <button onClick={dec} > Decrease {count} </button>
    </div>
      
)}


let root = ReactDom.createRoot(document.getElementById("road"))
root.render( <Counter/> )




/*
here we have manipulated DOM on our won like queryselector and innertext. The main advantage of React is, it can handle the DOM we need to focus on UI itself  
This is where HOOKS comes into the picture, Hook is just a function 
here we use UseState hook, whenever state changes we use UseState hook, what is state ? qhenevr there is a variable and its avlue is changing, it is state, 
here count is keep changing as we click and where can i get this UseState hook, it'll be inside React 
so at top,  write this  , import React, {useState} from "react"; , why we write in a curly braces, because it comes as exported , we are importing
so imported it, now here to use it, we can directly write it in the value it stars like this , let count = 0 , so
let count = useState(0); and useState returns an array and function,and useState(0) what value you give me intially I'll initialize with that so 
let [count, setCount ] = usesState(0) , whenver the value changes, call my function, here function is setCount(count) ==> we can write any word for function, and pass that variable
The beauty is wherever you have that variable I'll change the UI



NOw how UseState works 
whenever we call this function, like this setCount(count),initially it is set 0, as soon as the button is clicked, btn has inc function that gets called and ran count is increased by +1, now setCount(1) 
and it goes its own Counter()
sees the count value has set as 0, and will get changed here 
let [count, setCount] = useState(1); since 1 is the value of count, so wherever the count is written , all the places the UI gets changed 

Why use prevCount in setCount?

Using prevCount ensures that you are working with the most recent value of count (which is important when multiple state updates might happen in quick succession, like if you were to call setCount multiple times).

prevCount always gives the latest value of the state when the update is queued.

Without prevCount, you risk updating based on an outdated value due to React's asynchronous rendering.


prevCount is provided automatically by React when you pass a callback to setState (or setCount).

It represents the most up-to-date value of the state when you perform the update.

Using prevCount ensures you’re working with the latest state, preventing stale state updates (like using outdated values).

How React's useState works:
useState(initialValue) gives you an array with two elements:
count: The current value of the state.
setCount: The function used to update the state. This triggers a re-render when called.
When you call setCount, React will:
Update the state value (count).
Re-render the component to reflect the new state in the UI.












*/ 




