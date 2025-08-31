import React, { useEffect, useState } from 'react'

function Home() {
  const [count, setCount] = useState(0);
const [name, setName] = useState("Naveen");
 
useEffect(() => {
  console.log("Effect runs when count OR name changes");
}, [count, name]);
  return (
    <div onClick={() => setCount(count + 1)}>{count} Home</div>
          
  )
}

export default Home