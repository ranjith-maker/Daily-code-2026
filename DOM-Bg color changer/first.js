
// const rdbtn = document.getElementById("red")
// const blbtn = document.getElementById("blue")
// const bubtn = document.getElementById("burl")
// const grbtn = document.getElementById("green")
// const pubtn = document.getElementById("purple")
// const body = document.querySelector("body")

// rdbtn.addEventListener("click", ()=>{
//     body.style.backgroundColor = "red"

// } ) 


// blbtn.addEventListener("click", ()=>{
//     body.style.backgroundColor = "blue"

// } )


// bubtn.addEventListener("click", ()=>{
//   body.style.backgroundColor = "burlywood"

// } )


// grbtn.addEventListener("click", ()=>{
//   body.style.backgroundColor = "green"

// } ) 



// pubtn.addEventListener("click", ()=>{
//   body.style.backgroundColor = "purple"

// } ) 


// const btn = document.querySelectorAll("button")
// const body = document.querySelector("body")


// btn.forEach((val)=>{

//     val.addEventListener("click", ()=>{
//     body.style.backgroundColor = val.id

// } )

// })

// let's say if there is a 100 buttons will you keep accessing and adding evlistener?, that'd be too much of work

// so we need to access all the buttons in 1 go, for that we can use queryall and forEach loop

// console.log(val.id) //--> when you click the boxes you get the id of each boxes and those are their own colors, with that we know what to write in below  
// body.style.backgroundColor = val.id  ---> the key here is id name is exactly the color of the boxes, no speeling change in both idname and the color we want
     
//2nd way gave us small writing it takes too much space in memeory and JS 'll down, 
//we optimise it by event bubbling and event capturing








// const gp = document.getElementById("grand");
// const pare = document.getElementById("parent");
// const chill = document.getElementById("child");
     
// //Event Bubbling and Event Capture

// chill.addEventListener("click"  , (ev)=>{
//     //console.log("child is clicked")
//     //console.log(ev.target);
     
// })

// pare.addEventListener("click", (ev)=>{
//    // console.log("Parent is clicked");
//     //  console.log(ev.target);
//     // console.log(ev.currentTarget)
// })

// gp.addEventListener("click",(ev)=>{
//    // console.log('Grandparent is clicked');
//      console.log(ev.target);
     


// } )



// now how to know what is happenning event bubbling or event capturing 
// y default Event Bubbling will happen yes bBy default Event Bubbling will tak place that bottom to top approach, Child ==> PArent ==> Grandparent 

// If we want Event Capturing how to do that ?
// when we addEventListener()3 things can be insidde this bracket, 1 ad 2 we know 1- what type of event , whether click, mousemove,enter,leave,etc..
// 2nd is CBF call back function after CBF, 3rd is True or false, show you below exactly 
// addEventListener("clcik", ()={
// }, true) ==> after CBF, if you put "true" Event capture takes place, we ususally keep it empty, so false, thats why by default it is Event Bubbling is taking plaec in the browser  



// him and his parent only 2 element be it all true elements is or 1 element is true
// Gp is false, Parent is true,Child is false, now wehn I clicked child, child is false --> EB --> usual is Bottom to top approach, 
//  and Parent came first, as it is true  why event capturing ,and his child comes in second it bubbles, parent'll come,
//  since it has come,bubbled higher  Gradparent comes
// Now when I click Parent, first parent second Grandaprent, 
// what we get from here is true comes first as it is capturing top to down and then the parent, 
// why Event bubble or capture gives only 2, him and his-parent, if the clicked element has more parent more it gives                                                                                                             
//
///
//
//
//
//
//
//
//
//
//
//
//



const root = document.getElementById("root");
const body = document.querySelector("body")

root.addEventListener(("click" ), (ev)=>{

    //console.log(ev.target.className);
    
    if(ev.target.className === "okok")

body.style.backgroundColor = ev.target.id;



})



//     if(ev.target.tagName === "BUTTON")
// body.style.backgroundColor = ev.target.id;
// with this condition we're telling, if event.target;s tagname is Button then print body bgclr to ev.target.id,  id is the color name, those colrs will be printed

//     console.log(ev.target.className); ===> you can always check with console log in browser what to give exactly
//     
//







































