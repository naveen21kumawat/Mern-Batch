import express from 'express';
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import turfRoutes from './routes/turfRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

connectDB()

app.get('/',(req,res)=>{
 res.send("this is get request")
})


app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)
app.use('/api/turf',turfRoutes)


app.listen(3002, ()=>{
    console.log("server is runnng of 3002")
})



