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

</Routes>


</BrowserRouter>

)}



let root = ReactDOM.createRoot(document.getElementById("road"))

root.render( <App/>)







/*

now the question, in official react app or any website, https://react.dev/learn/describing-the-ui
how can I make a nested routing, like this, from home , ypu go inside a page by clicking navbar, in that there will be a link to go to diff page , now how to make that ?
First what I did was, I created 4 js file, Details, Zero, City,Country, in this 4 four
When you open Details page you'll also see Zero's page content
and Details have 2 links such as City and Country , you'll only see the link not theri content , this is the diff between how zero is places inside Deatials page and City and Country placed inside Detials page

Since Details is a parent for Zero , City, Country , write  import { Outlet, Link } from "react-router-dom" on top of the details page
if you want the Zero to show in Details page, write this  <Route index element = {<Zero/>} />

if want them as link , then write this in a rendering page inside Detials
  <Route path="city" element ={<City/>} > </Route>
  <Route path="country" element = { <Country/> } > </Route>
also in Detials.js page
export default function Details() {
  return (
    <>
      <h1>Welcome to Details Page</h1>

<Link to ="City"  >City</Link>
<Link to = "Country" >Country</Link>

      <Outlet/>
    </>
  )
}


Read the below code carefully to implement this
 








*/










