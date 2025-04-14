import React, { useState } from "react";

function GettingStarted() {
  const [count, getCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  const userCount = users.length;

  const averageAge = users.reduce((acc, user) => acc + user.age, 0) / userCount;
  return (
    <>
      <div className="card">
        <h3>Users List</h3>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.name}>
                <span>{user.name} - </span>
                <span>{user.age} years old</span>
              </li>
            );
          })}
          Total Users = {userCount}
          Average Age = {averageAge}
        </ul>
        <button onClick={() => getCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            placeholder="Enter text here"
            size="large"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={() => setDisplayedText(inputText)}>
            Click here
          </button>
        </div>
        <h3>Current text is: {displayedText}</h3>
      </div>
    </>
  );
}

export default GettingStarted;
