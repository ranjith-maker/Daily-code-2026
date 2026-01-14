

const btn = document.querySelector("button")
const main = document.querySelector("main")

btn.addEventListener("click", ()=>{

    const box = document.createElement("div")
    main.appendChild(box)

  box.style.height = "100px"
  box.style.width = "100px" 

  const c1 = Math.random()*256
  const c2 = Math.random()*256
  const c3 = Math.random()*256

  box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`
  box.style.borderRadius = 10 + "px"

   const x = Math.random()*100
   const y = Math.random()*100 
   const rot = Math.random()*360  

box.style.position = "absolute"  
box.style.left = x + "%"
box.style.top = y + "%"
box.style.rotate = rot + "deg"


    setTimeout(()=>{
      box.remove()
    },3000)


}  )



// Select it by using the query 
// btn.addEventListener 
// createElement
// append it to parent 
// Give = H&W 
// For colors - give Math.random
// For position - give Math.random - left top rotate(deg)
// setTimeout = to be gone





// It is Letters, same HTML, CS, just comment out the above JS

// const btn = document.querySelector("button")
// const main = document.querySelector("main")

// btn.addEventListener("click", ()=>{

//     const h1 = document.createElement("h1");
//     main.append(h1)
// const arr = ["I am in Tamil Nadu", "I am in Coimbatore",  "My city is Chennai", "We are in India", "I am learning Programming"]
// const rn = Math.floor(Math.random()*arr.length)
// h1.innerHTML = arr[rn]

//     // console.log(arr[rn])

//    const x = Math.random()*70
//    const y = Math.random()*70
//    const rot = Math.random()*360
//    const scl = Math.random()*2

// h1.style.position = "absolute"  
// h1.style.left = x + "%"
// h1.style.top = y + "%"
// h1.style.rotate = rot + "deg"
// h1.style.scale = scl 
// h1.style.color ="burlywood"
// // h1.style.whiteSpace = "nowrap";

// })























