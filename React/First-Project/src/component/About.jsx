import React, { useEffect, useState } from 'react'

function About() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

    useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

//  setInterval(() => {
//      setCount(count + 1);

//    }, 2000);
   setTimeout(()=>{
    setCount(count+1)
   },5000)
  //))
  return (
    <>
    {/* <div>About</div> */}
     <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>Ince</button>
      <button onClick={() => setCount(c => c - 1)}>Dec</button></>
  )
}

export default About