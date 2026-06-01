

// When we write:
// const refId = useRef(null)
// we are basically saying:
// “Right now there is no interval running.”
// null is used because it clearly represents the absence of a value. Before the user clicks Start, no timer exists yet, so the ref should naturally hold “nothing.” This makes the code more meaningful and readable. Later, when setInterval() runs, the ref changes from null to the actual interval ID returned by the browser.
// If you use 0 instead, the code may still technically work in many browsers because clearInterval(0) does nothing harmlessly, but conceptually it is less correct. 0 is still a number, so it looks like a real interval ID. Someone reading the code may think interval 0 actually exists. null communicates intent better. It tells other developers, “No interval has been created yet.” Good code is not only about making the computer understand; it is also about making humans understand.
// The reason we clear the interval before starting a new one is because setInterval() never replaces the old timer automatically. Every time the Start button is clicked, a completely new interval is created. If we don’t stop the previous one, multiple timers keep running in the background together. Imagine clicking Start three times. Now three intervals are all updating the countdown every second. The countdown may appear to speed up, flicker, or behave unpredictably because several intervals are competing to update the same state.
// So this line:
// clearInterval(refId.current)
// is defensive programming. It means:
// “Before creating a new timer, make sure any old timer is removed.”
// This guarantees that only one interval exists at a time. Even on the very first click, when refId.current is still null, calling clearInterval(null) is safe and simply does nothing. That is why we can confidently call it every time before creating a new interval. It keeps the logic simple, predictable, and bug-free.





/*----------------
There 3 ways you can to validate/ submission of the form
1) Full Fledged 3rd party libraries – React Hook ,Zod
2) Controlled Components
3)Uncontrolled Components



CC
It involves manual state management which can cause irrelevant re-renders, when using a CC you write an event handler for every way your data can change, like onchange 
It also require you to maintain all the validation logic

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit() {
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"   name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input  type="email"  name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
Here we have two states: name and email. These states are assigned to the value property of the name and email input elements.
The name state holds the value of the name input element. When a value is being typed in the name input, the onChange event attached to it sets the value of the input to the name state using the setName updater function.
The email state holds the value of the email input element. The onChange event attached to the email input changes the email state via setEmail() to hold the value typed into the element.
As you can see, the values of our input elements name and email are controlled by the React state; the state becomes the “single source of truth” for the input elements. Therefore, the App component shown above is a controlled component.



UCC
It means it wont be handled by React, DOM directly controls it, like this
In this example, we used DOM APIs directly. Now let’s refactor the code to do it in a React way:
function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  function onSubmit() {
    console.log("Name value: " + nameRef.current.value);
    console.log("Email value: " + emailRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}
We created two React refs, nameRef and emailRef, and assigned them to the ref attributes of name and email inputs, respectively. This will cause the refs to hold the HTMLElement instances of the elements in their .current property. From .current, we can reference the .value property to get the values of the input elements.

Uncontrolled CC uses  ref to store their values, but React recommends that Controlled components to store form values
Then what is the use case useref then ?
5.Understanding React.forwardRef
This form app became confusing as Sanket conveys so I'll do it later in some other youtube channel, So lemme move to the next projects





*/


/*

Using Firebase as Backend

import { useRef, useState } from "react"
import Header from "./Header"
import validateForm from "../utils/validate"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


export default function Login() {


const [signIn , setSignIn ] = useState(true)
const [showError , setShowError] = useState("")

const nameRef = useRef(null)
const emailRef = useRef(null)
const passRef = useRef(null)


const dispatch = useDispatch()
const navigate = useNavigate()

function handleSign() {
    setSignIn(prev => !prev)
}


function handleFormData(ev) {
    
ev.preventDefault()
const name = nameRef.current?.value
const email = emailRef.current?.value
const password = passRef.current?.value
const message = validateForm(email,password)

setShowError(message)

//when it is invalid just return
if(message) return

//create a new user Sigining up
if(!signIn){

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up it creates an user obj in firebase DB
    const user = userCredential.user;
    console.log(user);

  })
  updateProfile(auth.currentUser, {
  displayName:  name  , photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSaJI_GbtJB_R82YCUaz_-gqZDg4ukHMXkg&s"
}).then(() => {
  const {uuid, name, displayName , photoURL,}= auth.currentUser
  dispatch(addUser({name:name , photoURL : photoURL}))
    navigate("/browse")
}).catch((error) => {
setShowError(error.message)
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setShowError(errorMessage)
    // ..
  });

}else{
//Login(Sign in) Logic only mail & password
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    setShowError("User not found",errorMessage)
    
  });

}
}



    return(

<>
<Header/>


<div
className="relative  "
> 

<img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" alt=""
      
className="w-full h-screen object-cover brightness-50   "    
/>


    
<form 
className=" w-96 flex flex-col gap-5 absolute top-1/2 left-1/2 justify-center -translate-x-1/2 px-16 pt-8 pb-12 rounded -translate-y-1/2 bg-black/65 
min-h-125
"
>
<h1 className=" text-3xl font-bold  "> {signIn ? 'Login': 'Sign In'}   </h1>
<>
{ !signIn && (

<input type="text" placeholder="Name" 
ref={nameRef}
className="p-2 border border-white rounded " />)
}


<input type="text" placeholder="Email or phone number " 
ref={emailRef}

className="p-2 border border-white rounded " /> 


<input type="text"placeholder="Password"
ref={passRef}

className="p-2 border border-white rounded " />
<p className=" text-red-600 "    > {showError} </p>

</>


<button
onClick={handleFormData}
className=" bg-red-700 w-full cursor-pointer text-white rounded-md py-2 ">
{signIn ? 'Login In': 'Sign In'}  </button>


<div className="flex justify-between text-sm ">
  <span> {signIn ? 'New to Netflix ?' : 'Already Registered ?'} </span>

  <span className="text-white cursor-pointer underline"
  onClick={handleSign} >{  signIn  ? 'Sign up now' :  'Login now '} </span>

</div>

</form>
</div>


</>

) }


*/


