import "./App.css";

import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import Counter from "./Counter";
import ChildBorder from "./ChildBorder";

const fetch_url =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [todosState, setTodosState] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      const res = await fetch(fetch_url, { signal });
      const data = await res.json();
      setTodosState(data);
    })();
    return () => {
      // cancel the previous fetch
      controller.abort();
    };
  }, []);

  const addTodo = (newTodo) => {
    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodo = (id) => {
    setTodosState((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const updateTodo = (id, updatedDescription) => {
    setTodosState(
      todosState.map((todo) =>
        todo.id === id ? { ...todo, description: updatedDescription } : todo
      )
    );
  };

  const todoItems =
    todosState.length > 0
      ? todosState.map((todo) => (
          <li key={todo.id}>
            <ChildBorder>
              <TodoItem
                todo={todo}
                onDelete={() => deleteTodo(todo.id)}
                onUpdate={updateTodo}
              />
            </ChildBorder>
          </li>
        ))
      : "No items";
  return (
    <div>
      <h1>Todolist</h1>
      <p>You have used {<Counter></Counter>} seconds on this website</p>
      <TodoForm addTodo={addTodo} />
      <ul>{todoItems}</ul>
    </div>
  );
}

export default App;
