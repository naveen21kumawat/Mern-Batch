import userModel from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const Register = async(req, res) => {

    try {
        const { name, email, password } = req.body
    console.log("Register",req.body)
         const existUser =await userModel.findOne({email})
          console.log("ExistUser",existUser)
         if (existUser) {
            return res.status(400).json({ message: "User Already Exist" })
         }

         const salt = await bcrypt.genSalt(10)
         console.log("Salt",salt)
         const hashPassword = await bcrypt.hash(password,salt)
         console.log("HashPassword",hashPassword)



        console.log("Register", req.body)
        const user = new userModel({name, email, password: hashPassword})
        await user.save()
        
        const jwtToken = jwt.sign({id: user._id}, "secretkey", {expiresIn: "1h"})
        console.log("Token", jwtToken)
        res.status(201).json({ 
            message: "User Registered Successfully",
            user: user,
            token: jwtToken
        })
    } catch (error) {
        console.log(error)
    }


}

export const Login = (req, res) => {
    console.log(req.body)
}


