import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'

//api for adding doctor

const addDoctor =async (removeEventListener,req,res)=>{
    try {
        const { name, email, password, phone, specialization,degree,experience,about,fees,address } = req.body;
        const image = req.file; // Assuming you're using multer to handle file uploads
        
        if(!name || !email || !password || !phone || !specialization || !degree || !experience || !about || !fees || !address) {
            return res.json({ success:false,message: "All fields are required" });
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"password should be at least 8 characters"})
        }
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //img upload
        const  imgUpload=await cloudinary.uploader.upload(image.path, {resource_type: "image"});
        const imageUrl = imgUpload.secure_url;
        

        
        // console.log({name,email,password,speciality,degree,experience})
        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now(),
            
        };
        const newDoctor =  new Doctor(doctorData)
        await newDoctor.save();
        res.json({success:true,message:"Doctor added successfully",doctor:newDoctor})
        // res.status(201).json({ message: "Doctor added successfully", doctor });
    } catch (error) {
        console.log(error)
        res.json({ success:false,message:error.message});
    }
}
//api for  admin
const loginAdmin = async(req,res)=>{
    try{
        const {email,password} = req.body
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"all fields are required"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }
        const admin = await Admin.findOne({email})
        if(!admin){
            return res.json({success:false,message:"admin not found"})
        }
        const isMatch = await bcrypt.compare(password,admin.password)
        if(!isMatch){
            return res.json({success:false,message:"invalid credentials"})
        }
        res.status(200).json({success:true,message:"login success",admin})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {addDoctor,loginAdmin}