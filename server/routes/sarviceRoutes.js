import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  addServiceController,
  deleteServiceController,
  getServiceController,
  updateServiceController,
} from "../controllers/serviceController.js";

const router = express.Router();

router.post("/add-service", (req,res,next) => {
  const uploadMiddleware = upload('service');
  uploadMiddleware.single('image')(req,res,next)
}, addServiceController);


router.get("/get-service", getServiceController);
router.delete("/delete-service/:serviceId", deleteServiceController);

router.put("/update-service/:serviceId",  (req,res,next) => {
  const uploadMiddleware = upload('service');
  uploadMiddleware.single('image')(req,res,next)
} , updateServiceController);

export default router;
