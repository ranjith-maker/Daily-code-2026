
import express from "express"
import main from "./database.js";
import User from "./models/user.js"
import ValidateUser from "./utils/ValidateUsers.js";
import bcrypt from "bcrypt"
import cookieParser  from "cookie-parser";
import jwt from "jsonwebtoken"
import userAuth from "./middleware/UserAuth.js";
import "dotenv/config";
import authRouter from "./routes/auth.js";
import userWorkRouter from "./routes/userwork.js";
import { Redisclient } from "./config/redis.js";
import ConnectRedis from "./config/redis.js";
import rateLimit from "./middleware/rateLimit.js"


const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(rateLimit)



app.use("/auth" , authRouter)

app.use("/user", userWorkRouter)


const initializeConnection = async()=> {

    try {
        
await Promise.all([ main() , ConnectRedis()])

    const PORT = process.env.PORT 
    app.listen( PORT,()=>{
        console.log("Listening at", PORT);
        
    }   )

    } catch (err) {
        console.log("Error" + err );
        
    }}


 
initializeConnection()







/*



If user logout once, I shouldn't let him use any api, I can't make him call the api end point right… 
To hit any api end point after login, user has to go through the userAuth to verify his JWT token , so here since cant let him use any other api we can just delete the token when user hits the logout button api 
When the user hits logout, he comes with logout request as well as the JWT token (cookies) to server, we can just give him one new invalid token, why I said invalid because after that if he tries to make any another request, he comes with the new token but every other API end point uses the token that is generated login's time. So if a client comes with the new token and server verifies the cookies's logout wala token,here we don’t need to generate a new one with jwt we can send cookie a new token, res.cookie("token","slkdf97")
the server compares it with the old login wala token, both are different, server throws token error. That’s why I said we can generate a new INVALID token 

after logout I try to make get request it gave me jwt malformed as we changed the cookies

I just created a new invalid token and send it to cookie, and after logging out when I checked new cookie was there 
authRouter.post("/logout", (req,res) =>{
try {
 res.cookie("token","slkdf97")
 res.send("Logged out successfully")

} catch (err) {
  res.send("Error" + err.message)
}  } )

And instead of creating a new token I can also expire the old token like this, and after loggedout when I checked the cookie I couldn’t see any cookie was present in there 
authRouter.post("/logout", (req,res) =>{
try {
res.cookie("token", null, {expires :  new Date(Date.now()) } )
res.send("Logged out successfully")
} catch (err) {
  res.send("Error" + err.message)
} } )
What this line mean is expire my cookies now itself
res.clearCookie("token") - this built in method also works

•  req.cookies → used to read cookies
•  res.cookie() → used to set cookies

What are you really logged out the from your account? , can't I find a loop hole to make a get or post request again ?of course we can make , how ? haven’t cleared the cookies right ? , now if user makes a request he can make it with either invalid or empty column in cookies , how can he do that?
Before he logsout, if the user goes to network tab - cookies - and copy and saves it, and user logs out, Now the user makes request before hitting send, he's going to the cookie tab and saves the previously copied which was before logged out, now hits the send , now the content appears. All the server wanted was a cookie only right…
Eg- you got a passport you travelled to US, and again you got a new passport and you travel to US, you can also use the old ones as well, it is still valid 
What we can do is?
Now the user copies and saves the cookies token and logs out in the server, Now the server gets the request as logsout with the token and saves the token in DB as blocklist, now whenever server receives a request it'll check the DB what if this token in the blocklist, if it is in the blocklist then it will throw the error, because the previous token in 3 days valid right… user loggsout and can use the previous token to make all the request . 
but wouldn’t it increase the blocklist in DB ?
we can just delete in DB as it gest expired 
but still DB call has to happen right…
if I keep it in a server itself on RAM and make the expiry as 3 minutes , we can delete it, still we need to traverse the server to delete it





This is where REDIS comes into the picture 
Redis is also a Database only. But it is a very fast, what MongoDB takes 10 milliseconds, Redis takes 10 micro seconds, How ?
Mongodb saves the data in Secondary memory, when you query it, it'll take it to the RAM and run the operation, and reply me .
Redis savese the data in RAM that’s why it is fucking fast, redis is a in memory database. Whatever the data I have, I keep it in Ram so that I can give you a reply very fast.
But RAM is very expensive right, so I will never store the data that should be stored for life time. Like I need the Token 1 only for 3 mins, I can keep this kinda data in Redis. So we use redis data to only for cache 
We don’t need to keep the redis inside node.js we can keep it different server only, because redis also wants RAM, Node.js also wants RAM, both of them fight for RAM space. Scalability issues will raise 

Another use-case of Redis is 
When the user visits wwwgoogle.com , request goes to the server, server goes to DB, DB gives it to the server and server gives to the user	. 
Now user again makes a request by refreshing the window, will the server again go to DB ? nope, when the first time it fetches a website from the DB to the user, server keeps it in REDIS, so that user makes a same request again, it'll easily gets from the RAM in-memory. User experience also be high.

It is upon us for deciding that how long the data will be alove in the Redis cache ?
We can design it like 5 mins or 2 days for any data
Redis also have multiple server by sharding it, 







































*/
//    "emailId": "salsil@gmail.com",
//    "password": "sallysillY@%@$0)",