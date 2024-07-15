import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri, {
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error: ", err.message);
    }
};

export default connectDB;
