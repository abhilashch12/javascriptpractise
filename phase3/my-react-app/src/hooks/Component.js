import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";

function SearchComponent() {

  const [text, setText] = useState("");

  // delay typing by 1 second
  const debouncedValue = useDebounce(text, 1000);

  const { data: posts, loading, error } = useFetch(
    debouncedValue
      ? "https://jsonplaceholder.typicode.com/posts?userId=1"
      : null
  );

  return (
    <div>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>Debounced Value: {debouncedValue}</h2>

      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}

    </div>
  );
}

export default SearchComponent;