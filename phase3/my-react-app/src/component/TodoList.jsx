import { useCallback } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {

  const {
    filteredTodos,
    strike,
    deleteTodo
  } = useTodos();

  const handleToggle = useCallback((index) => {
    strike(index);
  }, [strike]);

  const handleDelete = useCallback((index) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <div>

      {filteredTodos.map((todo, index) => {

        return (
          <div key={index}>

            <TodoItem
              todo={todo}
              onToggle={() => handleToggle(index)}
              onDelete={() => handleDelete(index)}
            />

          </div>
        );
      })}

    </div>
  );
}

export default TodoList;