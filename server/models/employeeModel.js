import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: [true, "Employee name is required"],
    },
    employeeImage: {
      type: String,
      required: [true, "Employee image URL is required"],
    },
    duration: {
      type: String,
      required: [true, "Employee duration is required"],
    },
    employeeFees: {
      type: Number,
      required: [true, "Employee fees are required"],
      min: 0,
    },
    specialCut: {
      type: String,
      required: [true, "Employee special cut is required"],
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
