

// Chunking
// Code Splitting
// Dynamic bundling
// On demand loading
// Lazy Loading
// Dynamic import

// These are all the ways to break down your app in smaller chunks

// I want to do a logical separation of my bundles, that means , a bundle has enough code for a major feature in the website 
// For eg – go to make MY trip .com , it has diff verticals
// I can make a bundle for Train component, 
// I can make a bundle for Flight component, 
// I can make a bundle Hotels component, 
// I can make a bundle Holiday Packages component.

// Lets say flight has 100 component, that can form 1 bundle
// Lets say Holiday Stay has 100 component, that can form 1 bundle
// Similarly we can logically break our app into 1 1 bundle 
// These are all a small app inside a BIG app
// so that we don’t put a load on single bundle and our request for the JS file doesn't become so heavy that it takes a lot of time to get into the browser
// In Swiggy app also has Instamart
// So lets add lazy loading feature for us, but our app right now isn't that big yet lets saausme we create Grocery component just like a Instamart in Swiggy and to give emphasis on our logic, assume it is a whole big component which has a lot of sub components in this page. 
// export default function Grocery() {
// return(
// <>
// <h1> 
// Our grocery Delivery Store and we have a
// lot of child components inside this web page !!!     
// </h1>
// </>
// )}
//  I added it as a path and element in router also made a Link to Header component

// Now let me make the Grocery come in a different bundle 
	
// Now I'll not import my grocery in app.js directly, I do lazy loading
// So when we open the app in browser, Grocery.js won't load it quickly as everything, Only when I click grocery it loads that page.
// I'll write a code in such a way that only when I click Grocery browser loads the grocery page
// 1st step you wont do the usual import for Grocery
// const Grocery = lazy( ()=> import('../Components/CustomHook/Grocery') )
//  React has lazy()function and it is a named export
// So import {lazy} from "react"
// Lazy takes 2 things, One call back function, import() this import is alos a function, it isn't like other imports as this is a function and 
// This import function takes a path of Grocery, simple, we made lazy loading

// We made a splitup of 2 JS bundles 
// Now when you open the app, open Network tab, JS, click About page, Contact page, you get all the components ion the browser except Grocery
// Now when you click Grocery, now the Grocery comes along with others
//  const Grocery = lazy( ()=> import('../Components/CustomHook/Grocery') )
// This one above line has huge impact



// const Grocery = lazy( ()=> import('../Components/CustomHook/Grocery') )

// const appRouter = createBrowserRouter([
// {
// path : "/",
// element : <Layout/>,
// children : [
// {
// index: true,
// element : <Body/>
// },

// {
// path : "/about",
// element : <About/>
// },

// {
// path : "/contact" ,
// element : <Contact/> 
// },

// {
// path : "/grocery",
// element : <Grocery/>

// },

// {
// path : "/restaurants/:id",
// element : <Menu/>
//  }


// ],
// errorElement : <Error/>    , 
// },

// ])

// And if your Grocery takes time to load, we can use one more component that wraps the Grocery component, React will fallback to this piece of JSX meanwhile our grocery is being laoded
// import React, { lazy, Suspense } from 'react'




// {
// path : "/grocery",
// element : 
// <Suspense  fallback={ <h1> It is Loading  </h1> }> <Grocery/> </Suspense>
// },
// Only 4 lines we made amazing things, we can make lightweight optimised our large scale application
// We can say in interview , we can implement Lazy() loading if our app grows to large?, when our app bundle size increases ? 
// To reduce the bloating, I can use lazy loading to make distribute my code into diff chunks,







