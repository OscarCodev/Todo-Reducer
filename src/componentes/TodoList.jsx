import TodoListItem from "./TodoListItem";

function TodoList({ todos, handleDelete, handleToggle }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          i={i}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;
