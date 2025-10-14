import express from 'express'
import { getAllUsers ,deleteUser ,updateUser} from '../controllers/userControllers.js'
const userRoutes = express.Router();


userRoutes.get('/allusers',getAllUsers)
userRoutes.delete('/deleteuser/:id',deleteUser)
userRoutes.put('/updateuser/:id',updateUser)




export default userRoutes;