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


export const updateSubSection = catchAsync(async(req,res,next)=>{

const {subSectionId} = req.params
const {title,timeDuration,description,videoURL} = req.body

if(!subSectionId || !title || !timeDuration || !description || !videoURL){
    throw new AppError('Invalid details',400)
}

const subSection = await SubSection.findById(subSectionId)

if(!subSection){
    throw new AppError('Subsection is not found',404)
}

Object.keys(req.body).forEach((key)=>{
    subSection[key] = req.body[key]
})

await subSection.save()


return res.status(200).json({
    success : true,
    message : 'Subsection Edited Successfully',
    data: subSection   
})


})

export const deleteSubSection = catchAsync(async(req,res,next)=>{

const {subSectionId} = req.params

if(!subSectionId){
    throw new AppError('Subsection ID is not valid',400)
}

const subSection = await SubSection.findById(subSectionId)

if(!subSection){
    throw new AppError('Subsection not found',404)
}


const section = await Section.findOne({ subSection : subSectionId  })

if(!section){
    throw new AppError('No subsection is found',404)
}

await Section.findByIdAndUpdate( section._id ,
   
{ $pull : { subSection : subSectionId  } }  )

await SubSection.findByIdAndDelete(subSectionId)


return res.status(200).json({
    success : true,
    message : 'Subsection is deleted successfully'
})


})





/**
 * if we 're deleting a children inside a parent you first and both are diff schemas
 * first get childID verify now try to get engage parent with child as
 * Section.findOne({subSection : sectionId(params)}) 
 * so on updateMany  inside pull the child from the parent
 * now delete the subSection
 * 
 * 
 * 
 * 
const existingSubSection = await Section.findOne( {subSection : sectionId})

if(existingSubSection){
    throw new AppError(' This subsection is alredy created ',400)
}

 * 
 * 
 * 
 */


