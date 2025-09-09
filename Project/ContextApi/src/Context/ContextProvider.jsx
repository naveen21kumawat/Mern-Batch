import {  useState } from "react"
import { createContext } from "react";
export const BioContext = createContext()

function ContextProvider({children}) {
const [bioData, setBioData] = useState([{
  name : "Naveen"
}])

  return (

    <BioContext.Provider value={{bioData,setBioData}}>
         {children}
    
    </BioContext.Provider>
  )
}

export default ContextProvider

