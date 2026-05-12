import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";
function TodoApp() {

  const [text, setText] = useState("");
  const [filter,setFilter]=useState("all");
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

   let filteredTodos = todos;

  if (filter === "active") {

    filteredTodos = todos.filter((todo) => {

      return todo.completed === false;

    });

  }

  if (filter === "completed") {

    filteredTodos = todos.filter((todo) => {

      return todo.completed === true;

    });

  }


  return (
    <div>
      <TodoInput  text={text} setText={setText} addTodo={addTodo} setFilter={setFilter}/>
      <TodoList   todos={filteredTodos} strike={strike} deleteTodo={deleteTodo} />
      <TodoStats  remainingTasks ={remainingTasks}/>
    </div>
  );
}

export default TodoApp;