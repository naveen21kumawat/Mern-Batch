import express, { urlencoded } from "express";
import cors from 'cors'
import connectDB from './config/database.js'
import userModel from './models/user.js'
import authRotes from './routes/user.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
connectDB()

app.get('/',(req,res)=>{
    res.send("Server is Running")
})


app.use('/api/auth',authRotes)




// app.post('/api/register',async(req,res)=>{
//     console.log(req.body.name)
//     console.log("En",req.body)



//     if (req.body.password !== req.body.confirmPassword) {
//         console.log("Password Not Match")
//          return res.status(500).send('Password Not Match')
//         }

//     return res.status(201).send(req.body)

    
// })




// Register route
// app.post('/api/register', (req, res) => {
//     console.log('Register request received:', req.body);
//     const { name, email, password } = req.body;
    
 
//     res.status(201).json({
//         success: true,
//         message: 'User registered successfully',
//         data: {
//             name,
//             email
//         }
//     });
// });

app.get('/api/userData',(req,res)=>{
    res.json([
        {
            name : "Dheeraj",
            email : "dheeraj@gmail.com",
            password : "1234"
        },
        {
            name : "Naveen",
            email : "naveen@gmail.com",
            password : "1234"
        },
        
    ])
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
