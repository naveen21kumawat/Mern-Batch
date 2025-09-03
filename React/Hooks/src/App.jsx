import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    alert(" Run only on first render");
  }, []);

  useEffect(() => {
    alert("Always Run");
  });

  function Check() {
    alert("I am A Function");
  }

  useEffect;

  useEffect(() => {
    alert("Color");
  }, [color]);

  useEffect(() => {
    alert("Count Change");
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <button onClick={() => setColor((a) => color + 1)}>
        Color is {color}
      </button>
      <button onClick={() => Check()}>Check</button>
    </>
  );
}

export default App;
