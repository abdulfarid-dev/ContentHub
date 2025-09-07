import express from "express";
const app= express();
import UserRoutes from './routes/UserRoutes.js';
import studentRoutes from'./routes/studentRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import postRoutes from './routes/postRoutes.js'

import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config(); //dotenv configration
import cors from 'cors'
app.use(cors()) // cors configration

// app.use(cors({
//   origin: "http://localhost:5173", // your Vite frontend
//   credentials: true
// }));

app.use(express.json());

// to parse incoming request
// app.use(express.morgan('dev'))





app.use('/user',UserRoutes)

app.use('/student',studentRoutes)

app.use('/profile',profileRoutes)

app.use('/post',postRoutes);


app.listen(process.env.PORT, () => {
    console.log(`port is running on :${process.env.PORT}`);
});




mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongo DB connected successfully");})
.catch((err)=>{ console.log(err);})
