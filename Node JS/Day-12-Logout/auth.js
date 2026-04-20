import express from "express"
import User from "../models/user.js"
import cookieParser  from "cookie-parser";
import jwt from "jsonwebtoken"
import userAuth from "../middleware/UserAuth.js"
import bcrypt from "bcrypt"


const authRouter = express.Router()
authRouter.use(cookieParser())


authRouter.post("/register", async (req, res) => {

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


authRouter.post( "/login" , async (req,res)=>{

     try{

    const { emailId, password } = req.body;
 
   const user  = await User.findOne({ emailId : req.body.emailId})
if (!user) {
  throw new Error("Incorrect Email or Password");
}

const isSame = await user.verifyPassword(req.body.password)

if(!isSame){
    throw new Error("Incorrect Email or Password")
}


const token = user.getJwt()

res.cookie("token" , token)

res.send("Loggedin Successfully")
    }catch(err){
        res.send("Error " + err.message)
    }

})



export default  authRouter

// app.post( "/login" , async (req,res)=>{

//      try{

//     const him  = await User.findOne({ emailId : req.body.emailId})
// if (!him) {
//   throw new Error("User not found");
// }
//     // if(!(req.body.emailId === him.emailId)){
//     //     throw new Error("Incorrect Email or Password") 
//     // }

// const isSame = await bcrypt.compare(req.body.password, him.password)

// if(!isSame){
//     throw new Error("Incorrect Email or Password")
// }


// const token = jwt.sign({emailId : him.emailId}, "oppo90", {expiresIn: "2d"} )

// res.cookie("token" , token)

// res.send("Loggedin Successfully")
//     }catch(err){
//         res.send("Error " + err.message)
//     }

// })

authRouter.post("/logout", (req,res) =>{

try {
  
//  res.cookie("token","slkdf97")
// res.cookies("token", null, {expires :  new Date(Date.now()) } )
res.clearCookie("token")
 res.send("Logged out successfully")

} catch (err) {
  res.send("Error" + err.message)
}



} )


// If user logout once, I shouldn't let him use any api, I can't make him call the api end point right… 
// To hit any api end point after login, user has to go through the userAuth to verify his JWT token , so here since cant let him use any other api we can just delete the token when user hits the logout button api 
// When the user hits logout, he comes with logout request as well as the JWT token (cookies) to server, we can just give him one new invalid token, why I said invalid because after that if he tries to make any another request, he comes with the new token but every other API end point uses the token that is generated login's time. So if a client comes with the new token and server verifies the cookies's logout wala token,here we don’t need to generate a new one with jwt we can send cookie a new token, res.cookie("token","slkdf97")
// the server compares it with the old login wala token, both are different, server throws token error. That’s why I said we can generate a new INVALID token 

// after logout I try to make get request it gave me jwt malformed as we changed the cookies

// I just created a new invalid token and send it to cookie, and after logging out when I checked new cookie was there 
// authRouter.post("/logout", (req,res) =>{
// try {
//  res.cookie("token","slkdf97")
//  res.send("Logged out successfully")

// } catch (err) {
//   res.send("Error" + err.message)
// }  } )

// And instead of creating a new token I can also expire the old token like this, and after loggedout when I checked the cookie I couldn’t see any cookie was present in there 
// authRouter.post("/logout", (req,res) =>{
// try {
// res.cookie("token", null, {expires :  new Date(Date.now()) } )
// res.send("Logged out successfully")
// } catch (err) {
//   res.send("Error" + err.message)
// } } )
// What this line mean is expire my cookies now itself
// res.clearCookie("token") - this built in method also works

// •  req.cookies → used to read cookies
// •  res.cookie() → used to set cookies

// What are you really logged out the from your account? , can't I find a loop hole to make a get or post request again ?of course we can make , how ? haven’t cleared the cookies right ? , now if user makes a request he can make it with either invalid or empty column in cookies , how can he do that?
// Before he logsout, if the user goes to network tab - cookies - and copy and saves it, and user logs out, Now the user makes request before hitting send, he's going to the cookie tab and saves the previously copied which was before logged out, now hits the send , now the content appears. All the server wanted was a cookie only right…
// Eg- you got a passport you travelled to US, and again you got a new passport and you travel to US, you can also use the old ones as well, it is still valid 
// What we can do is?
// Now the user copies and saves the cookies token and logs out in the server, Now the server gets the request as logsout with the token and saves the token in DB as blocklist, now whenever server receives a request it'll check the DB what if this token in the blocklist, if it is in the blocklist then it will throw the error, because the previous token in 3 days valid right… user loggsout and can use the previous token to make all the request . 
// but wouldn’t it increase the blocklist in DB ?
// we can just delete in DB as it gest expired 
// but still DB call has to happen right…
// if I keep it in a server itself on RAM and make the expiry as 3 minutes , we can delete it, still we need to traverse the server to delete it
