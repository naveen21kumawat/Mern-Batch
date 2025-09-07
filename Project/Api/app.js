import express from "express";
import cors from "cors"


const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use('/',(req,res)=>{
  res.send([
    {
      name: "Naveen",
      age: 20
    }
  ])
})


app.listen(3000,()=>{
  console.log("Server is running")
})
