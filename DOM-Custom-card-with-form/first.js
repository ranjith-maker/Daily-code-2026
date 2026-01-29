
// let startTime
// const ini = document.querySelector("input")
// ini.addEventListener("keydown", (ev) =>{

//     startTime = ev.timeStamp
    
// })

// ini.addEventListener(("keyup"), (eve)=>{
// let endTime = eve.timeStamp 

// let total = endTime - startTime 

// let totalSecs = total*1000
// let totalMillisecs = total / 1000

// console.log(totalSecs, "secs");
// console.log(totalMillisecs, "ms");
// console.log(totalSecs );
// })


// This gives how long it took to type in a input field

// const ini = document.querySelector("input")
//  let startTime
// ini.addEventListener("focus", ()=>{
//  startTime = new Date()
// })

// ini.addEventListener("blur", ()=>{

//     let endTime = new Date()

// let total = (endTime - startTime) / 1000
// console.log(total, "seconds");

// })


// It'll print what we type in the input field
// const ini = document.querySelector("input")

// ini.addEventListener("input",(ev)=>{
// if(ev.data !== null && ev.data !== " ")
//     console.log(ev.data);
    
// })



// Selecting from Options and showing it

// <h3>Select your mobile phones</h3>

// <select>
//     <option selected disabled>Choose your device</option>
//     <option value="Mi">Xio MI</option>
// <option value="Samsung">Samsung</option>
// <option value="Google Pixel">Pixel</option>
// <option value="onePlus">One+</option>
// <option value="Hp">HP</option>
// </select>

// const sel = document.querySelector("select")
// const h = document.querySelector("h3")

// sel.addEventListener("change", (ev)=>{
// const val  = ev.target.value
// h.textContent = (`${val} is your phone`)
// })


// File uploading with custom way, ususlaly we do with input tag and can do it in HTML itself,
// but we've here used button adn gave input as click() and guess what it opened 
// change fires only AFTER user selects a options


// HTML
// <input type="file">
// <button> Upload File </button>

// CSS
// input{
//     display: none;
// }

// button{
//     padding: 1rem;
//     border: none;
//     border-radius: 10px;
//     background-color: rgb(20, 39, 33);
// }

// button:hover{
//     background-color: #01aa72;
// }

// JS

// const btn = document.querySelector("button")
// const inp = document.querySelector("input")

// btn.addEventListener("click",(ev)=>{

// inp.click()

// })

// inp.addEventListener("change", (ev)=>{

// let file = ev.target.files[0]

// if(!file){
//     btn.textContent = "Upload any 1 file"
//     return
// }
//     btn.textContent = file.name 

// })



// here in this form whatever we submit it'll create a card here like readymade, immediate photo as you click you get it like old camera
 

let form = document.querySelector("form");
let inp = form.querySelectorAll("input");
let main = document.getElementById("main")

form.addEventListener( "submit" ,(ev)=>{
    
    ev.preventDefault()

let card = document.createElement("div")
card.classList.add("card")

let profile = document.createElement("div")
profile.classList.add("profile")
let img = document.createElement("img")
img.setAttribute("src", inp[3].value )
img.setAttribute("alt", "profile-image")

let h3 = document.createElement("h3")
h3.textContent = inp[0].value

let h4 = document.createElement("h4")
h4.textContent = inp[1].value

let h5 = document.createElement("h5")
h5.textContent = inp[2].value

let p = document.createElement("p")
p.textContent = inp[4].value

profile.appendChild(img)
card.appendChild(profile)
card.appendChild(h3)
card.appendChild(h4)
card.appendChild(h5)
card.appendChild(p)

main.appendChild(card)

form.reset()

})


// 3 Critical things learnt from this Form project
// a) Always see wherte you're getting queryselectors from, if yu wanna choose a list alwys pick their as a queryAll
// b)if it is a queryALl then it is a Nodelist, nodelist are array like, you can easily access it like input[0].value
// c)when you use a form use submit  ev. perventdefault at start anda form.reset()at teh end


