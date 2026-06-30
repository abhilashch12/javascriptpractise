import {useState} from "react";
import useDebouncedSearch from "../Hooks/useDebouncedSearch";
function SearchUser(){
   const[query,setQuery]=useState("");
   const {results,loading,error,isDebouncing}=useDebouncedSearch(query);

    return(
        <div>
            <input name="input" value={query} type="text" placeholder="search something" onChange={(e)=>(setQuery(e.target.value))} />
            <h2>{query}</h2>
            {isDebouncing&&(<p>waiting for u to stop typing</p>)}
             {loading && (
        <p>🔍 Searching...</p>
      )}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!loading &&
        !isDebouncing &&
        query.trim() !== "" &&
        results.length === 0 && (
          <p>No users found.</p>
        )}

      {results.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{user.name}</h3>

          <p>
            <strong>Username:</strong> {user.username}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      ))}

        </div>
    )
}
export default SearchUser;