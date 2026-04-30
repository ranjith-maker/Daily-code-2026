// Lets see what is HOC Higher Order Components 
// Why do we need I t, where do we use it and how do we use it ?
// HOC is a function that takes a component and returns a component
// It takes a component as  a input and enhances the compo, adds some extra feature to the comp acts like a enhancer, tweaks it, , modify it and returns it back.
// In Swiggy some hotel card has promoted label 
// According to the API data, we'll just take this card and write a HOC that'll take this card it spits out a new card and it has a promoted label on top of it.

// if the restaurant is opened then show the card with open label, lemme first create a card which has card with open label


// it’s a nice concept

// function withOpenlabel(Restcard) {

//   return ()=>{
    
//   }
// }
// withOpenlabel is a HOC, it takes a Restcard as an input,it'll return a new comp, and this time it has a opened label on top of it 
// (in that card what are the only opened:true will be retuned as another comp)
 
// In the body we map and render all the card normally in there we write the logic like if the restaurant is opened , render this HOC component, if not you can render the normal ones
// before condition and rendering HOC
// searchFilter.map((val)=>{
//   return <Restcard     key={val.info.id}   restaurant={val}      />
// })
// after condition and rendering HOC

// const OpenedCard = withOpenlabel(RestCard)

// withOpenlabel is a HOC, takes another comp as an input (RestCard) and now it returns new coponenet which has a label insidse it OpenedCard

// and map and show it like this , just like anything we ask open true ? if yes render HOC card if not render normal restcard
// searchFilter.map((rest)=>{
//   return rest.info.availability.opened ? (
//   <OpenedCard restaurant={rest} key={rest.info.id} />
// ) : (
//   <Restcard  restaurant={rest} key={rest.info.id}  />
// )
  
// })

// export function withOpenlabel(Restcard) {

//   return (props)=>{
//     return(
// <>
// <div className='relative'      >   
// <label
// className=" bg-green-300 absolute top-2 left-2 px-2 py-1 text-xs rounded shadow-md       "
// >Open</label>
// <Restcard {...props}  />
//  </div>
// </>
// )}}





// What {...props} does
// <Restcard {...props} />
// is equivalent to:
// <Restcard restaurant={rest} />
// It forwards all props to the original component.


// ✅ Why spreading is important in HOCs
// HOCs are meant to enhance, not block data.
// Using {...props} ensures:
// •	You don’t lose any props 
// •	The wrapped component behaves exactly the same 
// •	Your HOC stays reusable for any future props 
// ________________________________________
// 💡 Think of it like a wrapper
// The HOC is just saying:
// “Add a label, but pass everything else through untouched.”

// show you how to extend this HOC to add things like badges (New, Closed, Offers) dynamically instead of hardcoding “Open”.
// Alright—now we’ll turn your HOC from a single “Open” label into something flexible and reusable (like real apps do).
// Instead of hardcoding "Open", we’ll pass dynamic labels such as:
// •	🟢 Open
// •	🔴 Closed
// •	🆕 New
// •	💸 Offer
// ________________________________________
// 🧠 Step 1: Make HOC accept a label dynamically
// export function withLabel(Restcard) {
//   return ({ label, ...props }) => {
//     return (
//       <div className="relative">
//         {label && (
//           <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//             {label}
//           </span>
//         )}
//         <Restcard {...props} />
//       </div>
//     );
//   };
// }
// 🔍 What changed?
// •	We extract label from props
// •	Everything else (restaurant, etc.) goes via {...props}
// •	Label is optional → reusable
// ________________________________________
// 🧠 Step 2: Create enhanced component
// const LabeledCard = withLabel(Restcard);
// ________________________________________
// 🧠 Step 3: Use it dynamically in your map
// searchFilter.map((rest) => {
//   let label = "";

//   if (!rest.info.availability.opened) {
//     label = "Closed";
//   } else if (rest.info.avgRating > 4.5) {
//     label = "Top Rated";
//   } else if (rest.info.isNewlyOnboarded) {
//     label = "New";
//   }

//   return (
//     <LabeledCard
//       key={rest.info.id}
//       restaurant={rest}
//       label={label}
//     />
//   );
// });
// ________________________________________
// 🎯 Result
// Now your cards can automatically show:
// •	Closed → if restaurant is not open
// •	Top Rated → if rating is high
// •	New → if recently added
// All using the same HOC.
// ________________________________________
// 💡 Want it even cleaner?
// You can move label logic into a helper:
// function getLabel(rest) {
//   if (!rest.info.availability.opened) return "Closed";
//   if (rest.info.avgRating > 4.5) return "Top Rated";
//   if (rest.info.isNewlyOnboarded) return "New";
//   return "";
// }
// Then:
// <LabeledCard
//   key={rest.info.id}
//   restaurant={rest}
//   label={getLabel(rest)}
// />
// ________________________________________
// 🚀 Big takeaway
// Your HOC now:
// •	✅ doesn’t hardcode UI
// •	✅ works for any label
// •	✅ keeps Restcard clean
// •	✅ mimics real-world patterns (Swiggy/Zomato style badges)
// ________________________________________
// If you want next step, I can show you how to:
// 👉 stack multiple badges (like “Top Rated + 30% OFF”) instead of just one label
// 👉 or animate the badge for better UI feel


// If you many similar things in that you have few looks or has diff things on it then you use HOC
// This HOC'll be created take the normal func and add some features on the specific few and call it 
// -------
// Controlled and Uncontrolled components

// UI is very static it doesn't have a logic on its own, you give some JSX it just stays there,
// UI and Data both are diff part and data is the very imp layer in the app
// All React application has 2 layers
// 1)UI layers 2)Data Layers and this UI layer is powered by data layer
// Basically this data layer consists of our state, local variable, props,
// If you know how to manage your data layer correctly in your app, your application'll be super fast, very performant
// UI layer is JSX 
// Data layer is state, local variable, props, is all modifying the data layer
// Let's see how to manage the data in this episode






// You’re already doing mapping correctly.
// What you were missing is:
// Shared state must live where the list is created
// That’s why we created a localState in the parent component Contact, here Accordion is a child and it needs to share a same variable, that’s why where we map is where we need to make a state
// If we make a useState() in the accordion and we wrote mapping in contact where array element gets a new component like this
// <Accordion/>
// <Accordion/>
// <Accordion/>
// <Accordion/>
// So each gets a state and variable on it's own, they become independent, here is our problem statement is when one opens all other must be closed so these array elements must be dependent on each other, for that same variable, so where you map you need to make a useStatae() variable over there.

// Here’s a sharper version of what you wrote:
// When we map an array, we create multiple instances of a component.
// If each component has its own useState, they behave independently.
// In our case, we want only one accordion open at a time, so all items must depend on a shared state.
// To achieve that, we move the state to the parent (Contact), which is the common owner of all Accordion components.
// Then we pass that state down as props, so all items stay in sync.

// 🔑 One-liner to remember
// If multiple components need to stay in sync → lift the state up.
// ⚡ Bonus insight (this is where people level up)
// This pattern is called:
// 👉 “Lifting State Up” in React
// It’s one of the most important React concepts — you’ll use it everywhere:
// •	accordions 
// •	tabs 
// •	dropdowns 
// •	modals 
// •	filters
// -------
// { openIndex === idx &&
// <div

// className="  text-center  bg-gray-200 py-2 px-3.5 "
// >

// {content}    
// </div>
// }
// here openIndex=== idx && , logic is 
// openIndex initial value is null and idx is number 0 1 2 3 like it goes 
// only openIndex === idx then only you can see the below div which is the content , here 
// null is an object and 0 is number , false only , initially it won't show the below content as it is false, why it is false, 0 is number null is object, 
// so if the openIndex's value gets chnaged a number like 0 1 2 , it'll show the card accordion to it

// <button
// onClick={()=> handleToggle(idx)  }>
// so here when we click we get the idx as where we click and we pass it to handleToggle,

// function handleToggle(index) {
    
// setOpenIndex(openIndex === index ? null : index)

// }
// and we give value to openIndex as openIndex === index ? null : index
// if it has a value means if it is already opened, amke it null if not open
// because the opeining logic is openIndex && idx is false at start , if the user clicks the button, it gets idx which is no. and the same no. goes to openIndex by setOpenInex() 
// and the logic now is openIndex && index = div , 2===2, div 
// as  a parent we have to lift the State up if we wanna control our child component

// Install React Developer Tools extension in chrome
// It shows exactly how long is it taking to render ?, why we need ?   
// When I do the video explanation I can also show how speed and  my performant of my app is.
// in that console we can see in Component UI layer Data Layer LHS RHS
