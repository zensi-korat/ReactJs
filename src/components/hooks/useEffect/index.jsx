import { useEffect, useState } from "react";
import "./index.css";

function ReactUseEffect() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="container effect-container">
      <h1>{date}</h1>
      <h1>useEffect hook</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}

export default ReactUseEffect;
