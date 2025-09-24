import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect('mongodb://localhost:27017/DNS')
    console.log(`MongoDB Connected`)
    
  } catch (error) {
    console.log(error)
   
  }

}

export default connectDB
