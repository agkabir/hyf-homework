import "./App.css";

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import todos from "./todos.json";
import Counter from "./Counter";

function App() {
  const [todosState, setTodosState] = useState(todos);

  const addTodo = () => {
    let newTodo = null;
    todosState.length > 0
      ? (newTodo = {
          id: todosState.at(-1).id + 1,
          description: "random text",
        })
      : (newTodo = {
          id: 1,
          description: "random text",
        });
    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodo = (id) => {
    setTodosState((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const todoItems =
    todosState.length > 0 ? 
        todosState.map((todo) => (
        <TodoItem
          todo={todo}
          onDelete={() => deleteTodo(todo.id)}
          key={todo.id}
        />
        ))
     : 
      "No items"
    ;

  return (
    <div>
      <h1>Todolist</h1>
      <p>You have used { <Counter></Counter>} seconds on this website</p>
      <button onClick={addTodo}>Add todo</button>
      <ul>{todoItems}</ul>
    </div>
  );
}

export default App;
