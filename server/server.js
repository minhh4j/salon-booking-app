dotenv.config();
import express from 'express' 
import dotenv from 'dotenv'
import {connectDb} from './config/db.js'
import sarviceRoutes from './routes/sarviceRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import employeeRoutes from './routes/employeeRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'




const app = express()

app.use(cors());
app.use(express.json());

connectDb();


app.use('/api', userRoutes);
app.use('/api', sarviceRoutes)
app.use('/api',  employeeRoutes)

// app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(PORT , () => console.log(`🚀 Server is running on port ${PORT}`))



// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import { connectDb } from "./config/db.js";
// import sarviceRoutes from "./routes/sarviceRoutes.js";
// import { errorHandler } from "./middleware/errorHandler.js";
// import employeeRoutes from "./routes/employeeRoutes.js";
// import { clerkClient } from "@clerk/clerk-sdk-node";
// import userRoutes from './routes/userRoutes.js'

// const app = express();
// app.use(express.json());

// connectDb();

// app.get("/user/:clerkId", async (req, res) => {
//   try {
//     const { clerkId } = req.params;
//     const user = await clerkClient.users.getUser(clerkId);
//     res.json(user);
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     res.status(500).json({ error: "Failed to fetch user" });
//   }
// });

// app.use('/api', userRoutes);
// app.use("/api", sarviceRoutes);
// app.use("/api", employeeRoutes);

// app.use(errorHandler);

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
