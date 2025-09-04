import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <div className="h-10w-full flex justify-around items-center shadow-lg ">
      {/* <a className='' href="/home">Home</a> */}
      <Link to='/home' >Home</Link>
      <Link to='/about' >About</Link>
    </div>
  )
}

export default Navbar