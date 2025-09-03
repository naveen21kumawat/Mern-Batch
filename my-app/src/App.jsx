import Header from "./components/Header"
import './App.css'
import { Routes ,Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Card from "./components/Card"
import { useState } from "react"



function App() {
 

const [cardData,setCardData]= useState( [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      name: "John Doe",
      title: "Software Engineer"
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-photo/scarlet-macaw-perched-branch_23-2152007131.jpg??w=300&h=300&fit=crop&crop=face",
      name: "Jane Smith",
      title: "UI/UX Designer"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      name: "Mike Johnson",
      title: "Product Manager"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      name: "Sarah Wilson",
      title: "Marketing Specialist"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      name: "DJ",
      title: "Marketing Specialist"
    }
  ])




 


// let name =  'Naveen'

  return (<>
    <Header/>
   <Routes>
   {/* <Route path="/" element={<Header/>}/> */}
   <Route path="/home" element={<Home/>}/>
   {/* <Route path="/about" element={<About  myName={name}  age='20'/>}/> */}
   {/* <Route path="/cards" element={<Card  membersdata={cardData}/>}/> */}
   </Routes>
   
    
  </>
  

  )
}

export default App