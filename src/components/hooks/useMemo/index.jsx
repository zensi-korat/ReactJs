import { useMemo, useState } from "react";

const names = Array.from({ length: 10000 }, (_, i) => `User ${i + 1}`);
function MemoDemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function expensiveTask(num) {
    console.log("Performing expensive task...");
    // Simulate an expensive task
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  //   let doubleCount = expensiveTask(inputValue);
  // Using useMemo to memoize the result of the expensive task

  //DEFINE
  // useMemo memoizes the value or result of a function
  // It only re-evaluates the function when the dependencies change

  let doubleCount = useMemo(() => expensiveTask(inputValue), [inputValue]);
  // If inputValue changes, the expensive task will be re-evaluated
  // If count changes, the expensive task will not be re-evaluated

  // filter list

  const [query, setQuery] = useState("");
  // const [count, setCount] = useState(0);

  const filteredNames = useMemo(() => {
    console.log("Filtering names...");
    return names.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

// sort data
const [sortBy, setSortBy] = useState('name');

const data = [
  { name: 'Alice', age: 32 },
  { name: 'Bob', age: 24 },
  { name: 'Charlie', age: 29 },
];
const sortedData = useMemo(() => {
  console.log('Sorting...');
  return [...data].sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );
}, [sortBy]);

  return (
    <div>
      <h1>useMemo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      double : {doubleCount}
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Enter number"
      />
      <div className="p-4">
        <input
          className="p-2 border rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search names..."
        />
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => setCount((c) => c + 1)}
        >
          Re-render ({count})
        </button>

        <ul className="mt-4 h-40 overflow-auto border p-2">
          {filteredNames.slice(0, 20).map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <h2>Sort data in table</h2>
      <div className="p-4">
      <select
        className="p-2 border rounded"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
      >
        <option value="name">Sort by Name</option>
        <option value="age">Sort by Age</option>
      </select>

      <ul className="mt-4">
        {sortedData.map((item, i) => (
          <li key={i}>{item.name} — {item.age} years old</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default MemoDemo;
