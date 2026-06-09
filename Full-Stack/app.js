
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



*/





