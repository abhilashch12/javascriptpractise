import React from "react";

const TodoItem = React.memo(function TodoItem(props) {

  console.log("TodoItem rendered");

  return (
    <div>

      <p
        onClick={props.onToggle}
        style={{
          textDecoration:
            props.todo.completed
              ? "line-through"
              : "none"
        }}
      >
        {props.todo.text}
      </p>

      <button onClick={props.onDelete}>
        delete
      </button>

    </div>
  );
});

export default TodoItem;