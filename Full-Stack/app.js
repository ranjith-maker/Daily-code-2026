
// Started Full Stack Project


/*
 * isAuthenticated - whether the user is loggedin user or not
 * user - user has few of his details like email, password, 
 * children - it is the compeonent we wanna render
 * 
 * if(!isAuthenticated && 
  !( location.pathname.includes('/login') ||
    location.pathname.includes('/register')  
   ) 
 ) {
    return <Navigate  to='auth/login'  />
    }

 * if the user is not logged and not accessing login or register page and tried to access shop page, he'll be redirected to login page
 * 
if(isAuthenticated &&
   ( location.pathname.includes('/login') || 
     location.pathname.includes('/register')
    ) )
{
if(user?.role === 'admin'){
    return <Navigate to='admin/dashboard'  />
}else{
    return <Navigate to='shop/home'   />
 * 
    if the user is authenticated means right after entering username & password
    and their path is login & register show the page acco to who entered details 
 * 
if(isAuthenticated  && user.role !== 'admin' && location.pathname.includes('/admin')){
    return <Navigate to='unauth-page' />
}
    if the user trying to access admin page he goes to un-auth page

 if(isAuthenticated &&  user.role === 'admin' && location.pathname.includes('/shop') ){
    return <Navigate to='admin/dashboard'  />
}

if the admin is trying to access shop page he goes to admin's dashboard page, only user has access to shop page
-----------------
Creating Store


const authSlice = createSlice({

name : 'auth',
initialState,


reducers : {
setUser:(state, action)=>{}
}, 
extraReducers:(builder)=>{
    builder
    .addCase(registerUser.pending, (state)=>{
        state.isLoading = true
    } ).addCase(registerUser.fulfilled,  (state,action)=>{
        state.isLoading = false
        state.isAuthenticated =false

        state.toast = {
            open: true,
            message: action.payload?.message || "Registered successful",
            type: 'success',
      }
        

    } ).addCase(registerUser.rejected,  (state,action)=>{
        state.isLoading = false
        state.isAuthenticated = false

        state.toast = {
            open: true,
            message: action.payload?.message || "User already existed",
            type: 'error',
      }


})
    .addCase(loginUser.pending, (state)=>{
        state.isLoading = true
    } ).addCase(loginUser.fulfilled,  (state,action)=>{
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload?.user

        state.toast = {
            open : true,
            message : action.payload?.message || 'User Logged in Successfully',
            type: 'success'
        }


    } ).addCase(loginUser.rejected,  (state,action)=>{
        state.isLoading = false
        state.isAuthenticated = false
        state.user = null

        state.toast = {
            open : true,
            message : action.payload?.message || 'Incorrect EmailID or Password',
            type: 'error'
        }

})
      .addCase(checkAuth.pending, (state) => {
      state.isLoading = true;
   
})

     .addCase(checkAuth.fulfilled, (state, action) => {
     state.isLoading = false;
     state.isAuthenticated = true;
     state.user = action.payload?.user;
})

   .addCase(checkAuth.rejected, (state) => {
    state.isLoading = false;
    state.isAuthenticated = false;
    state.user = null;
});

}

})

export default authSlice.reducer

export const { setUser, } = authSlice.actions


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileIcon, FilesIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import axios from 'axios'



export default function ProductImageUplaod(
    {imageFile, setImageFile,
     setUploadingUrl ,uploadingUrl,
     setImageLoading,imageLoading
}
){

    const inputRef = useRef(null)


function handleImgfile(ev) {

const seletedfile = ev.target.files?.[0]
if(seletedfile){
    setImageFile(seletedfile)
}
    
}

function handleDragOver(ev) {
ev.preventDefault()

}

function handleDrop(ev) {
ev.preventDefault()
    const droppedFile = ev.dataTransfer.files?.[0]
    if(droppedFile) setImageFile(droppedFile)

}

function handleRemoveImage() {
    
setImageFile(null)
if(inputRef.current){
    inputRef.current.value =""
}}

async function uploadImagetoCloudinary() {
    setImageLoading(true)
    
const data = new FormData()
data.append('my_file', imageFile )
const response = await axios.post(
    'http://localhost:5000/api/admin/products/upload-image', data  )

    //am saying, in response when you get success true get me the url
if(response?.data?.success){
    setUploadingUrl(response.data?.result?.url)
    setImageLoading(false)
}



}


useEffect(()=>{

if(imageFile !== null) uploadImagetoCloudinary()    

}, [imageFile] )



return (

        
    <div className='w-full  max-w-md mx-auto ' >
        <Label  className='text-lg font-semibold block ' >Upload Image</Label>
        <div  onDragOver={handleDragOver} onDrop={handleDrop}
        
        
        className='border-2 border-dashed rounded-lg my-4 p-2' >
            <Input type='file' id='image-upload' 
            className=' hidden mb-4 '
            ref={inputRef}
            onChange={handleImgfile}
            
            />
        {
            !imageFile ? 
            (<Label htmlFor='image-upload' className='h-32 flex flex-col justify-center items-center cursor-pointer ' >
                <UploadCloudIcon 
                className='w-10 h-10 text-muted-foreground mb-2' />
                <span> Drag & Drop or Click to upload an Image </span>

            </Label>) : (
                imageLoading ? 
                <div className='h-10 bg-gray-400' /> :
                <div  className='items-center flex justify-between  ' >
                   <div className=' flex items-center  ' >
                    <FileIcon className='w-8 h-8 text-primary mr-2 ' />
                   </div>
                   <p  className='text-sm font-medium  ' > {imageFile.name}  </p>
                   <Button variant='ghost' size='icon' className='text-muted-forefround hover:text-foreground' 
                   onClick={handleRemoveImage}
                   
                   >
                    <XIcon  className='w-4 h-4' />
                    <span className='sr-only' >Remove File </span>
                   </Button>



                </div> 
                    )
        }
        
        </div>

    </div>
  )

}



import React, { use, useState } from 'react'

export default function Twitterlist({
    tweet, isEdit, 
    editText ,setEdittext,
    onEdit, onSave , onDelete}) {


return (

<>
<div className=' h-20 w-full flex justify-between gap-4 bg-zinc-400
 text-black  rounded-xl p-5 ' >  

{isEdit  ?(

<input type="text" 
onChange={(ev)=>setEdittext(ev.target.value)}
value={editText}
className=' w-2xl outline-2  '

/>


) : <span> {tweet?.text}  </span>

}


<div className='flex gap-5  text-white  ' > 

    {isEdit ? 
        <button  
    onClick={onSave}
     className=' bg-fuchsia-700 px-4 py-2 rounded-xl cursor-pointer'
    > Save</button>
    : 
    <button  
    onClick={onEdit}
     className=' bg-fuchsia-700 px-4 py-2 rounded-xl cursor-pointer'
    > Edit</button>

    }

    <button
    onClick={onDelete}   

     className=' bg-fuchsia-700 px-5 py-2 rounded-xl cursor-pointer'
    >Delete </button>
</div>



</div>

</>
    )
}





//Accessing Form Values
import React, { useState } from 'react'

export default function Form() {

const initialState ={

firstname : '',
lastname : '',
email : '',
country : '',
streetaddress: '',
number:'',

comment: false,
candidates : false,
offer : false,
checkit :false,

notification : ''

}

const [formdata ,  setFormdata] = useState(initialState)


function handleChange(ev) {
    
const { name, value , type, checked } = ev.target

setFormdata((prev)=>{
    return{
        ...prev,
        [name] : type === 'checkbox' ? checked : value
    }
})
}


function handleSubmit(ev) {
    ev.preventDefault()
    console.log(formdata);
    
}




 return (
<>

<div className='min-h-screen w-full flex justify-center items-center flex-col '  >
<h1> Form </h1>
<div  className=' w-124 mt-6 border-2 rounded-xl flex flex-col p-5' >

<form  onSubmit={handleSubmit }   >          
<div  className=' flex flex-col  gap-4  '  >

<label htmlFor="firstname">First name</label>   
<input type="text"  placeholder='first Name'
name='firstname'
value={formdata.firstname}
id='firstname'
onChange={handleChange}

className='border  '
/>

<label htmlFor="lastname">Last name</label>   
<input type="text"  placeholder='last Name'
name='lastname'
id='lastname'
value={formdata.lastname}
onChange={handleChange}
className='border  '

/>

<label htmlFor="email">Email</label>
<input type="email"  placeholder='Email'
name='email'
value={formdata.email}
onChange={handleChange}
id='email'
className='border  '
/>
<div  className='bg-zinc-300 text-black' >   
     
<select name="country" >

<option value="" disabled > Country </option>
<option value="India">India</option>
<option value="US">US</option>
<option value="UK">UK</option>
<option value="France">France</option>

</select>
 </div>


<label htmlFor="streetAddress">StreetAddress</label>

<textarea name="streetaddress" id="streetAddress"
value={formdata.streetaddress}
onChange={handleChange}
className='border  '

></textarea>

<label htmlFor="pincode">Pin code</label>
<input type='number'
value={formdata.number}
onChange={handleChange}
className='border  '
name='number'
id='pincode'
/>

{/* Checkbox is always a boolean value */
/*
<h1 className='font-bold' > By Email  </h1>

<div className='flex gap-5' >   
<label htmlFor="comment">Comments</label>

<input type='checkbox' 
id='comment'
name='comment'
value='comment'
checked={formdata.comment}
onChange={handleChange}
/>

<label htmlFor="candidates">Candidates</label>
<input type='checkbox'
name='candidates'
id='candidates'
value='candidates'
checked={formdata.candidates}
onChange={handleChange}
/>

<label htmlFor="offer">Offers</label>
<input type='checkbox'
name='offer'
id='offer'
value='offer'
checked={formdata.offer}
onChange={handleChange}
/>
</div>

{/* Name has to be the same across all the radios */
/*
<h1 className='font-bold' > Push Notifications  </h1>
<label htmlFor="everything">Everything</label>
<input type='radio'
id='everything'
value='everything'
name='notification'
checked={formdata.notification === 'everything'}
onChange={handleChange}
/>

<label htmlFor="same_as_email">Same as Email</label>
<input type='radio'
name='notification'
id='same_as_email'
value='same_as_email'
checked={formdata.notification === 'same_as_email'}
onChange={handleChange}
/>

<label htmlFor="no_push">NO push</label>
<input type='radio'
name='notification'
id='no_push'
value='no_push'
checked={formdata.notification ===  'no_push' }
onChange={handleChange}
/>

<label htmlFor="checkit">Checking checkbox</label>
<input type='checkbox'
name='checkit'
value='checkit'
checked={formdata.checkit}
onChange={handleChange}
/>

<button>Submit</button>

 </div>
 </form>
</div>
</div>


</>

)
}


*/



