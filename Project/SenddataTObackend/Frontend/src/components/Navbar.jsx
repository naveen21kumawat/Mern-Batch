import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../Context/ContextProvide'
function Navbar() {
  const { isAuthenticated ,logout,user} = useContext(userContext);
  console.log(isAuthenticated)
  console.log(user)
  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold hover:text-blue-300 transition-colors">
              MyApp
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>




              {  user && user.role === "admin" && (
                <Link 
                to="/admin" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Admin Dashboard
              </Link>
              )}






              
              {  user && user.role === "user" && (
                <Link 
                to="/user" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                User Dashboard
              </Link>
              )}

              {
                isAuthenticated && (
                  <>
                  <Link 
                to="/profile" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Profile
              </Link>
                  <Link 
                to="/allusers" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Users
              </Link>
                </>
              )
            }

             
             {
              !isAuthenticated && (
                
             
                  <>
                  <Link 
                to="/login" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Register
              </Link>
                  </>
               )
              }

              {
                isAuthenticated &&(
                  <Link 
                to="/login" 
                onClick={()=>logout()}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </Link>
                )
              }
            
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
