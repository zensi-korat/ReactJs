import { useState } from "react";
import PropTypes from "prop-types";

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({});

  const handleInputValue = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(e) => handleInputValue(e.target.value)}
          />
        </div>
        <div>
          <button className="todo-button" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}
TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
