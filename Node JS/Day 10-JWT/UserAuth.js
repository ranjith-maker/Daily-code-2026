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


