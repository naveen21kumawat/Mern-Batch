import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context/ContextProvide'
function AllUsers() {

    const {allusers} = useContext(userContext)
    console.log("All Users",allusers)
    return (
        <div>
            <h1>All Users</h1>
            {
                allusers.map((user)=>{
                    return(
                        <div key={user._id}>
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllUsers