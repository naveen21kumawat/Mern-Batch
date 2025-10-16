import userModel from '../models/userModel.js'

export const getAllUsers = async (req,res) =>{
    try {
        const users = await userModel.find()
        // console.log(users)
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

export const deleteUser = async(req,res)=>{
try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id)
 




    console.log("Deleted User",deletedUser)
    return res.status(200).json({
        message : "User Deleted",
        deletedUser
    })
} catch (error) {
    return res.status(500).json({
        message : "Internal Server Error"
    })
}
}


export const updateUser = async(req,res) =>{
    try {
        console.log(req.params.id)
        console.log(req.body)
         const updateUser = await userModel.findByIdAndUpdate(req.params.id,req.body)
         console.log("Updated User",updateUser)
         return res.status(200).json({
            message : "User Updated",
            updateUser
         })
    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
}