import { useState } from "react";

function TodoForm({ addTodo }) {
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");
  const changeOnTodoDescription = (e) => {
    setTodoDescription(e.target.value);
  };
  const changeOnTodoDeadline = (e) => {
    setTodoDeadline(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      description: todoDescription,
      deadline: todoDeadline,
    };
    addTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo description :
        <input
          type="text"
          value={todoDescription}
          onChange={changeOnTodoDescription}
          minLength="4"
          maxLength="100"
          placeholder="Description"
          required
        />
        <br></br>
      </label>
      <label>
        Deadline :
        <input
          type={"date"}
          value={todoDeadline}
          onChange={changeOnTodoDeadline}
          required
        />
      </label>
      <br></br>
      <input type="submit" value="Add Todo" />
    </form>
  );
}

export default TodoForm;
