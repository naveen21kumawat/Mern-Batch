import React, { useEffect, useState } from "react";
import Users from "./Components/Users";
import { Routes, Route, Router } from "react-router-dom";
import UserDetails from "./Components/UserDetails";
import axios from "axios";
import ContextProvider from "./Context/AppContext";

function App() {
  // const [data, setdata] = useState([]);
  // console.log("data", data);
  // useEffect(async () => {
  //   let res = await axios.get("http://localhost:3000/");
  //   setdata(res.data);
  //   console.log("res", res.data);
  // }, []);
  return (
    <>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </ContextProvider>
    </>
  );
}

export default App;
