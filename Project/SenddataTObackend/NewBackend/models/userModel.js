import mongoose from "mongoose";

const userSchame = new mongoose.Schema({
   name : {
    type : String,
    required : true
},
   email : String,
   password : String
})

const userModel = mongoose.model("user",userSchame)
export default userModel