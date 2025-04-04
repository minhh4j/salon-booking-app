
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: [true, "Employee name is required"],
      unique: true,
    },
    employeeImage: {
      type: String,
      required: [true, "Employee image URL is required"],
    },
    duration: {
      type: String,
      required: [true, "Employee time is required"],
    },
    employeefees: {
      type: Number,
      required: [true, "Employee fees are required"],
      min: 0,
    },
    iconicCut: {
      type: String,
      required: [true, "Employee specialCut are required"],
  },
    description: {
      type: String,
      required: [true, "Employee description is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
