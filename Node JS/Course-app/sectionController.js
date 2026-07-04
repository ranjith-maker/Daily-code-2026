import Course from '../models/CourseModel.js'
import Section from '../models/SectionModel.js'
import AppError, { catchAsync } from '../utils/CustomError.js'
import SubSection from '../models/SubsectionModel.js'

//fetch it , validate, create it, push the sectionID to course


export const createSection = catchAsync(async(req,res,next)=>{

const { courseId, sectionName } = req.body

if(!courseId || !sectionName){
    throw new AppError('Invalid Fields',400)
}

const course = await Course.findById(courseId)

if(!course){
    throw new AppError('Course ID not found',404)
}

const duplicateSection = await Section.findOne({course : courseId, sectionName : sectionName.trim() })

if(duplicateSection){
    throw new AppError('This section already exist for this course')
}

const newSection = await Section.create({course :courseId, sectionName:sectionName.trim(),   })

if(!newSection){
    throw new AppError('Couldnt create new Section for this course',400)
}

const updatedCourse = await Course.findByIdAndUpdate(courseId,
{ $push:{ courseContent: newSection._id } } , {new:true}
).populate({path:  'courseContent', populate :{ path : 'subSection' } }  )

if(!updatedCourse){
    throw new AppError('COuld not update the course with this New Section')
}


return res.status(201).json({
  success:true,
  message:`Section ${newSection.sectionName} created successfully for ${updatedCourse.courseName}`,
  data: newSection

    });

})



