// Whenever you're asked to build anything, planning is first, once we planned code part becomes very easy
//  You should exactly know what you're gonna build, UI design, layout wireframe, 

// Header
// Logo
// Navbar links
// Body
// Search Bar
// Restro cards 
//   -Img
//   -Name of
//   - Cuisines
//   -ETA
//   -Rating

// footer
// Copyright
// Links

// A component is just a JS function to return a JSX code

// You can pass any no.of props , your component'll take it as an object and react parse it


// This Swiggy API concept is known as config driven UI, what is config deroiven UI
// When you open a swiggy app, you see restaurant in cards having offers. This cards vary city to city, the card carousel may look different, Chennai might have no offers some times.
// Does that we need to build a diff UI app for Bangalore, diff website for Mumbai ?
// Our website is driven by data, this is knows as Config Driven UI.
// What is basically CDUI is controlling our UI, how the UI looks like using our data, using a config, where that config comes from ? It comes from Backend, this is the latest practice that every company uses be it Amazon, Zepto, 
// No, companies like Swiggy or Amazon are not building separate apps for each city. That would be unmaintainable chaos.
// What they actually build is:
//  One UI system + dynamic data from backend
// UI is a combination of UI code (components) + data/config from backend
// •	UI Layer (React) → defines how things can look 
// •	Data/Config Layer (API) → decides what actually shows
// Why companies use CDUI
// •	No need to redeploy frontend for small UI changes 
// •	Backend controls experiments (A/B testing) 
// •	Region-based customization 
// •	Faster feature rollout 
// This is heavily used in:
// •	Uber 
// •	Paytm 
// •	Zepto 


// ⚠️ Important clarification
// CDUI does NOT mean:
// ❌ Backend sends full HTML/UI
// ❌ No frontend logic needed
// It means:
// ✅ Backend sends instructions/config
// ✅ Frontend interprets and renders

// 💡 Simple analogy
// Think of React UI as a TV
// And backend config as a remote control
// Same TV, different channels.


// We have written our UI once in Bend with API and according to the data which is coming from bg my UI is getting changed, 

// When Akshay worked in paytm, Uber, he wrote config driven UIs
// If we want to have red color bg in Mumbai, green in Chennai, Blue in Bangalore, we can write it in the config object itself
// UI is powered by data only , UI layer, data layer is both are imp, in React application

// Swiggy is using Cloudinary CDN, where the images are hosted
//  What is key ? when we iterate an array using map , each items in the array should have an unique representation because each of them should be considered as a component 
// If not, it'll re render everything inside a container



