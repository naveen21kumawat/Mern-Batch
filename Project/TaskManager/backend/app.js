// import http from 'http'

// const server = http.createServer((req, res) => {
//  res.writeHead(200, {"content-type": "text/plan"})

//  res.write("hello world")

//  res.write("hello world")
//  res.write("hello world")
//  res.write("hello world")
//  res.write("hello world")
//  res.write("hello world")
//  res.write("hello world")
 
//  req.on('data',(r)=>{
//   console.log("HEllo")
// })
// req.on('end',()=>{
  
// })
// res.end("Task Completed")
// })



// const PORT = 5000
// server.listen(PORT , function(){
//   console.log("server running")
// })

import express from "express"
const app = express()
import cors from 'cors'


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
res.send("Hello")
})
app.get('/api',(req,res)=>{
  res.json([
    {
      id : 1,
      name : "Naveen",
      title : 'Trainer',
      img: 'gufuyiugy8',
      body : 'Hello'
    },
    {
      id : 1,
      name : "Naveen",
      title : 'Trainer',
      img: 'gufuyiugy8',
      body : 'Hello'
    },
    {
      id : 1,
      name : "Naveen",
      title : 'Trainer',
      img: 'gufuyiugy8',
      body : 'Hello'
    },
    {
      id : 1,
      name : "Naveen",
      title : 'Trainer',
      img: 'gufuyiugy8',
      body : 'Hello'
    },
  ])
})

app.get('/todo',(req,res)=>{
  res.send([
    'Tasl 1',
    'Tasl 2',
    'Tasl 3',
    'Tasl 4',
    'Tasl 5',
  ])
})



app.listen(3000,()=>{
  console.log("server running")
})
