


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




// What if all 4 gets executed in One go ?, 
// Reflow and Repaint will be calculated only once for these 4, that’s what React does, that’s the big advantage of React.

// Even the 4 lines gets bundled and given to JS, JS is a Synchronous Language, it'll be executed line by line, then Repaint and Reflow also be calculated 4 times right ?....

// Screen is divided into  image frames, 60fps frames per second, but when 60 images comes in a second you feel like video is running

// Before React (plain JS)
// JS executes line by line
// ----------------------------------------
// document.body.style.backgroundColor = "red";
//    ↓
// document.body.style.fontSize = "30px";
//    ↓
// document.body.style.padding = "10px";
//    ↓
// document.body.style.margin = "10px";
// ----------------------------------------
// Browser batches reflow/repaint if smart
// (usually 1 reflow + 1 repaint, but can be more if layout is queried)
// 💡 Key point: You are directly touching the DOM, so performance depends on browser optimizations and whether you force layout reads (offsetHeight, getComputedStyle, etc.).
// ________________________________________
// After React (using Virtual DOM)
// State updates in React
// ----------------------------------------
// setBackground("red");
// setFontSize("30px");
// setPadding("10px");
// setMargin("10px");
// ----------------------------------------
// React updates Virtual DOM in memory
// Diffs Virtual DOM vs previous Virtual DOM
// Calculates minimal changes needed
// Applies changes to real DOM in **one batch**
// ----------------------------------------
// Result: 1 DOM update, 1 reflow + 1 repaint
// 💡 Key point: You never touch the real DOM directly; React decides the most efficient way to update it. This avoids unnecessary work and makes performance predictable.
// What is the Real DOM?
// •	The Real DOM is the actual HTML document loaded in the browser.
// •	Every element (<div>, <p>, <h1> etc.) is a node/object in the DOM tree.
// •	When you use plain JavaScript to change content or styles, you are directly updating the Real DOM.
// Example:
// <h1 id="title">Hello</h1>
// document.getElementById("title").textContent = "Hi!";
// ✅ This immediately updates the Real DOM and triggers reflow/repaint.
// ________________________________________
// 🔹 What is the Virtual DOM?
// •	The Virtual DOM is an in-memory copy of the Real DOM, represented as a JavaScript object.
// •	React uses it to plan changes before touching the Real DOM.
// •	Instead of updating the Real DOM immediately, React updates the Virtual DOM first.
// ________________________________________
// Example (conceptual)
// Virtual DOM:
// {
//   type: "h1",
//   props: { id: "title", text: "Hello" }
// }
// When you update state:
// setText("Hi");
// React:
// 1.	Updates Virtual DOM:
// {
//   type: "h1",
//   props: { id: "title", text: "Hi" }
// }
// 2.	Compares old vs new Virtual DOM (diffing)
// 3.	Updates only the changed part of the Real DOM (here, just the text node)
// ________________________________________
// 🔹 Why Virtual DOM is useful
// 1.	Minimizes expensive DOM operations
// o	Real DOM updates trigger reflows/repaints → costly for big apps.
// o	Virtual DOM calculates changes in memory first → fewer updates.
// 2.	Batch updates
// o	Multiple state changes in React are combined → applied once to the Real DOM.
// 3.	Predictable performance
// o	You don’t rely on the browser to batch updates intelligently.












// React creates a copy of the Original DOM




// Ah! Now we’re getting to the core of React’s efficiency—the diffing algorithm. Let’s break it down clearly.
// ________________________________________
// 🔹 What is the Diffing Algorithm?
// Diffing = the process React uses to compare the old Virtual DOM with the new Virtual DOM and figure out what actually changed.
// •	Only the differences are then applied to the Real DOM.
// •	This is what makes React fast, especially for large apps with many elements.
// ________________________________________
// 🔹 Step by Step
// 1.	Old Virtual DOM: React keeps a copy of the UI from the last render.
// 2.	<div>
// 3.	  <h1 style="color:red">Hello</h1>
// 4.	  <p>Welcome!</p>
// 5.	</div>
// 6.	New Virtual DOM: You update the state or props, producing a new Virtual DOM.
// 7.	<div>
// 8.	  <h1 style="color:blue">Hello</h1>  // changed color
// 9.	  <p>Welcome!</p>                     // unchanged
// 10.	</div>
// 11.	Diffing: React compares old vs new Virtual DOM:
// o	<h1>: color changed → mark as updated
// o	<p>: no change → do nothing
// 12.	Patch Real DOM: React updates only the <h1> element’s color, leaving the <p> untouched.
// ✅ Result: minimal DOM operations → faster rendering.
// ________________________________________
// 🔹 How React Diffing Works Efficiently
// React uses some heuristics to make it fast:
// 1.	Element type comparison:
// o	If the element type changes (<h1> → <p>), React replaces the entire node.
// o	If type is same, it updates attributes/props only.
// 2.	Keyed lists:
// o	When rendering lists (map), React uses key prop to identify which items changed, were added, or removed.
// 3.	Shallow comparison:
// o	React doesn’t compare the full subtree deeply—only the direct attributes and children, making it O(n) instead of O(n²).
// ________________________________________
// 🔹 Analogy
// Think of diffing like updating a grocery list:
// •	Old list: 🍎, 🍌, 🥦
// •	New list: 🍎, 🍌, 🥬
// •	Diffing sees: “🥦 → 🥬” → update only that one item.
// Without diffing, you’d throw away all groceries and restock everything—wasteful!
// ________________________________________
// 🔹 Why it matters
// •	DOM operations are expensive (reflow, repaint).
// •	Diffing ensures React changes only what’s necessary, not the entire page.
// •	Makes React fast even for complex UIs with thousands of elements.

// Visual analogy
// •	Naive: You have 1000 items in old list, 1000 in new list → you check every old item against every new item → 1,000 × 1,000 = 1,000,000 comparisons
// •	React: With keys, you just check item by item → 1,000 comparisons → O(n)


// Naive DOM diffing (without optimizations)
// Suppose you have:
// •	Old list: 1000 <li> items
// •	New list: 1000 <li> items
// •	You want to find which items changed, added, or removed.
// If you don’t have keys:
// 1.	Take first old item → compare it with all 1000 new items to see if it matches
// 2.	Take second old item → compare it with all 1000 new items again
// 3.	…and repeat for all old items
// ✅ Total comparisons ≈ 1000 × 1000 = 1,000,000 → O(n²)
// •	So yes:
// o	1st old item → compared with 1000 new items
// o	2nd old item → compared with 1000 new items
// o	…and so on
// This is exactly what you wrote:
// “so for one item it compares to all the new 1000 items, 2 for same, 3 for same …” ✅
// ________________________________________
// 🔹 How React avoids this
// React uses keys for list items:
// <ul>
//   {items.map(item => <li key={item.id}>{item.name}</li>)}
// </ul>
// •	Now React can directly match old items to new items using the key
// •	No scanning all items every time → 1 comparison per item → O(n)
// ________________________________________
// 🔹 Analogy
// •	Naive: You have 1000 puzzle pieces and 1000 new pieces. You try to fit each old piece with every new piece → 1,000,000 tries.
// •	React (keys): Each old piece has a unique ID → you can instantly find its match in the new set → 1,000 tries.








// 🔹 How React applies changes to the Real DOM
// 1.	Virtual DOM update
// o	You change state or props in your React component.
// o	React updates the Virtual DOM (in memory) first, not the real DOM.
// 2.	Diffing
// o	React compares the new Virtual DOM with the old Virtual DOM.
// o	It figures out exactly which nodes or props changed.
// 3.	Batching
// o	React collects only the changed items.
// o	Builds a “patch” of minimal updates.
// 4.	Apply to Real DOM
// o	React updates only the changed nodes/properties in the real DOM.
// o	Everything else stays untouched → reduces reflow/repaint.


// Analogy
// •	Old approach (plain JS / naive):
// You repaint the whole wall even if only one spot changed.
// •	React approach:
// You make a sketch of the wall first, mark only the spot that changed, and repaint just that spot.
// ________________________________________
// 🔹 Key Takeaways
// •	React doesn’t blindly update the entire DOM.
// •	It calculates the minimal set of changes in memory first.
// •	Only these changes are batched and sent to the real DOM.
// •	This is why React is fast even for large apps with hundreds/thousands of element

// How the DOM interacts with the browser rendering
// 1.	JavaScript / React updates the DOM
// o	In plain JS, you directly modify the Real DOM (document.body.style…).
// o	In React, you update Virtual DOM, diff it, then apply only changed nodes to the Real DOM.
// 2.	DOM → Browser Rendering Engine
// o	Once the Real DOM is updated, the browser’s rendering engine takes over.
// o	The browser does two main things:
// a. Reflow (Layout)
// o	Calculates positions, sizes, and geometry of elements affected by changes.
// b. Repaint (Paint)
// o	Applies colors, fonts, shadows, and other visual styles.
// 3.	Browser Compositor
// o	Combines all layers (background, text, images, etc.) and paints pixels to the screen







// mportant points
// •	React batching only affects how changes reach the Real DOM.
// •	Once changes hit the Real DOM, the browser does the actual layout and painting.
// •	React does not control the browser painting—it just minimizes DOM work so the browser has less to compute.
// ________________________________________
// 🔹 Analogy
// •	React/JS: You write instructions on paper (“change font size, color…”)
// •	DOM: The paper is handed to the “painting team”
// •	Browser rendering engine: The team reads instructions and updates the wall (pixels on the screen)
// ✅ React just makes sure the instructions are minimal and efficient, so the browser has less work.





