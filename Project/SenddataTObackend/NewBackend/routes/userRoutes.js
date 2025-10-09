import express from 'express'
import  getAllUsers  from "../controllers/userControllers.js";
const userRoutes = express.Router();


userRoutes.get('/getAllUsers',getAllUsers)

// userRoutes.get('/getUserById/:id',getUserById)




export default userRoutes;