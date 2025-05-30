import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Load environment variables from .env file
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import adminRouter from './routes/adminRoute.js';
import connectCloudinary from './config/cloudinary.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';


dotenv.config();

// app
const app = express();
const port = process.env.PORT || 4000;

// connect to database
connectDB();

// configure cloudinary
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

// root endpoint
app.get('/', (req, res) => {
    res.send('API working...');
});

// start server
app.listen(port, () => console.log("server starts",port));
