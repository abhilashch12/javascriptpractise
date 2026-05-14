import { useRef, useState, useEffect } from "react";

function Counteruseref() {

  // Current counter state
  const [count, setCount] = useState(0);

  // Ref to store previous value
  const previousCount = useRef();

  // Runs after render
  useEffect(() => {

    previousCount.current = count;

  }, [count]);

  // Increase count
  function increment() {

    setCount(count + 1);

  }

  return (
    <div>

      <h2>Current: {count}</h2>

      <h2>
        Previous: {previousCount.current}
      </h2>

      <button onClick={increment}>
        Increase
      </button>

    </div>
  );
}

export default Counteruseref;