import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <div className="h-16 w-full flex justify-around items-center shadow-lg bg-white">
      {/* <a className='' href="/home">Home</a> */}
      <Link to='/' className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-200 font-medium">Home</Link>
      <Link to='/about' className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-200 font-medium">About</Link>
      <Link to='/users' className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-200 font-medium">Users</Link>
  <Link to='/tasks' className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-200 font-medium">Tasks</Link>
  <Link to='/useref-usememo-demo' className="px-4 py-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-md transition-all duration-200 font-medium">useRef/useMemo Demo</Link>
    </div>
  )
}

export default Navbar