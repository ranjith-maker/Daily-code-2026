// import React , {useState, useEffect,useCallback, useMemo }  from "react"
// import ReactDOM from "react-dom/client"


// function App() {

// const [count , setCount] = useState(0)
    
// const [num, setNum] = useState("")

// function Fibonacci(n) {

//     if(n <= 1)
// return n

// let a = 0; let b = 1;
// for(let i = 2; i<=n; i++){
// let temp = a + b
// a = b 
// b = temp
// }
// return b
// }

// let result = useMemo(()=> Fibonacci(num),[num])    



// return(
// <>

// <h1>Counter is : {count}</h1>
// <button onClick={()=> setCount( prev => prev + 1 )} > Increase </button>
// <button  onClick={()=> setCount(prev =>  prev > 0 ? prev-1 : 0)} > Decrement </button>
// <button onClick={()=> setCount(0) } > Reset </button>


// <h2> Fibonacci number : {result } </h2>
// <input type="number" value={num}

// onChange = { (e) => setNum(Number(e.target.value)) }      /> 


//  </>
// )


// }

// let road = ReactDOM.createRoot(document.getElementById("road"))

// road.render(<App/> )


/*
if we use useEffect here commenting out this let result = useMemo(()=> Fibonacci(num),[num])   
and adding this variable, const [result , setResult] = useState("") 

useEffect(()=>{
    setResult(Fibonacci(num))
}, [num])

we know that useEffect runs at alst , so here retuning shows an old value plus when the num[dependencies] changes , it runs the setResult fucntion , since it causes another whole rerendering we don't useEffect











 */

