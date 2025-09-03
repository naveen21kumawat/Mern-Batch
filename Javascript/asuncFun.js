async function fetchData() {
  console.log("Start");

  // pretend this takes time
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Data received");

  console.log("End");
}

fetchData();


// function fetchData1() {
//   console.log("Start");
//   setTimeout(() => {
//     console.log("Data received");
//   }, 2000);
//   console.log("End");
// }

// fetchData1();
