import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Batch2025');
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default connectDB;