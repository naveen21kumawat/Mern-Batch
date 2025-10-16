import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import ContextProvide, { userContext } from './Context/ContextProvide'
import Profile from './components/Profile'
import AllUsers from './components/AllUsers'
import { Navigate } from 'react-router-dom'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'
import OwnerDashboard from './components/OwnerDashboard'
import AddTurf from './components/AddTurf'
import OwnerTurf from './components/OwnerTurf'
function App() {
  // const {isAuthenticated} = useContext(userContext)

  return (
    <ContextProvide>

    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/ownerdashboard" element={<OwnerDashboard />} />
            <Route path="/addturf" element={<AddTurf />} />
          
              <Route path="/profile" element={<Profile />} />
              
              <Route path="/allusers" element={<AllUsers />} />
              <Route path="/owner/turfs" element={<OwnerTurf />} />
           

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
    </ContextProvide>
  )
}

export default App