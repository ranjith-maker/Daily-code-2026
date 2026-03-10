
var main = document.querySelector("#main")

var crsr = document.querySelector(".curs")

var h1 = document.querySelector("h1")

h1.addEventListener("mousemove",(hay)=> {
  crsr.style.opacity = 1;
  crsr.style.left =hay.x +"px"
  crsr.style.top =hay.y +"px"



})

h1.addEventListener("mouseleave", ()=>{

  crsr.style.opacity = 0;


})











