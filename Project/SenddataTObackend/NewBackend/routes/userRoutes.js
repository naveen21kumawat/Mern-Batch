import express from 'express'
import { getAllUsers ,deleteUser} from '../controllers/userControllers.js'
const userRoutes = express.Router();


userRoutes.get('/allusers',getAllUsers)
userRoutes.delete('/deleteuser/:id',deleteUser)




export default userRoutes;