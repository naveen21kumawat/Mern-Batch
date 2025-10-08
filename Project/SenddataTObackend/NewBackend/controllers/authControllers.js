import userModel from "../models/userModel.js"

export const register = async(req,res)  =>{
  console.log(req.body)
  const {name,email,password} = req.body

  const user  = await userModel.create({
    name : name,
    email :  email,
    password : password
  })
  console.log(user)
  res.status(200).json({
    message : "User Register Successfully",
    user
  })
}


export const  login = () =>{

}