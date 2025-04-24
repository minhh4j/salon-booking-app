import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { addEmployee, getEmployee, removeEmployee, updateEmployee } from "../controllers/employeeController.js";



const router = express.Router();

router.post("/add-employee",(req,res,next) => {
    const uploadMiddleware = upload('employee');
    uploadMiddleware.single('employeeImage')(req,res,next)
  }, addEmployee);
router.get("/get-employee"  , getEmployee );
router.delete("/delete-employee/:employeeId"  , removeEmployee);
router.patch("/update-employee/:employeeId" ,  (req, res, next) => {
    const uploadMiddleware = upload("employee");
    uploadMiddleware.single("employeeImage")(req, res, next);
}, updateEmployee);


export default router;
