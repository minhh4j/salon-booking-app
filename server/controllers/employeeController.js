import { asyncHandler } from "../middleware/asyncHandler.js";
import { addEmployeeSarvice, deleteEmployeeServiece, getEmployeeSarviece } from "../sarvieces/employeeSarviece.js";



export const addEmployee = asyncHandler( async  (req,res) => {
    const employeeData = req.body ; 
    if(req.file && req.file.path){
        employeeData.image = req.file.path 
    }
    else{
       return res.status(400).json({
        success: false,
        message: "Image upload failed. Please include a valid image file.",
       })
    }
    const employee = await addEmployeeSarvice(employeeData)
    res.status(201).json({
        success : true ,
        message : "employee add succesfully",
        employee
    })
})



export const getEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { page = 1, limit = 10, name } = req.query;

    const { employees, totalEmployee } = await getEmployeeSarviece({
        id,
        name,
        page: parseInt(page),
        limit: parseInt(limit),
    });

    return res.status(200).json({
        success: true,
        count: employees.length,
        totalEmployee,
        totalPages: Math.ceil(totalEmployee / limit),
        currentPage: parseInt(page),
        employees,
    });
});

export const removeEmployee = asyncHandler(async (req,res) => {
    const {employeeId} = req.params;

    const employee = await deleteEmployeeServiece(employeeId)
    res.status(200).json({
        success:true , 
        message:'remove Employee succesfully'
    })
})