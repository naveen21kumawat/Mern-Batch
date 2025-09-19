import { createContext, useState } from "react";

export const userContext = createContext()



import React from 'react'

function ContextProvide({ children }) {


    const [name, setName] = useState('Dheeraj')

    const login = (data) => {

        console.log("Login ",data)
    }

    return (
        <userContext.Provider
            value={{ login, name, setName }}>

            {children}
        </userContext.Provider>
    )
}

export default ContextProvide