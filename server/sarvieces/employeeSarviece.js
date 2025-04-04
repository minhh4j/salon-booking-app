import mongoose from "mongoose";
import Employee from "../models/employeeModal.js";

export const addEmployeeSarvice = async (employeeData) => {
    const existingEmployee = await Employee.findOne({ name: employeeData.name })

        if (existingEmployee) {
            throw new Error("Employee already exists");
        }
    
        const employee = await Employee.create(employeeData);
        return employee
}


export const getEmployeeSarviece = async ({ id, name, page, limit }) => {
    const skip = (page - 1) * limit;

    const match = { isDeleted: false };;

    if (name) {
        match.name = { $regex: name, $options: "i" };
    }

    if (id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ID format");
        }
        match._id = new mongoose.Types.ObjectId(id);
    }

    const pipeline = [
        { $match: match },
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: limit },
    ];

    const employees = await Employee.aggregate(pipeline);

    if (id && employees.length === 0) {
        throw new Error("Employee not found or is deleted");
    }

    const totalEmployee = await Employee.countDocuments({isDeleted:false , ...match});

    return { employees, totalEmployee };
};

export const deleteEmployeeServiece = async (employeeId) => {
    const employee = await Employee.findByIdAndUpdate(
        employeeId, 
        {isDeleted:true},
        {new : true }
      ) 
      if(!employee){
        throw new CustomError('Employee is not fount' , 404)
      }
      return employee ;
}