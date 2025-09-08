import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 flex space-x-6">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/about" className="text-blue-600 hover:underline">About</Link>
      <Link to="/todo" className="text-blue-600 hover:underline">Todo</Link>
    </nav>
  )
}

export default Navbar