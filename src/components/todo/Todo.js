import "./Todo.css";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
  const todos = [
    { id: 1, title: "Web Developer" },
    { id: 2, title: "UI UX Designer" },
    { id: 3, title: "Data Analyst" },
    { id: 4, title: "Cyber Security" },
  ];

  const eventCreateTodo = (todo) => {
    todos.push(todo);
    console.log(todos);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
