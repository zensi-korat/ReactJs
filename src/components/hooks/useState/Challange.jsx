//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

import { useState } from "react";
// import "../Hooks.css";

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => {
      if (prevCount + step > 100) {
        return 100;
      }
      return prevCount + step;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount - step < 0) {
        return 0;
      }
      return prevCount - step;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    setStep(value > 0 ? value : 1); // Ensure step is at least 1
  };

  return (
    <div className="container state-container">
      <h1>useState Challenge</h1>

      <p>
        Count: <span> {count} </span>
      </p>

      <div>
        <label>
          Step:
          <input type="number" onChange={handleStepChange} />
        </label>
      </div>

      <div className="state-btns">
        <button onClick={handleIncrement} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterChallenge;
