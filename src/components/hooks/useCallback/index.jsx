import { useCallback, useMemo, useState } from "react";

function CallbackDemo() {
  const [count, setCount] = useState(0);

  const Child = useMemo(() => {
    return ({ onClick }) => {
      console.log("%cChild rendered ", "color: green");
      return <button onClick={onClick}>Click Me</button>;
    };
  }, []);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);
  return (
    <div>
      <h1>useCallback</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>
        useCallback is used to memoize a function so that it doesn&apos;t get
        recreated on every render.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>Re-render Parent</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default CallbackDemo;
