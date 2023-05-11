import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./componentes/TodoList";
import TodoAdd from "./componentes/TodoAdd";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    //crear la accion
    const action = {
      type: "delete",
      payload: todoId
    };
    //dispatch
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo
    });
  };

  return (
    <>
      <h2> toDo ({todos.length})</h2>
      <hr />
      <div className="columns3">
        <div>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      </div>
    </>
  );
}
