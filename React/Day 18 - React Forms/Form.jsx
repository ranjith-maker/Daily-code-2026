import { useForm } from "react-hook-form";







function Form() {
   
 const {register, handleSubmit , formState : {errors}  } = useForm()   

function submitForm(data) {
    console.log(data);
    
}
console.log("Render");
return(


<>
<form onSubmit={handleSubmit(submitForm)} >

<label htmlFor="name"  >Name : </label>
<input type="text"  id="name"   {...register("name", {
required : "Name should not be empty"

})}
/>
{errors.name && <span  style={{color : "red"}} > {errors.name.message}   </span>}


<label  htmlFor="age" > Age :    </label>
< input type="number" id="age" {...register("age" , {
max : {
    value : 80,
    message :"Maximum age is 80"
     
},

min : {
    value : 10,
    message : "Minimum age is 10"
}
}) }
/> 

{errors.age && <span  style={{color : "red"}}  > {errors.age.message} </span>}




<label htmlFor="pass" > Password :   </label>

<input type="password" id="pass" 

{...register("password" ,  {

minLength : {
value : 8,
message : "Minimum password length is 8"

}, 

maxLength :{
    value : 15,
    message : "Maximum password lenght is 15"
}
} ) }

/>

{errors.password && <span style={{color : "red"}}  > {errors.password.message }  </span>  }

<button>  Submit </button>

</form>


</>

)}



export default Form



/*
Install the hook from ---> npm install react-hook-form
This is ZOD, it validates the schema,
What is minimum length, upper,lower case is met in password? 
what if it met new password confirm password ?

, what if the format of email is right ? it validates these all 








*/




