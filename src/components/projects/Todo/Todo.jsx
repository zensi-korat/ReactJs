import { useState } from "react";
import "./Todo.css";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";

function Todo() {
  const [task, setTask] = useState(() => getLocalStorageData());

  const [editTaskId, setEditTaskId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // Check if the input value is empty
    if (!content) return;

    // Check if the task already exists
    const taskExists = task.find((currTask) => currTask.content === content);
    if (taskExists) {
      alert("Task already exists");
      return;
    }
    // In ES6, if the key and value are the same, you can use shorthand property names
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  const handleDeleteTask = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    console.log(updatedTask);
    setTask(updatedTask);
  };

  const handleClearAll = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (confirmClear) {
      setTask([]);
    }
  };

  const handleCheckedTask = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  const handleSaveEditTask = () => {
    const updatedTasks = task.map((t) =>
      t.id === editTaskId ? { ...t, content: editValue } : t
    );
    setTask(updatedTasks);
    setEditTaskId(null);
    setEditValue("");
  };

  const handleEditTask = (task) => {
    setEditTaskId(task.id);
    setEditValue(task.content);
  };

  setLocalStorageData(task);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />
      <section>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear all
        </button>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                onHandleDeleteTodo={() => handleDeleteTask(curTask.content)}
                checked={curTask.checked}
                onHandleCheckedTodo={() => handleCheckedTask(curTask.content)}
                onEditTask={() => handleEditTask(curTask)}
                isEditing={editTaskId === curTask.id}
                editValue={editValue}
                setEditValue={setEditValue}
                onSaveEditTask={handleSaveEditTask}
              />
            );
          })}
        </ul>
      </section>
    </section>
  );
}

export default Todo;
