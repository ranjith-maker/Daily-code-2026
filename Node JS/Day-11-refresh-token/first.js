
import express from "express"
import main from "./database.js";
import User from "./user.js"
import ValidateUser from "./utils/ValidateUsers.js";
import bcrypt from "bcrypt"
import cookieParser  from "cookie-parser";
import jwt from "jsonwebtoken"
import userAuth from "/middleware/UserAuth.js";



const app = express()

app.use(express.json())
app.use(cookieParser())

app.post("/register", async (req, res) => {

  try {
    //first I wanna do API  level validation
    ValidateUser(req.body)

//before putting it into the DB, let me convert the password into Hash
let pass = req.body.password
req.body.password = await bcrypt.hash(pass,10)

//putting hashed password in the DB
    await User.create(req.body);
    res.send("User registered details successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});


app.post( "/login" , async (req,res)=>{

     try{

    const him  = await User.findOne({ emailId : req.body.emailId})
if (!him) {
  throw new Error("User not found");
}
    // if(!(req.body.emailId === him.emailId)){
    //     throw new Error("Incorrect Email or Password") 
    // }

const isSame = await bcrypt.compare(req.body.password, him.password)

if(!isSame){
    throw new Error("Incorrect Email or Password")
}


const token = jwt.sign({emailId : him.emailId}, "oppo90", {expiresIn: "2d"} )

res.cookie("token" , token)

res.send("Loggedin Successfully")
    }catch(err){
        res.send("Error " + err.message)
    }

})




app.get( "/user", userAuth, async(req,res)=>{

try{

const ans = await User.findOne({ emailId : req.emailId })
res.send(ans)

} catch (err){ res.send("Error" + err.message) }

})


app.delete("/user/:id", userAuth,  async (req,res) =>{

try{

 await User.findByIdAndDelete(req.params.id)
res.send("Deleted successfully" )

} catch (err) {
    res.send("Error" + err.message)
}

})



app.patch( "/user" , userAuth , async(req,res)=>{

try {
     const {id, ...update} = req.body
    await User.findByIdAndUpdate(id,update, {runValidators : true  } )
res.send("Updated successfully")


} catch (err) {
    res.send("Error" + err.message)
}

})



main()
.then(()=>{

    console.log("Connected DB");
    app.listen(2000 , ()=>{
        console.log("Listening at 2000")
        
    })
    

})
.catch((err)=>console.log(err) )






//{ emailId: 'salsil@gmail.com', iat: 1776498139 } it sends a payload to us 


//    "emailId": "salsil@gmail.com",
//    "password": "sallysillY@%@$0)",

/*
after login, if user sends any request as a server I'll first expect what if he has the access token or not?
and how will I do that in code step by step, First I take the access token which was stored in cookies 
const {token} = req.cookies,
 if he doesnt have then I'll throw the error
if(!token){
    res.status(401).send("Token is missing")
}
If he has access token , then I 'll verify it by the payloads content,
const payload = jwt.verify(token, "oppo90"  ) I use jwt.verify just lik becrypt .compare to verify password entered in client side is same and DB password is same
const {emailId} = payload
if(!emailId){
    throw new Error("Id is missing")   
}
and then we let him do what the request is
}
const ans = await User.findByOne({emailId})
res.send(ans)

} catch (err){ res.send("Error" + err.message) }




const {token} = req.cookies

if(!token){
    res.status(401).send("Token is missing")
}

//if user has token then we'll verify it
const payload = jwt.verify(token, "oppo90"  )
//alternative- we'll learn ;ater     const payload = jwt.verify(token, process.env.JWT_SECRET); Secret should NOT be hardcoded
//you verify by using payload's content
const {emailId} = payload
if(!emailId){
    throw new Error("Id is missing")
    
}

app.get( "/user/:id" , async(req,res)=>{

try{
//we're checking that if the user has the token
const {token} = req.cookies

if(!token){
    res.status(401).send("Token is missing")
}

//if user has token then we'll verify it
const payload = jwt.verify(token, "oppo90"  )
//alternative- we'll learn ;ater     const payload = jwt.verify(token, process.env.JWT_SECRET); Secret should NOT be hardcoded
//you verify by using payload's content
const {emailId} = payload
if(!emailId){
    throw new Error("Id is missing")
    
}

const ans = await User.findByOne({emailId})
res.send(ans)

} catch (err){ res.send("Error" + err.message) }


})

REFRESH TOKEN
The Problem 
I wouldn’t be able to invalidate the token after user changes his password if I didn't mention the expiry date. To tackle if I keep the expiry date as 30mins or even 1 day, the user has to login every 30/1day using username and password, and the experience went down already.
 To solve this problem, This is where Refresh token comes in
 When the user logins for the first time entering username and password let the server generate 2 tokens 
Access Token - 30 mins
Refresh Token - Refresh token also keeps the info od access token and
after every 30mins you can generate the access token. 
Now the server sends both tokens to the client, clients takes it and after 30mins client makes a new request to the server, client requests with refresh token only, Now server understands the it is refresh token and since refresh token has info about the Access token the server generates the access token and sends the both, it'll keep repeat for 7 days as refresh token expiry date is 7 days, and after 7 days what happen ? should the client login with the username and password again ?
This is the speciality of the refresh token, as the user makes a request after 7 days, new refresh token will be created, and stored in DB, it'll be like an automation, once created , server takes care of it.
Now Refresh token and Access token both got stolen, hacker sees it, makes request like normal day, client gotta know that his a/c was hacked, so now he changes password again, as the client changes the password, your refresh token gets invalidated, but access token stays the same, now the hacker can use your id for 30mins only after client change the password.


The contents of the refresh token is 
A Random string, username as who's refresh token is this and will be saved in DB
RACG@876 as a hashcode
rohit_negi
 7 days   
I asked Ai this ?

your answer
🔹 2. With rotation (recommended)
Client sends refresh token
Server:
Validates it
Deletes old refresh token from DB
Creates:
New access token
New refresh token
Sends both
👉 So:
Every refresh call → both tokens change

I set access token expiry is 30 mins 
Refresh token is 7 days 

after 1 hr. I make a request as a client, now my access token is expired, I can request only with the refresh token, so I'll get a new of both tokens right ?  








*/