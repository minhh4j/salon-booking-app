import { asyncHandler } from "../middleware/asyncHandler.js";
import { 
    addEmployeeService, 
    deleteEmployeeService, 
    getEmployeesService, 
    updateEmployeeService
} from "../services/employeeService.js";

export const addEmployee = asyncHandler(async (req, res) => {
    const employeeData = req.body; 

    if (req.file && req.file.path) {
        employeeData.employeeImage = req.file.path;
    } else {
        return res.status(400).json({
            success: false,
            message: "Image upload failed. Please include a valid image file.",
        });
    }

    const employee = await addEmployeeService(employeeData);
    res.status(201).json({
        success: true,
        message: "Employee added successfully",
        employee,
    });
});

export const getEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { page = 1, limit = 10, name } = req.query;

    const { employees, totalEmployee } = await getEmployeesService({
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

export const removeEmployee = asyncHandler(async (req, res) => {
    const { employeeId } = req.params;

    const employee = await deleteEmployeeService(employeeId);
    
    if (!employee) {
        return res.status(404).json({
            success: false,
            message: "Employee not found",
        });
    }

    res.status(200).json({
        success: true,
        message: "Employee removed successfully",
    });
});


export const updateEmployee = asyncHandler(async (req,res) => {
    const {employeeId} = req.params;
    const employeeData = req.body;

    if(req.file && req.file.path){
        employeeData.employeeImage = req.file.path
    }
    else{
        throw new Error ("Invalid Employee Image")
    }

    const employee = await updateEmployeeService(employeeId,employeeData)

    if(!employee){
        res.status(400).json({
            success:false,
            message:"Invalid Employee"
        })
    }
    else{
        res.status(200).json({
            success:true,
            message:"Update Employee succesfull",
            employee
        })
    }
})