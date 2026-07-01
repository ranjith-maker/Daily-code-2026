


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
``