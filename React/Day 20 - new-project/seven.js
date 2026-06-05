/*

import { useEffect, useState } from "react"
import { validate } from "./useValidate"


export default function Form() {

const initialValues = { username : "", email : "", password : ""}

const [formValues, setFormValues] = useState(initialValues)
const [formError , setFormError] = useState({})

const handleForm = (ev)=>{

const {name , value } = ev.target

setFormValues((prev)=> ({
        ...prev, [name] : value
}))
}


const handleSubmit = (ev)=>{

ev.preventDefault()

const errors = validate(formValues)

setFormError(errors)
if(Object.keys(errors).length === 0  ){
    console.log(formValues)
    console.log("Form is submitted successfully");

setFormValues(initialValues)
setFormError({})

}}


validate(formValues)



return(
<>
    
<div className="container" >   
    
<form  onSubmit={handleSubmit}  >

<h1>Login Form</h1>

<label >Usesrname </label>
<input type="text" name="username" placeholder="Username" 
value={formValues.username}
onChange={handleForm}

/>
<p> {formError.username}  </p>


<label >Email </label>
<input type="text" name="email" placeholder="Email"
value={formValues.email}
onChange={handleForm}
/>
<p> {formError.email}  </p>


<label >Password </label>
<input type="text" name="password" placeholder="Password"
value={formValues.password}
onChange={handleForm}

/>
<p> {formError.password}  </p>


<button
onClick={handleForm}

className="subBtn"
> Submit </button>


</form>

    
</div>


</>
)

}





export const validate = (values)=>{

const errors = {};
if(!values.username.trim()){
    errors.username = "Username is required "
}else if( values.username.length < 2){
     errors.username = "Username should be more than 2 "
}
if(!values.email.trim()){
    errors.email = "email is required "
}else if( values.email.length < 2){
     errors.email = "email should be more than 2 "
}
if(!values.password.trim()){
    errors.password = "password is required "
}else if( values.password.length < 5 ||values.password.length > 10)  {
     errors.password = "password should be more than 5 within 10 "
}
return errors

}


*/





