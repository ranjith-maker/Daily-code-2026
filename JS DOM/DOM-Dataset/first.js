// Always give id to what you click so that you can get it by adding dynamically in forEach((val, idx))
// this idx can be assigned to that id 
 

let prod = [
  { name: "Key Board", price: 500, city: "Mumbai", msg:"This is made in Mumbai" },
  { name: "Mouse", price: 300, city: "Delhi", msg:"This is made in Delhi" },
  { name: "Monitor", price: 8000, city: "Pune", msg:"This is made in Pune" },
  { name: "Laptop", price: 45000, city: "Bangalore", msg:"This is made in Bangalore" },
  { name: "Headphones", price: 1500, city: "Chennai", msg:"This is made in Chennai" },
  { name: "Webcam", price: 2200, city: "Hyderabad", msg:"This is made in Hyderabad" },
  { name: "Speaker", price: 3200, city: "Kolkata", msg:"This is made in Kolkata" },
  { name: "USB Hub", price: 700, city: "Noida", msg:"This is made in Noida" },
  { name: "Microphone", price: 2800, city: "Gurgaon", msg:"This is made in Gurugram" },
  { name: "Chair", price: 6500, city: "Indore", msg:"This is made in Indore" }
];

const container = document.querySelector(".container");
const ans = document.getElementById("ans");

// Dynamically create cards
let clutter = "";
prod.forEach(val => {
  clutter += `
    <div class="card">
      <h3>${val.name}</h3>
      <p>Price: ${val.price}</p>
      <p>City: ${val.city}</p>
      <button class="buy-btn" data-msg="${val.msg}">Buy</button>
    </div>
  `;
});

container.innerHTML = clutter;

// Event delegation for all buy buttons
container.addEventListener("click", (ev) => {
  if(ev.target.tagName === "BUTTON") {            
    ans.innerText = ev.target.dataset.msg; // Show the message from dataset
    console.log(ev.target.dataset.msg); // see in console too
  }
});


// So in dataset, 
// In HTML
// Where –clickable item
// What – Array keys
// In JS
// In click, Dynamic Clutter you'll add,  data-msg="${val.msg} this to button where you click
// Event listener gets easy
// ev.target.dataset.msg









// const buttons = document.querySelectorAll(".buy-btn");
// const message = document.getElementById("message");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (ev) => {
//     const id = ev.target.id;               // ID from button
//     const product = prod.find(p => p.id == id); // find product in array
//     message.innerText = product.msg;       // show message
//   });
// });





