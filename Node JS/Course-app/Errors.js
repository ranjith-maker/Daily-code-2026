
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

*/