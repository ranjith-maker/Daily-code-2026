
//Create an element using JS

// const { createContext, createElement, Children } = require("react")


// const React = {

// createElement : function(tag , styles , children) {
    
// const elem = document.createElement(tag)

// if( typeof children === "object" ){

// for(let value of children){
//     elem.append(value)
// }}else 

// elem.innerText = children
// for(let key in styles){
//     elem.style[key] = styles[key]
// }

// return elem

// }}

// const head1 = React.createElement("h1", { backgroundColor : "blue" ,fontSize : "30px", color : "white"}, "Hello Coder Army" )
// const head2 = React.createElement("h2", { backgroundColor : "red" , fontSize : "25px", color : "white" }, "How are you ?")
// const li1 = React.createElement("li", {}, "HTML")
// const li2 = React.createElement("li", {}, "CSS")
// const li3 = React.createElement("li", {}, "Javascript")
// const UL = React.createElement("ul", { backgroundColor : "blue" ,fontSize : "30px", color : "white"} ,[li1,li2,li3] )


// //Rendering part 
// const ReactDOM = {
    
// render : function(elem, root){
//     root.append(elem)
// } }

// ReactDOM.render(head1, document.getElementById("road") )
// ReactDOM.render(head2, document.getElementById("road"))
// ReactDOM.render(UL,document.getElementById("road"))

//Here React and ReactDOM both are Object only as we know JS is object



// Now am gonna do DOM manipulation via ReactDOM
// DOM manipualtion is appending it into the body of HTML DOM
// IN React we call it Rendering, we can do this also by a simple function



//tage means h1 or div or span or button
//style means these textContent, bgcolor, fontsize, color
//children means their value, textContent





// const h1 = document.createElement("h1")
// h1.textContent = "Hello Coder Army"
// h1.style.backgroundColor ="blue"
// h1.style.fontSize ="36px"
// h1.style.color = "white"

// const h2 = document.createElement("h2")
// h2.textContent = "How are you all ? "
// h2.style.backgroundColor ="red"
// h2.style.fontSize ="36px"
// h2.style.color = "white"


// For visual representation
// let style = {
//     name : "bground",
//     color : "white",
//     size : 20
// }

// for(let key in style){
//     console.log(style[key]);
    
// }
// bground
// white
// 20