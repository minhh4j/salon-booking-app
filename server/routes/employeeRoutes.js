import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { addEmployee, getEmployee, removeEmployee, updateEmployee } from "../controllers/employeeController.js";
import { isAdmin } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/add-employee", isAdmin ,(req,res,next) => {
    const uploadMiddleware = upload('employee');
    uploadMiddleware.single('employeeImage')(req,res,next)
  }, addEmployee);
router.get("/get-employee"  , getEmployee );
router.delete("/delete-employee/:employeeId", isAdmin  , removeEmployee);
router.patch("/update-employee/:employeeId", isAdmin ,  (req, res, next) => {
    const uploadMiddleware = upload("employee");
    uploadMiddleware.single("employeeImage")(req, res, next);
}, updateEmployee);


export default router;
