import { createContext, useState,useEffect } from "react";
export const userContext = createContext()
import axios from "axios"

import React from 'react'

function ContextProvide({ children }) {

    const [name, setName] = useState('Dheeraj')


    const [user, setUser] = useState(null)
    
    const login = (data) => {
        console.log("Login ", data)
    }

 useEffect(() => {
    
   const fetchUser = async() => {
    try {
        const res = await axios.get("/api/userData")
        setUser(res.data)
    } catch (error) {
        console.log(error)
    }
   }
   fetchUser()


 },[])


    return (
        <userContext.Provider
            value={{ login, name, setName, user }}>

            {children}
        </userContext.Provider>
    )
}

export default ContextProvide