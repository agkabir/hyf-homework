import "./App.css";
import todos from "./todolist.json";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
