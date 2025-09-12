
import express from 'express'
import bcrypt from 'bcrypt'
const server = express()
server.use(express.json())


server.post('/api/sendData',(req,res)=>{
  // console.log("Request body:", req.body)

  if(req.body.type === 'signup'){
   const {name,email,password} = req.body;
   
   //  salt and hash password
   let salt = bcrypt.genSaltSync(10)
  let hashpassword = bcrypt.hashSync(password,salt)
  
  // req.body.password = hashpassword
  
  console.log(name,email,hashpassword)
    res.json({
      message: "Data received successfully",
      receivedData: req.body
    })
  }
  if(req.body.type === 'login'){
   const {email,password} = req.body;
   let check = bcrypt.compareSync(password,'$2b$10$Oq8VcNgyLXHcp8ouF7c/leU5tDohtisGBBu4uqYP/3haJufjL3242')
   console.log(check)
    res.json({
      message: "Data received successfully",
      receivedData: req.body
    })
  }

})

server.post

server.listen(3001,()=>{
  console.log("Server Running")
})