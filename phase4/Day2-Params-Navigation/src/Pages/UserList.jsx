import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
function UserList(){
    const[data,setData]=useState([]);
    const[err,setErr]=useState("");
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        async function fetchdata(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("something went wrong");
                }
                const result = await response.json();
                setData(result);
            }
            catch(error){
                setErr(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        fetchdata();
    },[])
    if(loading)return<h2>loading...</h2>
    if(err)return<h2>{err}</h2>
    return(
        <div>
          <ul>
            {data.map((user)=>(<li key={user.id}><Link to={`/users/${user.id}`}>user{user.id}</Link></li>))}
          </ul>
        </div>
    )
}
export default UserList;