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
    throw new AppError('Could not update the course with this New Section')
}


return res.status(201).json({
  success:true,
  message:`Section ${newSection.sectionName} created successfully for ${updatedCourse.courseName}`,
  data: newSection

    });

})



export const updateSection = catchAsync(async(req,res,next)=>{

    const { sectionName, sectionId } = req.body;

    if(!sectionName || !sectionId){
        throw new AppError("Invalid fields",400);
    }

    const section = await Section.findById(sectionId);


    if(!section){
        throw new AppError("Section not found",404);
    }


//Find another section with this name, but not the one I am currently updating.
    const duplicate = await Section.findOne({ course: section.course,
        sectionName: sectionName.trim(),
        _id:{ $ne: sectionId  }
    })


    if(duplicate){
        throw new AppError("Section with this name already exists",409);
    }

    const updatedSection = await Section.findByIdAndUpdate(sectionId,
        {sectionName: sectionName.trim() },  {new:true}
    );

    return res.status(200).json({
        success:true,
        message:'Section name updated successfully',
        data:updatedSection
    });

})



export const deleteSection = catchAsync(async(req,res,next)=>{

const {sectionId} = req.params

if(!sectionId){
    throw new AppError('Section ID is not valid',400)
}

const section = await Section.findById(sectionId)

if(!section){
    throw new AppError('Section ID not found',404)
}

// Find SubSection documents where _id exists inside this array
const deleteSubSection = await SubSection.deleteMany({
        _id: {
            $in: section.subSection
        }
    });
    

await Course.updateMany({courseContent: sectionId},
    { $pull: {
            courseContent: sectionId
        }
    }
);


await Section.findByIdAndDelete(sectionId);

return res.status(200).json({
    success : true,
    message : 'Section Deleted Successfully'
})


})

export const exportTasksReport = catchAsync(async (req, res, next) => {
    const tasks = await Task.find()
        .populate({
            path: "assignedTo",
            select: "name email"
        })
        .lean();


    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet("Task Report");


    worksheet.columns = [
        {
            header: "Task ID",
            key: "_id",
            width: 25
        },
        {
            header: "Title",
            key: "title",
            width: 30
        },
        {
            header: "Description",
            key: "description",
            width: 50
        },
        {
            header: "Priority",
            key: "priority",
            width: 15
        },
        {
            header: "Status",
            key: "status",
            width: 20
        },
        {
            header: "Due Date",
            key: "dueDate",
            width: 20
        },
        {
            header: "Assigned To",
            key: "assignedTo",
            width: 40
        }
    ];


    // Add task rows
    tasks.forEach((task) => {

        const assignedUsers = task.assignedTo?.length
            ? task.assignedTo
                .map((user) => `${user.name} (${user.email})`)
                .join(", ")
            : "Unassigned";


        worksheet.addRow({
            _id: task._id.toString(),
            title: task.title,
            description: task.description || "No description",
            priority: task.priority,
            status: task.status,
            dueDate: task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "No due date",
            assignedTo: assignedUsers
        });

    });


    // Response headers
    res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );


    res.setHeader(
        "Content-Disposition",
        'attachment; filename="tasks_report.xlsx"'
    );


    // Send Excel file
    await workbook.xlsx.write(res);

    res.end();
});


/*
whenever we delete or and wherever ref exist
we need to delete from all of it right ?
if what we're deleting is just a field in another model then just make updateMany pull it deleted
if where we're deleting inside we've another object ID like subsection then we need to use id :{$in} to delete it contents too as we here delete the ids


We use populate() in Mongoose to replace stored ObjectIds with the actual documents they refer to.
MongoDB does not automatically join collections like SQL. It stores references only.
Because subSection doesn't belong to the Course model.
It belongs to the Section model.
Populate courseContent first. Inside each populated courseContent document, also populate subSection.
That's why subSection is inside the object.
*/

