import mongoose from "mongoose";

const userSchame = new mongoose.Schema({
   name : {
    type : String,
    required : true
},
   email : String,
   password : String,
   role :{
      type : String,
      enum : ["user","admin"],
      default : "user"
   }
})

const userModel = mongoose.model("user",userSchame)
export default userModel