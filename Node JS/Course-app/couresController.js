import Course from '../models/CourseModel.js'
import Category from "../models/CategoryModel.js";
import AppError, { catchAsync } from "../utils/CustomError.js";
import User from '../models/UserModel.js'
import { uploadImagetoCloudinary } from '../utils/ImageUplaoder.js';



//here mentor is trying to create a new course 
//in apidog using form-data to uplaod all details not json

export const createCourse = catchAsync(async(req,res,next)=>{

const { courseName, description, whatYouWillLearn, price, categoryId  } = req.body;

const thumbnail = req.file;

if(!courseName || !description || !whatYouWillLearn ||!price ||
   !categoryId || !thumbnail){
    throw new AppError("All fields are required",400);
}

const mentorId = req.user._id;

const CategoryDetails = await Category.findById(categoryId);


if(!CategoryDetails){
    throw new AppError("Category not found",404);
}


// check duplicate manually
const existingCourse = await Course.findOne({
    courseName: courseName.trim(),
    mentor: mentorId
});


if(existingCourse){
    throw new AppError('You already created this course, with same name',409);
}

const uploadedThumbnail = await uploadImagetoCloudinary(thumbnail);

const newCourse = await Course.create({
    courseName:courseName.trim(), description,
    whatYouWillLearn, price:Number(price),
    mentor:mentorId,  category:CategoryDetails._id,
    thumbNail:uploadedThumbnail.secure_url
})


// adding course to same mentor who created
await User.findByIdAndUpdate(mentorId,
    {
        $push:{courses:newCourse._id}
    }
);

// adding course to category as well
await Category.findByIdAndUpdate(
    CategoryDetails._id,
    { $push:{ course:newCourse._id }
    }
);


return res.status(201).json({

    success:true,
    message:`${newCourse.courseName} created successfully under ${CategoryDetails.name} `,
    data:newCourse

});


});

//get all the courses

export const getAllCourse = catchAsync(async(req,res,next)=>{


const courses = await Course.find({status:'approved'})
    .select('thumbNail courseName price ratingAndReviews')
    .populate("mentor","firstName lastName")
    .populate("category","name");

if(!courses.length){
    return next(new AppError("Courses not found", 404));

}


return res.status(200).json({
  success :true,
  message : 'Fetched all the course detials',
  data : courses,

})

})




export const getCourseDetails = catchAsync(async(req,res,next)=>{


const {courseId} = req.params

if(!courseId){
    return next(new AppError("CourseId is not Valid", 404));
}


const course = await Course.findById(courseId)
.populate('mentor', 'firstName lastName')
.populate('ratingAndReviews')
.populate('studentsEnrolled')
.populate('category')
.populate({
    path:'courseContent',
    populate:{
        path:'subSection'
    }
})


if(!course){
    return next(new AppError("Courses not found", 404));
}


return res.status(200).json({
  success : true,
  message : 'Got this one course',
  data : course

})
})



export const approveCourse = catchAsync(async(req,res,next)=>{

const {courseId} = req.params;


if(!courseId){
        throw new AppError('Invalid Request', 400)   
  }



const course = await Course.findById(courseId);


if(!course){
    throw new AppError("Course not found",404);
}


course.status = "approved";


await course.save();


res.status(200).json({
    success:true,
    message:"Course approved by the Admin",
    course
});

});




