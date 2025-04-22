import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: String
    },
    barberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    serviceId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    }],
    date: {
      type: String,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "declined", "completed"],
      default: "pending",
    },
    price: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "paid",
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
