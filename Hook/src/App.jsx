import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";
import About from "./components/About";

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
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
      {/* <Home  /> */}
     
    </>
  );
}

export default App;
