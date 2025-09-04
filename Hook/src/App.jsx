import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";
import TaskManager from "./components/TaskManager";

function App() {


  //  useEffect(()=>{
  //   alert("I am alwways run")
  //  })

  // useEffect(() => {
  //   alert("Run only once");
  // }, []);

  // useEffect(() => {
  //   alert("Run only When Count Change");
  // }, [count]);
  

  return (
    <>

      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/users" element={<UserList />}></Route>
      <Route path="/users/:id" element={<UserDetails />}></Route>
      <Route path="/tasks" element={<TaskManager />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
      {/* <Home  /> */}
     
    </>
  );
}

export default App;
