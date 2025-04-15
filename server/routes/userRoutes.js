
import express from 'express'
import { getUser,createUser } from '../controllers/userController.js';


const router = express.Router();

router.get("/user/:clerkId", getUser);
router.post("/user",createUser )

export default router ;