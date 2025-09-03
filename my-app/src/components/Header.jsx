import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  
  return (
    <div className="flex text-blue-500 shadow-lg h-12 w-full items-center justify-center gap-5 font-bold">
      <div className=""><Link to="/home">Home</Link></div>
      <div className=""><Link to="/about">About</Link></div>
      <div className=""><Link to="/cards">Members</Link></div>
      <div className=""><Link to="/about">Login</Link></div>
      <div className=""><Link to="/about">Register</Link></div>
    </div>
  )
}

export default Header