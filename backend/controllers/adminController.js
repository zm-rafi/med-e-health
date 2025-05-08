import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js';

// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, phone, speciality, degree, experience, about, fees, address } = req.body;
        const File = req.file; // Assuming you're using multer to handle file uploads

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "All fields are required" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password should be at least 8 characters" });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Image upload
        const imgUpload = await cloudinary.uploader.upload(File.path, { resource_type: "image" });
        const imageUrl = imgUpload.secure_url;

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Doctor added successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API for admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Check if email matches the environment variable for admin email
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API for fetching all doctors
const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).sort('-password');
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addDoctor, loginAdmin, allDoctors };
