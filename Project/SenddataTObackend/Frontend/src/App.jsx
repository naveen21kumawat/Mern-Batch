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
import LayoutDashboard from './components/LayoutDashboard'
function App() {
  // const {isAuthenticated} = useContext(userContext)

  return (
    <ContextProvide>

    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<LayoutDashboard />}>
              <Route index element={<Navigate to="/admin/dashboard" />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="analytics" element={<div className="p-6"><h1 className="text-2xl">Analytics Coming Soon</h1></div>} />
              <Route path="settings" element={<div className="p-6"><h1 className="text-2xl">Settings Coming Soon</h1></div>} />
            </Route>

            {/* User Dashboard Routes */}
            <Route path="/user" element={<LayoutDashboard />}>
              <Route index element={<Navigate to="/user/dashboard" />} />
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="activities" element={<div className="p-6"><h1 className="text-2xl">Activities Coming Soon</h1></div>} />
              <Route path="support" element={<div className="p-6"><h1 className="text-2xl">Support Coming Soon</h1></div>} />
            </Route>

            {/* Legacy routes for backward compatibility */}
            <Route path="/userdashboard" element={<Navigate to="/user/dashboard" />} />
            <Route path="/admindashboard" element={<Navigate to="/admin/dashboard" />} />
            <Route path="/allusers" element={<Navigate to="/admin/users" />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
    </ContextProvide>
  )
}

export default App