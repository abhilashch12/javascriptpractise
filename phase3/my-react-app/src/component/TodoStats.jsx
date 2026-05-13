import { useTodos } from "../hooks/useTodos";

function TodoStats() {

  const { remainingTasks } = useTodos();

  return (

    <div>

      <h3>
        {remainingTasks} tasks remaining
      </h3>

    </div>

  );

}

export default TodoStats;