import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from 'react';

export const userContext = createContext();

function ContextProvide({ children }) {
    const [name, setName] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(localStorage.getItem(''));
    const [user, setUser] = useState([]);
    console.log("User", user);
    // console.log("Token", token);
    // console.log("User", user);


    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setToken(null);
        setUser([]);
    }
    
    const login = (data) => {
        console.log("Login ", data);
    }



    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     // console.log("Token", token)
    //     const user = localStorage.getItem("user");
    //     // console.log("User", user)
    //     if (token && user) {
    //         // console.log("User", user);
    //         setUser(JSON.parse(user));
    //         setToken(token);
    //         setIsAuthenticated(true);
    //     }else{
    //         localStorage.removeItem("token");
    //         localStorage.removeItem("user");
    //         setIsAuthenticated(false);
    //     }
    // }, []);

    const register = async (data) => {
        try {
            const res = await axios.post("/api/auth/register", data);
            console.log("Register", res);
            
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.user))

            setIsAuthenticated(true)
            setToken(res.data.token)
            setUser(res.data.user)
            return res.data;
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        }
    }

    return (
        <userContext.Provider value={{ login, name, setName, user, register,isAuthenticated,logout }}>
            {children}
        </userContext.Provider>
    );
}

export default ContextProvide;