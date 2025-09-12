import React from 'react'
import { useAuth } from '../Context/AppContext'

function About() {

  const {sendData} = useAuth()

  const handleSubmit = async() => {
  let user = await sendData("NAVEEN")
  console.log(user)
  }
  return (<>
    <div>Welcome To About Page</div>
    <button onClick={()=>handleSubmit()}>CLick ME</button>
  </>
  )
}

export default About