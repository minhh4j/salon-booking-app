import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: [true, "Service name is required"],
      unique: true,
    },
    serviceCharge: {
      type: Number,
      required: [true, "Service charge is required"],
    },
    image: {
      type: String,
      required: [true, "Service image URL is required"],
    },
    duration: {
      type: String,
      required: [true, "Service duration is required"],
    },
    serviceDescription: {
      type: String,
      required: [true, "Service description is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
