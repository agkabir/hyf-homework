import React, { useState, useEffect } from "react";
function TodoItem({ todo, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const changeOnChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const spanElement = document.getElementById(`span${todo.id}`);
    if (isChecked) {
      spanElement.style.textDecoration = "line-through";
    } else {
      spanElement.style.textDecoration = "none";
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
