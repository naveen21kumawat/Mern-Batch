import { useContext } from "react";
import { BioContext } from "../Context/ContextProvider";

function Home() {

  const { bioData, setBioData } = useContext(BioContext);
  console.log("hii",bioData);
  return (
    <>
      <div className="m-20 border-1 border-black p-10 text-center shadow-2xl">
        Explore New Technologies
      </div>
    </>
  );
}

export default Home;
