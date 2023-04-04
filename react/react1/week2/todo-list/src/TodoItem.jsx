import React, { useState, useEffect } from "react";
function TodoItem({ todo, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const changeOnChecked = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const todoElement = document.getElementById(`span${todo.id}`);
    if (isChecked) {
      todoElement.style.textDecoration = "line-through";
    } else {
      todoElement.style.textDecoration = "none";
    }
  }, [isChecked, todo.id]);

  return (
    <li>
      <span id={`span${todo.id}`}>{todo.description}</span>
      <input type="checkbox" checked={isChecked} onChange={changeOnChecked} />

      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
