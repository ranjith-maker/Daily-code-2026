import RatingAndReviews from '../models/RatingAndReviewsModel.js'
import User from '../models/UserModel.js'
import Course from '../models/CourseModel.js'
import AppError, { catchAsync } from '../utils/CustomError.js'

//Create Rating

export const createRating = catchAsync(async (req,res)=> {

    const {courseId} = req.params
    const userId = req.user._id
    const {rating, review} = req.body
    
    if(!courseId || !userId || !rating || !review){
        throw new AppError('Invalid Request', 400)
    }


const course = await Course.findById(courseId);

if(!course){
        throw new AppError("Course not found",404);
    }
//only enrolled stud can give fb
const isEnrolled = course.studentsEnrolled
.some((studentId) => studentId.equals(userId))


if(!isEnrolled){
   throw new AppError("You cannot review a course you haven't purchased",403);
    }

//same user cant give twice for same course
const duplicateReview = await RatingAndReviews.findOne({user : userId , course : courseId})

if(duplicateReview){
   throw new AppError("You cannot give a review twice",403);
}


const name = req.user.firstName

const updateRR = await RatingAndReviews.create(
    {user:userId, name :name, course : courseId ,
    rating : rating , review: review 
})


if(!updateRR){
   throw new AppError('Cannot save the Rating and Reviews', 400)
}


const courseUpdateRR = await Course.findByIdAndUpdate(courseId,
{ $push:{ ratingAndReviews : updateRR._id } }, {new:true} )


if(!courseUpdateRR){
   throw new AppError('Cannot save the Rating and Reviews inside this Course', 400)

}

return res.status(201).json({
    success : true,
    message : 'Successfully made a RR',
    data : updateRR

})


})






