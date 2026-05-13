import { useTodos } from "../hooks/useTodos";
function TodoList() {
const {
    filteredTodos,
    strike,
    deleteTodo
  } = useTodos();


  function TodoItem(itemProps) {

    return (
      <div>

        <p
          onClick={itemProps.onToggle}
          style={{
            textDecoration:
              itemProps.todo.completed
                ? "line-through"
                : "none"
          }}
        >
          {itemProps.todo.text}
        </p>

        <button onClick={itemProps.onDelete}>
          delete
        </button>

      </div>
    );
  }

  return (
    <div>

      {filteredTodos.map((todo, index) => {

        return (
          <div key={index}>

            <TodoItem
              todo={todo}
              onToggle={() => {
                strike(index);
              }}
              onDelete={() => {
              deleteTodo(index);
              }}
            />

          </div>
        );
      })}

    </div>
  );
}

export default TodoList;