import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from 'react';

export const userContext = createContext();

function ContextProvide({ children }) {
    const [name, setName] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');
    // console.log("Token", token);
    const [user, setUser] = useState('');
    const [allusers, setAllusers] = useState([])
    const [loading,setLoading] = useState(false)
    const [ownerTurfs, setOwnerTurfs] = useState([])
    // console.log("User", user);
    // console.log("Token", token);
    // console.log("User", user);


    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setToken(null);
        setUser('');
    }




    useEffect(() => {
        const getAllUsers = async () => {
            try {
                setLoading(true)
                const res = await axios.get("/api/user/allusers")
                // console.log("All Users", res)
                setAllusers(res.data.users)
                setLoading(false)
                return res.data
            } catch (error) {
                console.error("All Users error:", error)
                throw error
            }
        }
        getAllUsers()
    }, [])
    



    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")
        // console.log("User", user);

        if (user && token) {
            setUser(JSON.parse(user))
            setToken(token)
            setIsAuthenticated(true)
        } else {
            setUser('')
            setToken('')
            setIsAuthenticated(false)
        }
    }, [])

    
    useEffect(() => { 
        // fetch turfs by owner id
        const getAllTurfs = async () => {
            try {
                console.log("Get All Turfs By Owner Id", user._id)
                const response = await axios.get(`/api/turf/getAllTurfsByOwnerId/${user._id}`);
                console.log("Turfs", response.data.turfs);
                setOwnerTurfs(response.data.turfs);

            } catch (error) {
                console.error("Turfs error:", error);
                throw error;
            }
        }
        getAllTurfs();
    }, [isAuthenticated])  




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

            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))

            setIsAuthenticated(true)
            setToken(res.data.token)
            setUser(res.data.user)
            return res.data;
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        }
    }
    const login = async (data) => {
        try {
            const res = await axios.post("/api/auth/login", data)
            console.log("Login", res)

            return res
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }


    return (
        <userContext.Provider value={{setAllusers,ownerTurfs,allusers,loading,setLoading, login, name, setName, user, setUser, token, setToken, register, isAuthenticated, logout, setIsAuthenticated }}>
            {children}
        </userContext.Provider>
    );
}

export default ContextProvide;