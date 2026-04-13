const { log } = require("console")
const express = require("express")

const app = express()

// app.use("/user" , (req,res,next)=>{

// console.log("first");
// next()
// })

// app.use("/user" , (req,res,next)=>{
// console.log("second");
// next()
// } )

// app.use((req,res,next)=>{

// console.log("third");
// next()    
// })

// app.use("/user",  (req,res)=>{

// res.send("Am a four, and I can resolve this")
// console.log("fourth");


// })

app.use( "/user" , (req,res,next)=>{

    console.log( `${Date.now()} , method is ${req.method} , url is  ${req.url}`);
    next()
    
})

app.get( "/user",  (req,res)=>{

    res.send("Info about User")
})


app.post( "/user",  (req,res)=>{

    res.send("Info is Saved")
})


app.delete( "/user",  (req,res)=>{

    res.send("Info is deleted")
})



app.listen(3000,()=>{
    console.log("running in 3000");
} )




/*
Now lets see the use case of the Middleware
now, when I go to postman, localhost:/3000/user and make GET POST DELETE request, respind comes for each as each has res.send("...")

we know that app.use() accepts any type of request, so if we keep it in above like this and 

so there are 3 request, what we said, we should logging their type,time url all right, if i do it fo reach one it'll be tiresome, instaed I can use use app.use and this is where the middleware comes and solves
that middleware function isnt gonna respond anything it just helps us to pass to the next function, so we can log it over there itself using app.use() also takes all teh request if you write it above as express js goes by order

what if I need to go to instagram and delete the post, or post a new post or write a bio, before anything it'll ask us to login right? just when I go to insta doesnt mean it gives access to all that,
and also anything I need to do I need to verify it is me who is aksing to post,delete,patch]
this is where Authentication and Authorizastion comes in  and instaed of writing middleware in all, we cam simply write it above , middleware helps us in Authentication and Authorization as well
IN google , when we try to change our account password, we make patch request, it'll verify first, why because it wants to know is it really me, if it is me, I know my old password and when I enter my old ones google knows its me,if I write incorrect old password then google knows the request came from different user just the device is same
for this we can use Authentication

if I dont use this middleware concept then  I need to use in all fucntion

when you are using middleware , the next function ROUTE "/user"  this has to be same so that it works
middleware is not security, it helps us not to repeat our code in all function

 */




