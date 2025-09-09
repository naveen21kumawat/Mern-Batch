
import './App.css'
import CreateUser from './Components/CreateUser'
import Home from './Components/Home'
import ContextProvider from './Context/ContextProvider'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    
  <ContextProvider>
  <Home/>
  <Routes>
    <Route path='/' element={<CreateUser/>}/>

  </Routes>

    

  </ContextProvider>

    
  )
}

export default App
