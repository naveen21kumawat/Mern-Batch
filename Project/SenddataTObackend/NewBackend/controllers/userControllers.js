import userModel from '../models/userModel.js'

export const getAllUsers = async (req,res) =>{
    try {
        const users = await userModel.find()
        console.log(users)
        return res.status(200).json({
            message : "Users Found",
            users
        })
    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
    
}

