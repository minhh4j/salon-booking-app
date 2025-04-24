import { asyncHandler } from "../middleware/asyncHandler.js";
import {
    cancelAppointmentByIdAndUser,
  createAppointment,
  fetchAllAppointments,
  getAppointmentsByUser,
} from "../services/appoinmentService.js";


export const bookAppointment = asyncHandler(async (req, res) => {
  const appointmentData = {
    ...req.body,
    
  };
  const newAppointment = await createAppointment(appointmentData);
  res.status(201).json(newAppointment);
});


export const getAppointments = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    res.status(400);
    throw new Error("User ID is required in params");
  }

  const appointments = await getAppointmentsByUser(userId);
  res.status(200).json(appointments);
});

  
  export const getAllAppointments = asyncHandler(async (req, res) => {
    const appointments = await fetchAllAppointments();
    console.log(appointments , "vgbhcnjxmz");
    
    res.status(200).json(appointments);
  });


  export const cancelAppointment = asyncHandler(async (req, res) => {
    const { id } = req.params; 
    const { userId } = req.body; 
  
    const cancelledAppointment = await cancelAppointmentByIdAndUser(id, userId);
  
    res.status(200).json({
      message: 'Appointment cancelled successfully',
      cancelledAppointment,
    });
  });