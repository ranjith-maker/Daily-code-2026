




const express = require("express");

const app = express()

app.listen(4000, ()=>{
    console.log("running");
    
} )


app.get( "/user" , (req,res)=>{
res.send({
    name : "oppo",
    display  : "mobile"
})
})





/*

I want to send this information in backend, if I want to send info, what method should I use ? POST
name : "John" , age : 20


This is how you write POST method
const response = await fetch("https://api.example.com/data" , {

method : "POST",

headers : {
  "Content-Type" : "appliccation/json"  
},

body : JSON.stringify({ name : "John" , age : 20  })

});



In the browser if I write, http://localhost:4000/user , I get Hello Coder Army
I can do it as a client but I cant use the same with PATCH,PUT methods , because here I need to send gteh data to the server
I need to build a whole frontend for that, it might get complex, now as we're learning backend we focus on Backend only
To rescue us, this is where the POSTMAN comes into the picture 



JSON and Java script object looks the same
Lets study the GET method now 
app.listen(4000, ()=>{
    console.log("running");
    } )

app.get( "/user" ,   (req,res)=>{
res.send("Hello Coder Army")
})

Why we use GET method, to fetch data from the sever
Go to Browser  Inspect - network tab - refresh the page 

Your requested url is there, user, in this case 
Request URL        http://localhost:4000/user
Request Method   GET



const response1 = await fetch("https://api.example.com/data" , {

method : "POST",

headers : {
  "Content-Type" : "application/json"  
}, 

body : JSON.stringify({ name : "John" , age : 20  })

});

const response2 = await fetch(" ", {

method : "PATCH",    
headers : {
    "Content-Type" : "application/json"

},
body : JSON.stringify({age : 22})

})



