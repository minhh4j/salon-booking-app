import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { addEmployee, getEmployee, removeEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/add-employee", (req,res,next) => {
    const uploadMiddleware = upload('employee');
    uploadMiddleware.single('employeeImage')(req,res,next)
  }, addEmployee);
router.get("/get-employee", getEmployee);
router.delete("/delete-employee/:employeeId", removeEmployee);

export default router;
