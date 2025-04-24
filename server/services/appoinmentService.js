import Appointment from '../models/appoimentModal.js';

// Create appointment
export const createAppointment = async (appointmentData) => {
  const { barberId, date, timeSlot , userId } = appointmentData;
  console.log(userId,'haii')

  const existingAppointment = await Appointment.findOne({
    barberId,
    userId,
    date,
    timeSlot,
  });

  if (existingAppointment) {
    throw new Error('The selected time slot is already booked for this barber.');
  }

  const appointment = new Appointment(appointmentData);
  return await appointment.save();
};

export const getAppointmentsByUser = async (userId) => {
  const appointments = await Appointment.find({ userId })
  .populate("userId", "email fullName") 
  .populate("barberId")
  .populate("serviceId");
 return appointments ;
};




export const fetchAllAppointments = async () => {
  return await Appointment.find()
    .populate("barberId")
    .populate("serviceId");
};


export const cancelAppointmentByIdAndUser = async (appointmentId, userId) => {
    const appointment = await Appointment.findOne({
      _id: appointmentId,
      userId: userId,
    });
  
    if (!appointment) {
      throw new Error('Appointment not found or you are not authorized to cancel this appointment');
    }
  
   
    appointment.status = 'cancelled';
    await appointment.save();
  
    return appointment;
  };