import {createContext,useState,useEffect,useContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const TodoContext = createContext();
export function TodoProvider({children}){
const [text, setText] = useState("");
  const [filter,setFilter]=useState("all");
  const [todos, setTodos]   = useLocalStorage("todos", []);

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
 return(
        <TodoContext.Provider value={{text, setText,filter,setFilter,todos, setTodos,addTodo,deleteTodo
                                     ,strike, remainingTasks, filteredTodos}}
                                     >{children}</TodoContext.Provider>
    );
}