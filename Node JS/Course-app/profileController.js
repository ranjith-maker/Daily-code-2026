import User from '../models/UserModel.js'
import AppError, { catchAsync } from '../utils/CustomError.js'
import {validateProfileEdit} from '../utils/Validation.js'
import { uploadImagetoCloudinary } from '../utils/ImageUplaoder.js'
import Course from '../models/CourseModel.js'
import CourseProgress from '../models/CourseprogressModel.js'


export const viewProfile  = catchAsync(async(req,res,next)=>{

const user = req.user

return res.status(200).json({
    success : true,
    message: 'User Profile Fetched Successfully' ,
    user
})

})


export const profileEdit = catchAsync(async(req , res , next)=>{

const user = req.user


if(!validateProfileEdit(req)){
    throw new AppError('Invalid Fields to update',400)
}

Object.keys(req.body).forEach((key)=>{
    user[key] = req.body[key]
})

if(req.file){
    const uploadImg = await uploadImagetoCloudinary(req.file)
    user.image = uploadImg.secure_url; 
}


await user.save()

return res.status(200).json({
    success : true,
    message : 'Profile Edited Successfully',
    data:user   
})


})



export const deleteProfile = catchAsync(async(req , res, next)=>{

const user = req.user

await Course.updateMany(
{
    studentsEnrolled : user._id,
},
{
$pull : {
    studentsEnrolled : user._id
}}
)

await Course.updateMany({
    mentor : user._id
},
{
  $unset : {
    mentor : ''

}}
)

await CourseProgress.deleteMany({
    userId : user._id
})


await user.deleteOne()

res.clearCookie("token");

return res.status(200).json({
    success : true,
    message : 'Account is deleted Successfully' 
})


})












/*

We use updateMany for Course because the courses are not owned by the user document. 
A user can be referenced inside many course documents through the studentsEnrolled array.
When the user deletes the account, we only need to remove that user's reference from 
those courses, not delete the courses themselves.
"Course uses updateMany because courses are shared resources. We only remove the user's
 reference from the enrolled students list. 
CourseProgress uses deleteMany because progress belongs only to that user-course relationship,
and after the user is deleted those progress records are orphan data, so we remove them."
*/