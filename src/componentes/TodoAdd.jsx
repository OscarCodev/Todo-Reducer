import { useForm } from "../hooks/useForm";

function TodoAdd({ handleAddTodo }) {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    handleAddTodo(newTodo);

    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}

export default TodoAdd;
