dotenv.config();
import express from 'express' 
import dotenv from 'dotenv'
import {connectDb} from './config/db.js'
import sarviceRoutes from './routes/sarviceRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import employeeRoutes from './routes/employeeRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import userRoutes from './routes/userRoutes.js'

import cors from 'cors'




const app = express()

app.use(cors());
app.use(express.json());

connectDb();


app.use('/api', userRoutes);
app.use('/api', sarviceRoutes)
app.use('/api', employeeRoutes)
app.use('/api', appointmentRoutes)

// app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(PORT , () => console.log(`🚀 Server is running on port ${PORT}`))


