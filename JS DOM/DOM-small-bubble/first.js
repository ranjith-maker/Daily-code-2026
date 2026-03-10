



document.body.addEventListener("click", (ev) => {

const popo = document.createElement("div");
document.body.append(popo)


popo.className = "ball";
// popo.innerText = "HII"

const clrs = ["red","green", "orange", "purple", "blueviolet", "almond", "gray"];
popo.style.backgroundColor = clrs[Math.floor(Math.random() * clrs.length)];

const msgs = ["Hii", "hello", "Welcome", "Chao", "Bonjour" ];
popo.textContent = msgs[Math.floor(Math.random() * msgs.length)];

popo.style.left = ev.clientX - 25 + "px";
popo.style.top = ev.clientY - 25 + "px";
// const x = ev.clientX;
// const y = ev.clientY;

// popo.style.left = `${x-25}px`;
// popo.style.top = `${y-25}px`;

popo.addEventListener("animationend",()=>{
popo.remove();

})

// setTimeout( () => {
// popo.remove();
// },5000 )

})




// Instead of HTML why we've created a div here qith classname and text value.... read the below or above   
// inside 4 lines
// 1st -  we're creating a div inside document body
// 2nd -  Always append it right after oyu craete it, we are inserting this newly created div in the body of the browser      
// 3rd we are giving a className, why, with this class name we can make chnages oevr there, (make a circle as there) 
//CSS- after giving a clasname to your new div you need to work on CSS .
// 4th- we wanted some text inside, as HII 
// We've used addeventlistener to popo itself, "To Remove" as the animation ends,here we learnt inisde one event listener we can add another one  
//setTimeout, whatever the child we create inside the JS it'll be seen on Browser element HTML only, not on HTML here
// so in this case the more I click the more the circle will be informed as I wrote code like when body gets clicked it needs to show a div 
// so in browser element the div will be formed endlessly as much as we click

//5th line is core of this project - look at css, since we've given position absolute to ball - it'lll take ancestor's command,It'll only be in the Center of the webpage
//all the circles comes in the center, We need to make it work in wherever we click it forms the circle 
//ClientX ClientY- These give you the mouse pointer position relative to the viewport. will give - where exactly our mouses is clicked in the browser 
//6th line is we're giving style left and top as we used to give in css absolute top-10%, left= 20% to move the box,
//here we've given x and y using JS, as the user clicks 






//I asked AI , why should I write -25px 

// Great observation. This means you’re **actually seeing how coordinates work**, not just copying code. Let’s lock this in.

// ---

// ## What `clientX` and `clientY` really mean

// ```js
// ev.clientX
// ev.clientY
// ```

// These give you the **mouse pointer position** relative to the **viewport**.

// Important detail:

// > The coordinates represent the **TOP-LEFT corner of the element you place**.

// ---

// ## Why the ball appears “correct” without `-25`

// When you write:

// ```js
// popo.style.left = `${x}px`;
// popo.style.top = `${y}px`;
// ```

// What happens:

// * The **top-left corner** of the ball is placed exactly at the click
// * Your eye often interprets this as “correct” because:

//   * the ball is small
//   * the click point is still inside the ball

// So visually, it feels fine.

// ---

// ## Then why do people subtract `25px`?

// Because your ball is:

// ```css
// width: 50px;
// height: 50px;
// ```

// Half of 50 = **25**

// If you want the **CENTER of the ball** to appear exactly at the click point, you must offset by half its size:

// ```js
// popo.style.left = `${x - 25}px`;
// popo.style.top = `${y - 25}px`;
// ```

// Now:

// * Click point = center of the ball
// * Visually precise

// ---

// ## Visual explanation (simple)

// ### Without `-25`

// ```
// Click ●
// Ball ⬜
// ⬜ starts here
// ```

// Click touches the **corner** of the ball.

// ### With `-25`

// ```
//     ⬜
// Click ●
//     ⬜
// ```

// Click is at the **center**.

// ---

// ## When you DO need `-25`

// * Ripples
// * Game particles
// * Cursor-following effects
// * Accuracy matters

// ## When you DON’T need it

// * Decorative effects
// * Large elements
// * Casual UI feedback

// ---

// ## Pro / modern improvement (no hardcoding)

// Instead of guessing `25`:

// ```js
// const rect = popo.getBoundingClientRect();
// popo.style.left = `${x - rect.width / 2}px`;
// popo.style.top = `${y - rect.height / 2}px`;
// ```

// Works even if size changes.

// ---

// ## Interview-ready line ⭐

// > “Mouse coordinates place an element by its top-left corner, so subtracting half the element’s size centers it under the cursor.”

// ---

// ## Coach note

// You’re now thinking in **coordinate systems**, which is exactly how games and advanced UI work.

// Next cool step:
// 👉 follow-the-mouse animation
// 👉 gravity / bounce effect
// 👉 throttling mouse events

// Say what you want next.
