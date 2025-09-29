import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context/ContextProvide'
function Profile() {

    const {isAuthenticated,user} = useContext(userContext)
    console.log(user)

    if(!isAuthenticated){
        return(
            <h1>Please Login</h1>
        )
    }
  
  return (


    <div className="flex flex-row gap-2">
      
      <h1>User Profile</h1>
            <div className="flex  gap-2 flex-col l border border-gray-300 p-4 rounded-lg shadow-lg">
               {/* <img src="" alt="" className='w-full h-12 bg-green-100' /> */}

               <h1 className="text-ms italic font-bold">{user.name}</h1>
               <h1 className="text-sm">{user.email}</h1>
               <h1 className="text-sm">{user.password}</h1>
            </div>
  </div>
    
    
  )
}

export default Profile