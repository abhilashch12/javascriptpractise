import { useTodos } from "../hooks/useTodos";

function TodoInput() {

  const {
    text,
    setText,
    addTodo,
    setFilter
  } = useTodos();

  return (

    <div>

      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button onClick={addTodo}>
        Add Todo
      </button>

      <select
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >

        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>

      </select>

    </div>

  );

}

export default TodoInput;