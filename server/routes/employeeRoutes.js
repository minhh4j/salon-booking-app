import express from 'express'
import upload from '../middleware/uploadMiddleware.js';
import { addEmployee, getEmployee, removeEmployee } from '../controllers/employeeController.js';

const routes = express.Router();

routes.post('/add-employee' , upload.single('image') , addEmployee)
routes.get('/get-employee' , getEmployee) 
routes.delete('/delete-employee/:employeeId' , removeEmployee )

export default routes ;