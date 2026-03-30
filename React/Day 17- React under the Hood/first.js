


// How React work under the hood
// Many ppl say React is fast , it is the most optimised way of writing frontend, let’s see why they say that …

// Myth
// 1) People say that Virtual DOM is not being used
// 2) JS when you click any button in JS, it re-renders everything. React only re-renders the particular Component
// -------------------
// Array index can start with 1 index why 0 index is being followed. It makes sense in C++ and Java. 
// It doesn't matter even if we store it in 1,2,3,4 index in JS
// Yes, in JS , Array is stored as an Object, and Object is stored in hashing way hashmap, which is an internal thing 
// ---------------
// Why we use DOM ? 
// DOM allows JavaScript to treat HTML elements as objects, so we can read, modify, and interact with the webpage dynamically.

// What DOM actually does
// When a browser loads an HTML page, it converts the HTML into a tree of objects (called the DOM).
// So instead of plain text like:
// <h1>Hello</h1>
// It becomes something like:
// document -> html -> body -> h1
// Each element becomes an object that JavaScript can access.

// What is the problem is that JS caused which made us moved React ?
// Button
// Docu.body.bgclr = "red"
// Docu.body.fontSize = "30px"
// Docu.body.padding = "10px"
// Docu.body.margin = "10px"
// When I click the button I want these changes to be made
// Execution is like – 1st attempt – red 2nd attempt – 30px 3rd - 10px 4th attempt 10px ,
// It is getting executed one by one 
// I want this to be executed in One go, why we want it in One go?...

// Repaint : Screen is made up of pixels and every pixel gets attached with color, is what we say repaint
// Repaint happens when a visible property changes (like color, background, opacity, visibility) but the element's position and size stay the same.
// When a repaint occurs:
// 1.	The browser recalculates which pixels need which color
// 2.	It redraws those pixels on screen
// 3.	The layout (position/size) doesn't change

// Reflow : which element comes in which position, and size of it, this'll be calculated by Reflow, like GGL search bar, that comes in center of the page

// Reflow (also called "layout") happens when the browser recalculates the position and size of elements in the document. This is more expensive than repaint because it affects the entire layout.
// When a reflow occurs:
// 1.	Browser recalculates dimensions (width, height) of elements
// 2.	Browser recalculates positions (top, left, etc.)
// 3.	This cascades—changing one element can affect others
// 4.	After reflow, a repaint always happens

// Reflow = "Where does this element go and how big is it?" 
// Repaint = "What color should these pixels be?"
// Docu.body.bgclr = "red"
// Docu.body.fontSize = "30px"
// Docu.body.padding = "10px"
// Docu.body.margin = "10px
// So when we come here, first repaints the body as red
// Then increases font size
// Then padding grows as 10px 
// Then margin gets 10px
// It happens step by step , as it is executed one by one 







