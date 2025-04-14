//! React Hook Challenge: Dynamic State Management and Document Title Update with useEffect

//? 1. A counter that increments when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.

import { useEffect, useState } from "react";
import "./index.css";

export const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("zen!");

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span> {count} </span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span> {name} </span>
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
