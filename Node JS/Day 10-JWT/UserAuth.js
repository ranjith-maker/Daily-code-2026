import jwt from "jsonwebtoken"

const userAuth = (req,res,next)=>{

    try{

        const {token} = req.cookies
        
        if(!token){
      return  res.status(401).send("Token is missing")
        }
        
        //if user has token then we'll verify it
        const payload = jwt.verify(token, "oppo90"  )

        const {emailId} = payload
        if(!emailId){
  return  res.status(401).send("Id is missing")
            
        }
        console.log("User Authenticated");
        
  req.emailId = emailId

    return  next()
    }
  catch(err){
       return res.status(401).send("Error: " + err.message);
  }


}



export default userAuth


/*

When you have JWT token of the specific user, you don’t need their username or password to login 

Add a chrome extension called Cookie-Editor
Authorization 
Base url
User id 
You can also export this all in json and copy it
Tokens are inside the cookies only
Now go to another google a/c and click the extension paste the exported JOSN , and you can now view the content.

In the last class we saw about digital signature
2)steps
1st step
a) Plain message goes b) DS goes, DS (hashed message that is encrypted with sender's private key) 
2nd step
a)  Receiver hashes the plain message, h1
b) Receiver uses render's public key to open the DS, he sees hashcode of the plain msg, h2
h1,h2 both are same , As they are same, Receiver acts on it

now what is JWT – JSON Web Token ?
When the user logins by username and password, after verifying it is him
Server gives the user a JWT token, now after that whenever he interacts with the server like open the app, send a message, post a reel, he uses JWT to communicate with the server upon every request he makes, and
the JWT does NOT directly store all permissions or content access rules.
Instead:
•	JWT identifies the user + basic attributes (like role) 
•	The server still enforces actual access control logic 
Example:
•	JWT says: userId = 123, role = "user" 
•	Server still decides: 
o	can they view this reel? 
o	can they message this user? 
o	are they blocked? 
That logic is not inside the token, it’s in the backend.

JWT is stateless I don’t need to store this information in memory and DB
Go to JWT.io
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

JWT has 3 fields
Header  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
Payload  eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0
Digital Signature  KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

As server generates a JWT token to the user after logins, inside payload it has username not password, no sensitive information like password, credit card info will be added in JWT, if you think username and emailID is  not sensitive add them, just don’t add the sensitive info. 
Header 
{
Algo : HS256,
Type  : JWT
}

Payload

When client makes a request after login , there are diff API end point
App.get("/chat") app.get("/reels") --- this is end points, where the request goes.
Payload {
Username : "rohit_negi"
emailID : "lkskmf@com"
}

When client logs in, user sends username and password to server. Server checks in DB, if details are correct then server generates a JWT token.
This JWT has:
Header {
Algo : HS256,
Type : JWT
}
Payload {
Username : "rohit_negi"
emailID : "lkskmf@com"
}









*/