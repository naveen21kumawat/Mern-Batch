import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req,res)  =>{
  console.log(req.body)
  const {name,email,password} = req.body

  const ExistUser = await userModel.findOne({email :email})
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
    password : hash
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


export const  login = () =>{

}