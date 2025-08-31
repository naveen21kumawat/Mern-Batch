import { Link } from "react-router-dom"

function Header(){
 return(
  <>
  <div className="w-full flex justify-start pl-20 shadow-lg h-10 items-center gap-20 hover:bg-blue-100">

   <div className="text-blue-300 font-bold hover:text-blue-500"><Link  to='/home'>Home</Link></div>
   <div className="text-blue-300 font-bold hover:text-blue-500"><Link to='/about'>About</Link></div>
   <div className="text-blue-300 font-bold hover:text-blue-500"><Link to='/taskmanager'>TaskManager</Link></div>
  </div>
  </>
 )
}
export default Header
