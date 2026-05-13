import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";
import useLocalStorage from "../hooks/useLocalStorage";
import { TodoProvider } from "../context/TodoContext";
function TodoApp() {




  return (

    <div>
      <TodoInput />
      <TodoList  />
      <TodoStats />
    </div>
    
  );
}

export default TodoApp;