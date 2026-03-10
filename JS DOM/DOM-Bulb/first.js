

const bulb = document.getElementById("bul")
const btn = document.getElementById("but")

let polo = 4; 

btn.addEventListener("click", ()=>{
if(polo == 4){
   bulb.style.backgroundColor ="yellow";
   bulb.style.border = "none";
  polo = 3;
} else { 
   bulb.style.backgroundColor = "transparent";
   bulb.style.border = "5px solid rgb(190, 182, 182)";
 polo = 4;
}

});










