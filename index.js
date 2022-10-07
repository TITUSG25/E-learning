import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
const connect =()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("MONGO DB is connected")
    }).catch((err)=>{
        throw err;
    })
}
app.use(cors({
    origin: ["http://localhost:3000/"],
    methods:["POST"],
    credentials: true,
}))
app.use(cookieParser());
app.use("/api/user",authRoutes)
app.listen(8000,()=>{
    console.log("Server is running on port 8000");
    connect();
})

