import { createContext, useContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext()

export const useAuth = () => {
  return useContext(UserContext)
}


function AppContext({children}) {
  const [name, setName] = useState("")
  const [data,setData] = useState([])
  const [todo,setTodo] = useState([])

  const sendData = async (userData) => {
    try {
      let user = await axios.post('/api/sendData',userData)
      console.log(user.data)
      setData(user.data)
    } catch (error) {
      console.error("Error sending data:", error)
    }
  }
  return (


    <UserContext.Provider value={{todo,setTodo,data,setData,sendData,name,setName}}>

    {children}
    </UserContext.Provider>
  )
}

export default AppContext
