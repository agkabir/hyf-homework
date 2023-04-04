import React, { useState } from "react";
function TodoItem({ todo, onDelete, onUpdate }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [updateData, setUpdateData] = useState(todo.description);

  const changeOnChecked = () => {
    setIsChecked(!isChecked);
  };
  const handleEdit = () => {
    setIsEditTodo(!isEditTodo);
  };
  const changeOnUpdate = (e) => {
    setUpdateData(e.target.value);
  };

  let viewStyle = {};
  let editStyle = {};
  if (isEditTodo) {
    viewStyle.display = "none";
  } else {
    editStyle.display = "none";
  }

  return (
    <div>
      <label style={viewStyle}>
        <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {todo.deadline
            ? `${todo.description} | ${todo.deadline}`
            : todo.description}
        </span>
      </label>
      <input
        type="text"
        value={updateData}
        style={editStyle}
        onChange={(e) => changeOnUpdate(e)}
      />
      <input type="checkbox" checked={isChecked} onChange={changeOnChecked} />

      <button onClick={onDelete}>Delete</button>
      <button onClick={handleEdit} style={viewStyle}>
        Edit
      </button>
      <button
        onClick={() => {
          onUpdate(todo.id, updateData);
          setIsEditTodo(!isEditTodo);
        }}
        style={editStyle}
      >
        Update
      </button>
    </div>
  );
}

export default TodoItem;
