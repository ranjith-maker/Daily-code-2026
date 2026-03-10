
// const div1 = document.createElement("div");

// for(let i = 1; i<100; i++){ 

// const pa = document.createElement("p")
// pa.innerText ="This is a para" + i;
// pa.addEventListener("click", ()=>{

//     console.log("this is paragraph")

// })

// div1.appendChild(pa);
// }





// const div1 = document.createElement("div");

// function para(ev){
//     console.log(ev.target.innerText);
 
// }

// div1.addEventListener("click", para);

// for (let i = 1; i < 101; i++) {
//     const pa = document.createElement("p");
//     pa.innerText = "This is para " + i;
//     div1.appendChild(pa);
// }

// document.body.appendChild(div1);





const div1 = document.createElement("div");

for (let i = 1; i < 101; i++) {
    const pa = document.createElement("p");
    pa.innerText = "This is para " + i;
    pa.dataset.index = i;
    div1.appendChild(pa);
}
// div1.addEventListener("click", (event) => {
//   if (event.target.tagName === "P") {
//     console.log("this is para " + event.target.dataset.index);
//   }
// });

document.body.appendChild(div1);


div1.addEventListener("click", (event) => {
  const para = event.target.closest("p"); // find the nearest <p> ancestor
  if (!para || !div1.contains(para)) return; // make sure it's inside div1

  console.log("this is para " + para.dataset.index);
});






// for (let i = 1; i < 101; i++) {
//   const pa = document.createElement("p");
//   pa.innerText = "This is para " + i;
//   pa.dataset.index = i; // store i
//   div1.appendChild(pa);
// }




// // Add a single event listener to the parent div
// div1.addEventListener("click", (event) => {
//     // Check if the clicked element is a <p> tag
//     if (event.target.tagName === "P") {
//         console.log("this is a para"+ i);
        
//    // Extract number from "This is para X"
//     }
// });

// document.body.appendChild(div1);

