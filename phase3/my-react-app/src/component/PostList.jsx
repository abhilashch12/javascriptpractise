import {useState, useEffect, useMemo} from "react";
import EmptyState from "./EmptyState";
import SkeletonCard from "./SkeletonCard";
function PostList(){
   const [user,setUser]=useState([]);
   const [err,setErr]=useState("");
   const [loading,setLoading]=useState(true);
   const [search,setSearch]=useState("");
   const [page,setPage]=useState(1);
   const itemsperpage=10;
   const filteredsearch= useMemo(()=>{
return user.filter((person)=>
     person.body.toLowerCase().includes(search.toLowerCase())
)},[user,search]);
   useEffect( ()=>{
   async function fetching(){
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok){
        throw new Error("failed to load");
    }
    const data = await res.json();
    setUser(data);
}
catch(err){
    setErr(err.message);
}
finally{
setLoading(false);
}
   }

fetching();
   },[]);

if(loading){
    return (
        <div>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}
    const totalPages=Math.ceil(filteredsearch.length/itemsperpage);
    const start=(page-1)*itemsperpage;
    const currentpost = filteredsearch.slice(start, start+itemsperpage);
if(err){
    return <h2 style={{color:"red"}}>{err}</h2>
}

     if (user.length === 0) {
    return (
      <EmptyState
        icon="📭"
        message="the list is empty"
      />
    );
  }


    return(
      <div>
        <h2>userlist</h2>
        <input type="text" placeholder="search..." value={search} onChange={(e)=>
            setSearch(e.target.value)
        }></input>
        <ul>
            {currentpost.map((person)=>
            (
                <li key={person.id}>{person.title}</li>
            ))}
        </ul>
        {filteredsearch.length===0&&(<EmptyState 
        icon="@@#"
        message="no results" 
        actionText="try again"
        onAction={()=>setSearch("")}/>
        )}

        {filteredsearch.length > 0 && (
        <div>

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <span>
            {" "}
            Page {page} of {totalPages}{" "}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>

        </div>
      )}
      </div>
    );
}
export  default PostList;