import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
function UserDetail(){
   const {id}= useParams();
   const [data,setData]=useState({});
   const [loading,setLoading]=useState(true);
   const [err,setErr]=useState("");
   const Navigate = useNavigate();
   useEffect(()=>{
    async function fetchdata(){
        try{
       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
       if(!response.ok){
        throw new Error("something went wrong");
       }
       const data = await response.json();
       setData(data);
    }
       catch(error){
        setErr(error.message);
       }  
       finally{
        setLoading(false);
       }
   }
   fetchdata();
   },[id])
   if(loading)return<h2>loading...</h2>
   if(err)return<h2>{err}</h2>

    return(
        <div>
            <h1>user name {data.name}</h1>
            <button onClick={()=>(Navigate(-1))}>prev</button>
        </div>
    )
}
export default UserDetail;