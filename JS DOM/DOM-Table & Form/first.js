const tbl = document.querySelector("table")

let selectedrow = null;


tbl.addEventListener("click",(ev)=>{

let row = ev.target.closest("tr")

if( !row || row.querySelector("th") ) return 

if(selectedrow){
selectedrow.style.backgroundColor = "";
}

row.style.backgroundColor = "skyblue"


selectedrow = row

let name = row.children[0].textContent

console.log(name);


})

document.addEventListener("click" , (ev)=>{

let id = ev.target.dataset.togId     

if(!id) return

let show = document.getElementById(id)

show.hidden = !show.hidden

const form = document.querySelector("form")
const money = document.getElementById("money")

form.addEventListener("submit" , (ev) =>  {
ev.preventDefault()


let val = money.value.trim()

if(!val) return


alert(`Thanks for your contribution $${val}`)

form.reset()

})



})








 
// const tbl = document.querySelector("table");

// tbl.addEventListener("click", (ev) => {

// let cell = ev.target.closest("td")

// if(!cell) return

// let row = cell.parentElement

// //since queryselector will get us the 1st ones we got name as it is the first one in td's...
// let name = row.querySelector("td").textContent
// console.log(name);




// })










