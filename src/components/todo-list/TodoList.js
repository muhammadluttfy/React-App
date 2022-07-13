import "../todo-list/TodoList.css";

const TodoList = (props) => {
  console.log(props.dataTodos);
  return (
    <ul>
      {props.dataTodos.map((todo) => {
        // {id:1, title: "Web Developer"}
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
