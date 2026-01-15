
var arr = [
{
    name:"jo",
dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D", 
story:" https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

{
    name:"jop",
dp:"https://images.unsplash.com/photo-1601412436465-922fadda062e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", 
story:" https://images.unsplash.com/photo-1601412436833-1cce6301da96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
},

{
    name:"jo",
dp:"https://plus.unsplash.com/premium_photo-1763734693207-02da9c167549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", 
story:" https://plus.unsplash.com/premium_photo-1668485968590-aff3717c1dbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
},


{
    name:"jo",
dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
story:" https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

{
    name:"jko",
dp:"https://media.istockphoto.com/id/1155357637/photo/portrait-of-beautiful-asian-woman-standing-beside-swimming-pool-outdoor.webp?a=1&s=612x612&w=0&k=20&c=BEtHxb7ZRLa0_U9GpilEkZ4UCCTc4IFLB27ef88lTL4=", 
story:"  https://images.unsplash.com/photo-1629003429449-9155d3d32de4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
}



]

var clutter = ""
arr.forEach((val,idx)=>{
clutter +=` <div class="story"> <img src="${val.dp}"  id="${idx}"
    alt="imgs">  <p class="dp-name">${val.name}</p>  </div>`

})

storiyan = document.querySelector(".storiyan")

fs = document.querySelector(".full-screen")
storiyan.innerHTML = clutter;

storiyan.addEventListener("click", (ev)=>{

fs.style.display ="block"

fs.style.backgroundImage = `url(${arr[ev.target.id].story})`


setTimeout(()=>{

document.querySelector(".full-screen").style.display ="none"

}, 1500)


})



// DP - https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D
// Story - https://plus.unsplash.com/premium_photo-1668485968660-67a0f563d59a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8

// DP - https://images.unsplash.com/photo-1601412436465-922fadda062e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D
// Story - https://images.unsplash.com/photo-1601412436833-1cce6301da96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D

// DP - https://plus.unsplash.com/premium_photo-1763734693207-02da9c167549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D
// Story - https://plus.unsplash.com/premium_photo-1668485968590-aff3717c1dbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8


// DP -https://images.unsplash.com/photo-1571071481471-a20b04ecd6ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D
// Story - https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D


// DP - https://media.istockphoto.com/id/1155357637/photo/portrait-of-beautiful-asian-woman-standing-beside-swimming-pool-outdoor.webp?a=1&s=612x612&w=0&k=20&c=BEtHxb7ZRLa0_U9GpilEkZ4UCCTc4IFLB27ef88lTL4=
// Story - https://images.unsplash.com/photo-1629003429449-9155d3d32de4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D


