
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


*/





