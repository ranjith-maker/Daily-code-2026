import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({

firstName :{
    type : String,
    required : true,
    minLength : 4,
    maxLength : 20
},
lastName :{
    type : String
},
age : {
    type : Number,
    min : 15,
    max : 65,
    required : true
},
gender : {
    type : String,
    // enum : ["male", "female", "others" ]
validate(value){
if( !["men" , "women" , "others" ].includes(value))

    throw new Error("Invalid Gender")
}



},
emailId : {
    type : String,
    required : true,
    unique : true,
    trim : true,
    lowercase : true,
    immutable : true,


},
password : {
    type : String
},
photo:{
    type : String,
    default :"This is the default pic ",
}


}, {timestamps : true}   )

const User = mongoose.model("people", userSchema)


export default User



/*
    
what is (unique : true) , this fiekd should be unique it shouldn't have appeared before in the DB
for ex- instagram username, our phoneno. emailID  we can add this 
we can do indexing,
    default : "This is gonna be the default pic if the user didnt set any profile, that pic we have when we dont set a dp in whatsapp (grey color ones), that'll be given to this user
gender : {
    type : String,
    enum : ["male", "female", "others" ]
},
if the user didnt enter any of these 3 values in the array for gender field then I wont let him register
emailId : {
    type : String,
    required : true,
    unique : true,
    trim : true,
    lowercase : true,
    

},

lowercase : true, even when the user sends in uppercase , in DB it'll be stored in lowered case, wnot throw error but it'll be saved in loweercase in DB

gender : {
    type : String,
validate(value){
if( !["men" , "women" , "others" ].includes(value))
    throw new Error("Invalid Gender")
}
user can write anything in gender field like: lsjndfu
validate use case --> if it isn't something inside the array then throw this error
also this works for POST request only, if the old user comes and updates the gender as pok the DB will save it 
why ? because in patch request we need to define this clearly as run validators
app.patch( "/user" , async(req,res)=>{
try {
     const {id, ...update} = req.body
    await User.findByIdAndUpdate(id,update, {runValidators : true  } )
res.send("Updated successfully")

} catch (err) {
    res.send("Error" + err.message)
}})
now it'll throw the error when user updating as well
-----
at the end of our Schema if we write this we know exactly when the user registerd in our platform and when he/she updated his profile
}, {timestamps : true}   ), through this we can know like how many users have registered in our platform in the last 3 months
in DB it'll look like this
createdAt : 2026-04-16T14:35:52.611+00:00
updatedAt : 2026-04-16T14:35:52.611+00:00
--
 immutable : true, this lets the user not change the field , but when I went to postman and made a patch request to change my email it responded as Updated successfully, didnt throw any error, yet in DB there is no chnage in emial , it was the same, 
 the question is why the postman didnt send me any error
 This is when the API level Validation comes into the picture
 all while we did validation here in schema only, where is schema, in Database
 so why not I run a validation before my server reaches to Database  , because for every read , write in the database I need to pay to AWS a lot, so why should I validate evrything in DB, 
 what happens is, lets say user left the firstName column it is required : true in schema , now the API post request goes to DB reads the schema and throws error
 with API level Validation I can show that error without reaching DB. thats the difference 
User Experience is also good,if its DB valdation then it might take 100ms or 600ms to show the error 
app.post("/register" , async (req,res)=>{

try{

//API level validation here

 await User.create(req.body)
 res.send("User registered details successfully")


} catch (err){
    res.send("Error " + err.message)
}

} )

this is how we do API level validation as well

app.post("/register" , async (req,res)=>{

const mandatoryField = ["firstName" , "age" , "email"]

const isAllow = mandatoryField.every((k)=> Object.keys(req.body).includes(k) )

if(!isAllow) throw new Error("Fields are empty")



try{

 await User.create(req.body)
 res.send("User registered details successfully")


} catch (err){
    res.send("Error " + err.message)
}

} )


we'll learn an new ways to handle validation in upcoming class





*/

