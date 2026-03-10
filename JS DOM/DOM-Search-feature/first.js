
var arr = [ 

{name:"petals" , image:"https://images.unsplash.com/photo-1523641264567-9d981bbc246f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}   ,
{name:"tiger" , image:"https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fHww"},
{name:"crowd" , image:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name:"fruits", image:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXRzfGVufDB8fDB8fHww"}, 
{name:"web-design", image : "https://plus.unsplash.com/premium_photo-1681488408867-66ffd3c8339d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"} ,
{name:"web-design", image : "https://plus.unsplash.com/premium_photo-1681488408867-66ffd3c8339d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"}, 
{name:"petals" , image:"https://images.unsplash.com/photo-1523641264567-9d981bbc246f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ,
{name:"crowd" , image:"https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]

function showCards(){

const show = arr.map(val=>  `<div class="card"> 
<img src="${val.image}" alt="all-image"> <div class="caption">${val.name}</div>
</div>`).join("")

const box = document.querySelector(".container").innerHTML = show;

}
showCards();
   

const input = document.getElementById("input")
const overlay = document.querySelector(".overlay")

function searchfunc(){

 input.addEventListener("focus", ()=>{
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
 });

input.addEventListener("blur", ()=>{
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
});


}

searchfunc();



const suggestions = document.querySelector(".suggestions")

input.addEventListener("input", ()=>{
const value = input.value.toLowerCase();

if(!value ){
    suggestions.style.display = "none";
    return;
}

const filtered = arr.filter(val=> val.name.toLowerCase().startsWith(value));

suggestions.innerHTML = filtered.map(item =>`<div>${item.name}</div>` ).join("");

suggestions.style.display = filtered.length ? "block" : "none";

suggestions.addEventListener("click", (e)=>{
if(e.target.tagName === "DIV"){
    input.value = e.target.textContent
    suggestions.style.display = "none"
}

})


})


// const suggestionsBox = document.querySelector(".suggestions");

// input.addEventListener("input", () => {
//   const value = input.value.toLowerCase();

//   if (!value) {
//     suggestionsBox.style.display = "none";
//     return;
//   }

//   const filtered = arr.filter(item =>item.name.toLowerCase().startsWith(value)
//   );

//   suggestionsBox.innerHTML = filtered.map(item => `<div>${item.name}</div>`).join("");
//   suggestionsBox.style.display = filtered.length ? "block" : "none";
//   //suggestionsBox.style.display = "block";

// suggestionsBox.addEventListener("click", e => {
//   if (e.target.tagName === "DIV") {
//     input.value = e.target.textContent;
//     suggestionsBox.style.display = "none";
//   }
// });

// });





