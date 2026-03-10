
const form = document.querySelector("form")
const expense = document.getElementById("expname")
const price = document.getElementById("price")
const addallexp = document.getElementById("addallexp")
const totalpri = document.querySelector(".totalpri")


let expenses =   JSON.parse( localStorage.getItem("expenls") )  || [];
let totalVal = 0;


expenses.forEach(exp => renderAll(exp) )

form.addEventListener("submit", (ev)=>{
ev.preventDefault()


const expname = expense.value.trim()
const expPrice= Number(price.value)


const newExp = {
id: Date.now(),
name : expname,
price : expPrice

}

expenses.push(newExp)
saveAll()
renderAll(newExp)

form.reset()

})


function renderAll(exp){


const li = document.createElement("li")
const spa = document.createElement("span")
spa.textContent = `${exp.name} - $${exp.price}`
const delbtn = document.createElement("button")

delbtn.textContent = "Delete"

totalVal += exp.price;

updateUI()
saveAll()

delbtn.addEventListener("click", ()=>{

totalVal -= exp.price
li.remove()

expenses = expenses.filter(p => p.id !== exp.id)
updateUI()
saveAll()


})

 li.append(spa , delbtn)

addallexp.append(li)

}

//UI Part 

function updateUI() {    
totalpri.textContent = totalVal === 0 ? "NO Expenses" : `Total is ${totalVal} `

}


//LS Part
function saveAll(){
 localStorage.setItem("expenls", JSON.stringify(expenses) )

}


