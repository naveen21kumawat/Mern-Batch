import express from "express";
import {Register,Login} from "../controllers/user.js";

const authRotes = express.Router();

authRotes.post('/register',Register)
authRotes.post('/login',Login)


export default authRotes
 