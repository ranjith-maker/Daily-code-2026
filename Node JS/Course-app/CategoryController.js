


export const createCategory = catchAsync(async(req,res,next)=>{

const { name, description } = req.body

if(!name || !description){
    throw new AppError('All fields are required', 401)
}

const category = await Category.create({ name , description })

return res.status(201).json({
    success : true,
    message : 'New Category is created successfully',
    data : category

})

})


export const getAllCategory = catchAsync(async(req , res , next)=>{

const allCategory = await Category.find({}, {name: true, description :true})


return res.status(200).json({
    success : true,
    message : 'All categories fetched successfully',
    data : allCategory
})


})


export const categoryPageDetails = catchAsync(async(req,res,next)=>{

const {categoryId} = req.params

if(!categoryId){
        throw new AppError('Invalid Request', 400)   
  }

const selectedCategory = await Category.findById(categoryId).populate({
    path : 'course',
    select: 'courseName image thumbNail description'

})

    if (!selectedCategory) {
        throw new AppError("Category not found", 404);
    }

const diffCategory = await Category.find({
    _id: {$ne: categoryId}
}).populate({
    path :  'course'
}).exec()


if(!diffCategory.length){
    throw new AppError('Diff category not found')
}

    return res.status(200).json({
        success: true,
        data: selectedCategory,
        diff : diffCategory
})


})


export const ownCategory =  catchAsync(async(req,res,next)=>{


const {categoryId} = req.params


if(!categoryId){
        throw new AppError('Invalid Request', 400)   
  }

const specificCourses =  await Category.findById(categoryId)

if(!specificCourses){
    throw new AppError("Category not found",404);
}

return res.status(200).json({
    success : true,
    message : `Fetched ${specificCourses.name} courses`,
    data : specificCourses.course
})



})

/**
 * as we know inside model if there is an objID connecting to another model we'll populate it to get that details
 * so I did, what happened here I also got category details as well as course detials
 * but I only want course details come under this category.
 * 
const specificCourses =  await Category.findById(categoryId)
.populate('course', 'courseName  price mentor whatYouWillLearn')
The lesson here is use Populate only if you want hte parent detail as well to see child details

message : `Fetched ${specificCourses.name} courses`,
data : specificCourses.course
if you only want child details in response we can simply do this




*/




