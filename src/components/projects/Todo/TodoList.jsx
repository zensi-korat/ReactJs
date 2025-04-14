import { MdCheck, MdDeleteForever, MdEdit, MdSave } from "react-icons/md";
import PropTypes from "prop-types";

function TodoList({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
  onEditTask,
  isEditing,
  editValue,
  setEditValue,
  onSaveEditTask,
}) {
  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="todo-edit-input"
        />
      ) : (
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      )}

      {isEditing ? (
        <button className="save-btn" onClick={onSaveEditTask}>
          <MdSave />
        </button>
      ) : (
        <button className="edit-btn" onClick={onEditTask}>
          <MdEdit />
        </button>
      )}
      <button className="check-btn" onClick={onHandleCheckedTodo}>
        <MdCheck />
      </button>

      <button className="delete-btn" onClick={onHandleDeleteTodo}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

TodoList.propTypes = {
  data: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onHandleDeleteTodo: PropTypes.func.isRequired,
  onHandleCheckedTodo: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  editValue: PropTypes.string,
  setEditValue: PropTypes.func,
  onSaveEditTask: PropTypes.func,
};

export default TodoList;
