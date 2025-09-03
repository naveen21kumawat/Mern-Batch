
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import { useEffect, useState } from 'react';
import About from './component/About';
import TaskManager from './component/TaskManager';



function App() {

   const [count, setCount] = useState(() => {
    // get initial value from localStorage
    return Number(localStorage.getItem("count")) || 0;
  });



//     const [users, setUsers] = useState([]);
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => setUsers(data));




  // fetchData()

  return (
    <>
     
    {/* <Header/> */}
      {/* <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/taskmanager' element={<TaskManager/>}/>
      </Routes> */}

      <Header/>
    
    </>
  )
}

export default App
