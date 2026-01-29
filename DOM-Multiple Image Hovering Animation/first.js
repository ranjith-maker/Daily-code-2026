
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const img = box.querySelector("img");
  let rect;

  box.addEventListener("mouseenter", () => {
    rect = box.getBoundingClientRect();
    img.style.opacity = 1;
  });

  box.addEventListener("mousemove", (e) => {
     img.style.left = e.clientX - rect.left + "px"
     img.style.top = e.clientY - rect.top + "px"


  });

  box.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
  });
});












//Screen position − Box position = Inside-box position
// | Thing                  | What it really means                         |
// | ---------------------- | -------------------------------------------- |
// | `clientX / clientY`    | Mouse position on **screen**                 |
// | `rect.left / rect.top` | Box position on **screen**                   |
// | `client − rect`        | Mouse position **inside box**                |
// | `img.width / height`   | Used to **center image**, not position logic |
//when I hover the pointer comes in the image


// boxes.addEventListener(("mouseenter"), (ev)=>{

//   if(ev.target === boxes)
// img.style.opacity = ev.target.1; 

// })



// const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//   const img = box.querySelector("img");
//   let rect;

//   box.addEventListener("mouseenter", () => {
//     rect = box.getBoundingClientRect();
//     img.style.opacity = 1;
//   });

//   box.addEventListener("mousemove", (e) => {
//     const x = e.clientX - rect.left - img.offsetWidth / 2;
//     const y = e.clientY - rect.top - img.offsetHeight / 2;

//     // img.style.transform = `translate(${x}px, ${y}px)`;   
//   });

//   box.addEventListener("mouseleave", () => {
//     img.style.opacity = 0;
//   });
// });





const main = document.querySelector(".main");

let activeBox = null;
let activeImg = null;
let rect = null;

main.addEventListener("mouseover", (e) => {
  const box = e.target.closest(".box");
  if (!box || !main.contains(box)) return;

  // prevent repeated firing when moving inside same box
  if (activeBox === box) return;

  activeBox = box;
  activeImg = box.querySelector("img");
  rect = box.getBoundingClientRect();

  activeImg.style.opacity = 1;
});

main.addEventListener("mousemove", (e) => {
  if (!activeImg || !rect) return;

  activeImg.style.left = e.clientX - rect.left + "px";
  activeImg.style.top = e.clientY - rect.top + "px";
});

main.addEventListener("mouseout", (e) => {
  const box = e.target.closest(".box");
  if (!box || box !== activeBox) return;

  activeImg.style.opacity = 0;

  activeBox = null;
  activeImg = null;
  rect = null;
});




