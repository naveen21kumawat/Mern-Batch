import userModel from '../models/userModel.js'


const getAllUsers = async (req, res) => {

    const users = await userModel.find().select("-password")
    if (users) {
        return res.status(200).json({
            message: "Users Found",
            users
        })
    } else {
        return res.status(400).json({
            message: "Users Not Found"
        })


    }

}
export default getAllUsers;