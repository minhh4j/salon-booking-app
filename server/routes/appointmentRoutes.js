import express from "express"
import { bookAppointment, cancelAppointment, getAllAppointments, getAppointments } from "../controllers/appoinmetController.js"


const router = express.Router()

router.get("/allAppointment", getAllAppointments);
router.post('/book' , bookAppointment)
router.get("/my/:userId", getAppointments);
router.patch('/:id/cancel', cancelAppointment);


export default router