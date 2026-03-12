



//React Components

// Class based components - it was previously oldone used, now only Func Comp
// Function based components
// just like normal creating a function
// Returning a JSX  
// and storing them in a variable giving that vatriable to render
// function greet() {
    
// return <h1>Hello Everyone</h1>

// }

// let funcComp = greet()

// let root = ReactDOM.createRoot(document.getElementById("road"))

// root.render(funcComp)

// this is how Arrow function works

// let meet = ()=>{
//     return <h2> JSX is Awesome  </h2>
// }

// let arrfunComp = meet()

// let root = ReactDOM.createRoot(document.getElementById("road"))

// root.render(arrfunComp)

// we can also directly call the function inside the render like root.render(meet())

 


// Let's see how to render both of them
// just create another variable to store both of them, first wrap them, out those variables in a curly braces as function is a part of JS and render the combined variable 

// function greet() {
//     return <h1>Hello Everyone</h1>
// }

// let funcComp = greet()

// let meet = ()=>{
//     return <h2> JSX is Awesome  </h2>
// }

// let arrfunComp = meet()
// let bothFunc =  <>  {funcComp} {arrfunComp}  </>


// let root = ReactDOM.createRoot(document.getElementById("road"))
// root.render(bothFunc)

// DAY 3 should have npm modules, parcel.cache, dist as a folder 
// html,css,js, and both package.json , package-lock.json
// for npm folder run this – npm install for node init 
// for parcel – npx parcel index.html , now you get parcel.cache and dist
// To go to live, and get localhost we need run this code in our terminal as
// npx parcel index.html

// There are 2 types of dependencies 
// 1) One is react and react dom which we put in production 
// 2) Other is dev dependency which is very useful while we write code



