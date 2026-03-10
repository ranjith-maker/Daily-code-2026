

const form = document.querySelector("form")

form.addEventListener("submit",(ev)=>{

    ev.preventDefault(); 

    const data = new FormData(form)
    console.log(Array.from(data.keys()));
    
    
    // console.log(Array.from(data.entries()));
//for(let [key,val] of data.entries())
//console.log(key ,val); // ===> it gives an exact key(id in HTML) and value(user entered)

//    const res = document.getElementById("result")
//    res.innerText = `${first.value} ${second.value} is a good boy and his age is ${third.value} `
//    res.style.display = "block"


})


// what if there is a 100 inputs and will I keep selecting one by one ?Not a very good approach right, let's see how,
// We have a best object for this issue, new FormData() object,  const data = new FormData(form) whatever teh data that form has it is being put in new FormData()
// It is stored in a key-value pair, it shows in console iteratable ==> console.log(data.entries()) 
//  we have converted into an array   Array.from()








