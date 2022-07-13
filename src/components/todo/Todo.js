import "./Todo.css";
import TodoList from "../todo-list/TodoList";

const Todo = () => {
  const todos = [
    { id: 1, title: "Web Developer" },
    { id: 2, title: "UI UX Designer" },
    { id: 3, title: "Data Analyst" },
    { id: 4, title: "Cyber Security" },
  ];

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
