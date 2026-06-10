
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













*/





