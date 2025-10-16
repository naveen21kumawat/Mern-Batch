import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const register = async(req,res)  =>{
  console.log(req.body)
  const {name,email,password,role} = req.body

  const ExistUser = await userModel.findOne({email :email}).select("-password")
  console.log("Exist User",ExistUser)
  if(ExistUser){
    return res.status(200).json({
      message : "User Already Exist",
      ExistUser
    })
  }

   
   const salt = await bcrypt.genSalt(10)
  //  console.log(salt)
   const hash = await bcrypt.hash(password,salt)
  //  console.log(hash)
  

  const user  = await userModel.create({
    name : name,
    email :  email,
    password : hash,
    role : role || "user" // Use provided role or default to "user"
  })


  const token = jwt.sign({id : user._id},"DSD!@#hj")
  console.log(token)

  console.log(user)
  res.status(200).json({
    message : "User Register Successfully",
    user,
    token
  })
}


export const  login = async(req,res) =>{
  try {
     const user = await userModel.findOne({email :req.body.email})
     console.log("Exist User",user)
     if(!user){
      return res.status(404).json({
        message : "User Not Found"
      })
     }
     const isMatch =await bcrypt.compare(req.body.password,user.password)
     if(!isMatch){
      return res.status(401).json({
        message : "Password Not Match"
      })
     }

     const token = jwt.sign({id : user._id},"DSD!@#hj")
     console.log(token)
     res.status(200).json({
       message : "User Login Successfully",
       user,
       token
     })

  } catch (error) {
    return res.status(501).json({
      message : "Internal Server Error"
    })
  }


}