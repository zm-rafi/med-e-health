import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import cloudinaryConfig from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

dotenv.config();

// app
const app = express();
const PORT = process.env.PORT || 4000;

// connect to database
connectDB();

// configure cloudinary
cloudinaryConfig();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/admin', adminRouter);

// root endpoint
app.get('/', (req, res) => {
    res.send('API working...');
});

// start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
