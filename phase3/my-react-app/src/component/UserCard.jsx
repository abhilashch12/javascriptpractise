import {useState,useEffect} from "react";
import useFetch from "../hooks/useFetch";
function UserCard(){
        const [userid, setUserid] = useState(1);

  const { data: user, loading, error } =
    useFetch(`https://jsonplaceholder.typicode.com/users/${userid}`);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }


 
    return(
 <div>
      <button onClick={()=>setUserid(1)}>1</button>
      <button onClick={()=>setUserid(2)}>2</button>
      <button onClick={()=>setUserid(3)}>3</button>
      <button onClick={()=>setUserid(4)}>4</button>
      <button onClick={()=>setUserid(5)}>5</button>

      <h1>{user.name}</h1>

      <h2>{user.email}</h2>

      <h3>{user.address.city}</h3>
    </div>
    );
}
export default UserCard;