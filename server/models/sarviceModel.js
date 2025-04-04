
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    servicename: {
      type: String,
      required: [true, "Service name is required"],
      unique: true,
    },
    servicecharge: {
      type: Number,
      required: [true, "Service price is required"],
    },
    image: {
      type: [],
      required: [true, "Service image URL is required"],
    },
    duration: {
      type: String,
      required: [true, "Service duration is required"],
    },
    serviecedescription: {
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

export default mongoose.model("Sarvice", serviceSchema);
