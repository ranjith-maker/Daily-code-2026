
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const User = z.object({

    name : z.string().min(5, "Minimum length is 5" ).max(20, "Maximum length is 20" ),
    age : z.coerce.number().min(10, "Minimum age is 10").max(50, "Mazimum age is 50"),
    password : z.string().min(5 ,"Minimum length is 5" ).max(20, "Maximum length is 20"),
    email : z.string().email("Email is Invalid"),
    cmpass : z.string(),


}).refine((data)=> data.password === data.cmpass,{

message : "Password is not matching",
path : ["cmpass"], //path of error

} )



function Zodform() {
   
 const {register, handleSubmit , formState : {errors}  } = useForm({

    resolver : zodResolver(User)

 })   

function submitForm(data) {
    console.log(data);
    
}
console.log("Render");

return(


<>
<form onSubmit={handleSubmit(submitForm)} >

<label htmlFor="name"  >Name : </label>
<input type="text"  id="name"   {...register("name")}
/>
{errors.name && <span  style={{color : "red"}} > {errors.name.message}   </span>}

<label htmlFor="email" > Email :  </label>
<input id="email"

{...register("email") }

/>
{errors.email && <span style={{color : "red"}}  > { errors.email.message} </span>  }

<label  htmlFor="age" > Age :    </label>
< input type="number" id="age" {...register("age") }
/> 

{errors.age && <span  style={{color : "red"}}  > {errors.age.message} </span>}




<label htmlFor="pass" > Password :   </label>

<input type="password" id="pass" 

{...register("password") }

/>
{errors.password && <span style={{color : "red"}}  > {errors.password.message }  </span>  }



<label htmlFor="cmpass" > Confirm Password :    </label>
<input type="password"  id="cmpass" 
{...register("cmpass")} />
{errors.cmpass  &&  <span style={{color : "red"}}   >  {errors.cmpass.message}  </span>  }

<button>  Submit </button>

</form>


</>

)}



export default Zodform



/*
Install the hook from ---> npm i react-hook-form
Install ZOD drom ----> npm i zod
Install to attach the zod to hook form ,to resolve this, install this ---> 
npm i @hookform/resolvers

What {...register("name")} does:
register("name") returns an object containing things like onChange, onBlur, ref, and name. The spread {...register("name")} puts all of these directly onto the input element. This is how react-hook-form tracks that input's value internally — without you writing a single useState or onChange handler. The library is managing the input for you under the hood.

What zodResolver does:
useForm on its own has no idea what your validation rules are. zodResolver(User) is the bridge — it takes your Zod schema (User) and translates it into a format useForm understands. So when the user hits Submit, useForm runs the data through your Zod schema first. If anything fails, it populates errors automatically. If everything passes, it calls your submitForm function with clean validated data.




*/








