
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


const app = express()

app.use(express.json())
app.use(cookieParser())


app.use("/auth" , authRouter)

app.use("/user", userWorkRouter)



main()
.then(()=>{

    console.log("Connected DB");
    const PORT = process.env.Port || 2000 
    app.listen(PORT  , ()=>{
        console.log("Listening at" , PORT)
        
    })
    

})
.catch((err)=>console.log(err) )





