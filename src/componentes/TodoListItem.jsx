function TodoListItem({ todo, i, handleDelete, handleToggle }) {
  return (
    <li key={todo.id}>
      <p
        onClick={() => handleToggle(todo.id)}
        className={todo.done && "complete"}
      >
        {i + 1}. {todo.desc}
      </p>
      <button class="btn-delete" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoListItem;
