import React, { useEffect, useState } from 'react'

function Home() {


   const [data,setdata] = useState(["Hello",])
   const [name,setName] = useState(["Dheeraj",'Suraj'])
   
   console.log("data",data)
   console.log('Name',name)
function ChangeData(name){
  setdata([...data,name])
}

 

  
  return (
    <div className="  h-screen bg--100 text-4xl teaxt">
    <div>
       
       {/* {data.map((p)=>( 
        <div className="">
          <p>{p}</p>

        </div>
       ))} */}
    </div >
    <div className='flex justify-center flex-col text-2xl bg-red-300 border-red-50'>
      
      <button className='btn border-2' onClick={()=>ChangeData('hiii')}>Click Me</button>
      <button onClick={()=>setName([...name,"hitesh"])}>Change Name</button>
    </div>
    </div>
  )
}

export default Home

