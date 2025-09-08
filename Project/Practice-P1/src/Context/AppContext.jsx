import { createContext, useState } from "react";
import React from 'react'

export const AppContext = createContext();


function ContextProvider({children}) {

   const [theme, setTheme] = useState(0);
  return (
   < AppContext.Provider value={{theme, setTheme}}>
    {children}
   </AppContext.Provider>  )
}
export default ContextProvider;