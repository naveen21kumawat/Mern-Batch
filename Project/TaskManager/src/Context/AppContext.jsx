import { createContext, useState } from "react";

export const UserContext = createContext()



function AppContext({children}) {

  const [data,setData] = useState([])
  return (


    <UserContext.Provider value={{data,setData}}>

    {children}
    </UserContext.Provider>
  )
}

export default AppContext
