import TodoTitle from "./TodoTitle";
import TodoDetails from "./TodoDetails";

export default function Todo({ todos }) {
  const items = [];
  todos.forEach((todo) => {
    items.push(<TodoTitle title={todo.title} key={todo.title} />);
    items.push(
      <TodoDetails
        todo={todo}
        key={todo.deadline}
      />
    );
  });
  return <div>{items}</div>;
}
