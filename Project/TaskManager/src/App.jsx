import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Home from './components/Home'
import About from './components/About'
import AppContext from './Context/AppContext'

function App() {
  return (
    <>
    <AppContext>

    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      {/* <Route  path="/" element={<About />} /> */}
      <Route  path="/about" element={<About />} />
      <Route  path="/todo" element={<Todo />} />

      </Routes>
    </AppContext>

    </>
  )
}

export default App