import express from 'express';
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/db.js';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB()

app.get('/',(req,res)=>{
 res.send("this is get request")
})


app.use('/api/auth',authRoutes)

app.listen(3002, ()=>{
    console.log("server is runnng of 3002")
})



