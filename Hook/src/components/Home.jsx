import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  //   const [count, setCount] = useState(0);
  // const [color, setColor] = useState(0);

  // function Count() {
  //   if (count < 15) {
  //     setCount(count + 1);
  //   } else {
  //     return count;
  //   }
  // }

  const [data, setData] = useState(0);
  const [apidata, setapiData] = useState([]);
  console.log(apidata);

  //  fetch("https://jsonplaceholder.typicode.com/photos")

  useEffect(() => {
    axios.post("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res.data);
      //  .then((data) => {
      //    console.log('Api call Done')
      //   setapiData(data)
    });
  }, []);

  return (
    <>
      <div>Home</div>
      <button onClick={() => setData(data + 1)}>Click Me {data}</button>
    </>
  );
}

export default Home;
