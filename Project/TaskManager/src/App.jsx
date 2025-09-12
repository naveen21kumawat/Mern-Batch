import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import AppContext from './Context/AppContext'

function App() {
  return (
    <>
    <AppContext>

    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/todo" element={<Todo />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/register" element={<Login />} />
      </Routes>
    </AppContext>

    </>
  )
}

export default App