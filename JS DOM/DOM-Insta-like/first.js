

const card = document.querySelector("#card");
const icon = document.querySelector("i");


card.addEventListener("dblclick", (ok)=>{

icon.style.opacity = 1;

const rect = card.getBoundingClientRect();

icon.style.left = (ok.clientX - rect.left) +  "px";
icon.style.top = (ok.clientY - rect.top) +    "px";



setTimeout(() => {
    icon.style.opacity = 0
}, 1500);


})








// Sathak - CSS & JS - he used scale, where I used opacity <==> Difference 
// #card i{
// font-size: 40px;
// color: white;
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%,-50%)  scale(0);
// transition: transform 0.2s ease;

// }



// const card = document.querySelector("#card");
// const icon = document.querySelector("i")

// card.addEventListener("click", ()=>{

//     icon.style.transform = " translate(-50%,-50%) scale(1)";
//     icon.style.opacity = 1;
 
//     setTimeout( ()=>{
//    icon.style.opacity = 0;
//     },1000)
    
// })


