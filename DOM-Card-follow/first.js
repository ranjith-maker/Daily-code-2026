
const fol = document.getElementById("fol")
const st = document.querySelector("#st")

var check = 0;
fol.addEventListener("click", ()=>{


if(check == 0){
st.innerText ="Friends"
st.style.color ="pink"
fol.innerText = "Followed";
check = 1;

} else {
st.innerText ="Stranger"
st.style.color ="black"
fol.innerText = "Follow";
check = 0

}

})




