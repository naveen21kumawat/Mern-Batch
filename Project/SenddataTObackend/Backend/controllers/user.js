import userModel from "../models/user.js";
export const Register = (req, res) => {

    try {
        const { name, email, password } = req.body
        
        const user = new userModel({name,email,password})
        user.save()
        res.status(201).json({ message: "User Registered Successfully" ,
            user : user
        })

    } catch (error) {
        console.log(error)
    }


}

export const Login = (req, res) => {
    console.log(req.body)
}


