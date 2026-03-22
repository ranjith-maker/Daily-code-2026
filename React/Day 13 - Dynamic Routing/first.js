import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./src/Components/Home";
import Contact from "./src/Components/Contact";
import Dashboard from "./src/Components/Dashboard";
import  Details from "./src/Components/Details";
import Zero from "./src/Components/Zero";
import City from "./src/Components/City";
import Country from "./src/Components/Country";
import Github from "./src/Github";


function App() {
    
return(

<BrowserRouter>

<nav>
<Link to="/" >Home</Link>
<Link  to="/contact" >Contact</Link>
<Link  to="/dashboard"  >Dashboard</Link>
<Link  to="/details" >Details  </Link>

</nav>

<Routes>
<Route path="/" element = {<Home/>}  ></Route>
<Route  path="/contact" element = {<Contact/>}  ></Route>
<Route path="/dashboard" element = {<Dashboard/>}  ></Route>

<Route  path="/details" element = {<Details/>}>
  <Route index element = {<Zero/>} />

  <Route path="city" element ={<City/>} > </Route>
  <Route path="country" element = { <Country/> } > </Route>
</Route>

<Route  path="github/:name" element = {<Github/>}  >  </Route>


</Routes>


</BrowserRouter>

)}



let root = ReactDOM.createRoot(document.getElementById("road"))

root.render( <App/>)







/*



useParams helps us to select the dynamic route
<Route  path="github/:name" element = {<Github/>}  >  </Route>
when you make the route /:name, as you are putting slash semicolon name, then it makes things dynamic
const data = useParams()
console.log(data);
useParams()gives us an object, in that comes name:what we types after github slash /, localhost/github/rohith  
we can clearly see this by destructuring as well
const {name} = useParams() console.log(name)
 

<img src={profile?.avatar_url} alt="avatar"  ></img>
<h2>{profile?.login}</h2>

why we have written profile?.login bcoz useEffeect runs at last , we initialized the profile with null and returning the profile.login and then using fectuser()inside useefect ,
if it runs at last and returns runs beofr euseEffect then it throws an error right?...
that's why its like we're asking profile, do you have data? if yes giev me login




*/










