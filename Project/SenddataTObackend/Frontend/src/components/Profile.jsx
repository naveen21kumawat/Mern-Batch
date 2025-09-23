import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context/ContextProvide'
function Profile() {

    const {user} = useContext(userContext)


    console.log(user)
  return (

  <div className="flex flex-row gap-2">{
    user.map((item,index)=>{
        return(
            <div className="flex  gap-2 flex-col l border border-gray-300 p-4 rounded-lg shadow-lg" key={index}>
               <img src="" alt="" className='w-full h-12 bg-green-100' />
               <h1 className="text-ms italic font-bold">{item.name}</h1>
               <h1 className="text-sm">{item.email}</h1>
               <h1 className="text-sm">{item.password}</h1>
            </div>
        )
    })
  }</div>
    
    
  )
}

export default Profile