import mongoose from "mongoose";
import Employee from "../models/employeeModel.js";

export const addEmployeeService = async (employeeData) => {
    const existingEmployee = await Employee.findOne({ employeeName: employeeData.employeeName });

    if (existingEmployee) {
        throw new Error("Employee already exists");
    }

    const employee = await Employee.create(employeeData);
    return employee;
};

export const getEmployeesService = async ({ id, name, page = 1, limit = 10 }) => {
    const skip = (page - 1) * limit;

    const match = { isDeleted: false };

    if (name) {
        match.employeeName = { $regex: name, $options: "i" };
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

    const totalEmployees = await Employee.countDocuments({ isDeleted: false, ...match });

    return { employees, totalEmployees };
};

export const deleteEmployeeService = async (employeeId) => {
    const employee = await Employee.findByIdAndUpdate(
        employeeId, 
        { isDeleted: true },
        { new: true }
    );

    if (!employee) {
        throw new Error("Employee not found");
    }

    return employee;
};


export const updateEmployeeService = async (id, updateData) => {
    const employee = await Employee.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { $set: updateData },
      { new: true }
    );
  
    if (!employee) throw new Error("Employee not found");
    return employee;
  };
  