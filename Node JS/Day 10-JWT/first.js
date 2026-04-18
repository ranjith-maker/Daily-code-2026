
import express from "express"
import main from "./database.js";
import User from "./user.js"
import ValidateUser from "./utils/ValidateUsers.js";
import bcrypt from "bcrypt"
import cookieParser  from "cookie-parser";
import jwt from "jsonwebtoken"
import userAuth from "./utils/middleware/UserAuth.js";



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









*/