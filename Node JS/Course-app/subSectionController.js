import SubSection from '../models/SubsectionModel.js'
import Section from '../models/SectionModel.js'
import AppError, { catchAsync } from '../utils/CustomError.js'



export const createSubSection = catchAsync(async(req,res ,next)=>{


const {title, videoURL, description, timeDuration,sectionId } = req.body

if(!title || !videoURL || !description || !timeDuration || !sectionId){
    throw new AppError('Invalid Fields',400)
}


const section = await Section.findById(sectionId)

if(!section){
    throw new AppError('Section not found',404)
}


const duplicate = await SubSection.findOne({
    section: sectionId,
    title: title.trim()
});

if (duplicate) {
 throw new AppError("A subsection with this title already exists in this section.",409);
}


const newSubSection = await SubSection.create({
   section:sectionId  ,title, description, 
    timeDuration, videoURL
})


const updatedSection = await Section.findByIdAndUpdate(sectionId,
{ 
$push :{  subSection :newSubSection._id} } ,

{new : true } 

).populate('subSection')

if(!updatedSection){
        throw new AppError('Unable to update the course with Section',404)
}

return res.status(201).json({
    success : true,
    message : 'Created a New Sub Section',
    data: updatedSection
})

})

