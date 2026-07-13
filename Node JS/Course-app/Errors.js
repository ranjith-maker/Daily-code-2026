
//for every error we write
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    
    this.statusCode = statusCode;
    this.success = false;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;



//To not write after catch error actch(err){next(err)}

export const errorHandler = (err, req, res, next) => {

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });

};




//To not write try catch evrywhere
export const catchAsync = (myErrorfn) =>
(req,res,next) =>
Promise.resolve(myErrorfn(req,res,next)).catch(next);






/**

no try/catch
no repeated res.status errors
custom messages + status codes
one global error response


router.route("/admin/products").get(userAuth,  roleBasedAccess("admin"),  getAdminProducts)
router.route("/admin/product/create").post(userAuth, roleBasedAccess("admin") , createProducts)

Update Course
Delete Course
Update SubSection
Delete SubSection
My Purchased Courses
Mentor's Own Courses
Instructor Dashboard Statistics
Student Progress
Search Courses
Wishlist
Notifications
Certificates





Database
   |
   |
Conversation.find()
   |
   ↓
Get conversations containing me

[
  {
    participants: [Me, Sarah]
  },
  {
    participants: [Me, Alex]
  }
]

   |
   |
map()

   |
   ↓

[
  {
    recipient: Sarah
  },
  {
    recipient: Alex
  }
]











1. User enters:
   - Username
   - Email

2. Server validates:
   - Username is available
   - Email isn't already registered

5. Save to OTP collection:

{
    username,
    email,
    otp: hashedOTP,
    createdAt
}

6. Send OTP email

7. User enters OTP

8. Verify OTP

9. Create User:

{
    username,
    email,
    profilePicture: "",
    bio: ""
}

10. Delete OTP document

11. Generate JWT

So yes, your reasoning is exactly right:
when user disconnects we dont wanna show the user as online thas why we wrote in disconnect right ?
Exactly. If you didn't emit the updated list after deleting the user, every client would still think that user was online.

Why not emit only once?
Because the list changes in both cases:
•	✅ A user connects → add them → notify everyone. 
•	✅ A user disconnects → remove them → notify everyone. 
Whenever the data changes, you broadcast the new version.




*/
