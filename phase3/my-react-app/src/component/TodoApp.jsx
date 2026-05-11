import { useState, useEffect } from "react";

function TodoApp() {

  const [text, setText] = useState("");

  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem("todos");

    return savedTodos
      ? JSON.parse(savedTodos)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);

  function addTodo() {

    if (text.trim() === "") {
      return;
    }

    const newtodo = {
      text: text,
      completed: false
    };

    setTodos([...todos, newtodo]);

    setText("");
  }

  function deleteTodo(deleteindex) {

    const updatedtodos = todos.filter((todo, index) => {

      return index !== deleteindex;

    });

    setTodos(updatedtodos);
  }

  function strike(strikeindex) {

    const updatedtodos = todos.map((todo, index) => {

      if (index === strikeindex) {

        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;

    });

    setTodos(updatedtodos);
  }

  const remainingTasks = todos.filter((todo) => {

    return todo.completed === false;

  }).length;

  return (
    <div>

      <input
        placeholder="type todo"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <h3>{remainingTasks} tasks remaining</h3>

      {todos.map((todo, index) => {

        return (
          <div key={index}>

            <p
              onClick={() => {
                strike(index);
              }}
              style={{
                textDecoration:
                  todo.completed
                    ? "line-through"
                    : "none"
              }}
            >
              {todo.text}
            </p>

            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              delete
            </button>

          </div>
        );
      })}

    </div>
  );
}

export default TodoApp;