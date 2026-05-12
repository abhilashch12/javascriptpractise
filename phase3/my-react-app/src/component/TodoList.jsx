function TodoList(props) {

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

      {props.todos.map((todo, index) => {

        return (
          <div key={index}>

            <TodoItem
              todo={todo}
              onToggle={() => {
                props.strike(index);
              }}
              onDelete={() => {
                props.deleteTodo(index);
              }}
            />

          </div>
        );
      })}

    </div>
  );
}

export default TodoList;