import useDebounce from "./useDebounce";
import {useState,useEffect} from "react";
function useDebouncedsearch(query,delay=500){
const [results,setResults]=useState([]);
const[loading,setLoading]=useState(false);
const[error,setError]=useState("");
const debouncedQuery = useDebounce(query,delay);
const isDebouncing = query !== debouncedQuery;
useEffect(()=>{
    if(!debouncedQuery.trim()){
        setResults([]);
        setLoading(false);
        setError("");
        return;
    }
    async function userFetch(){
        try{
        setLoading(true);
        setError("");
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${debouncedQuery}`);
        if(!response.ok){
            throw new Error ("something went wrong")
        }
         const data = await response.json();
        

           setResults(data);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    userFetch();
    
},[debouncedQuery])
return{results,loading,error,isDebouncing}

}
export default useDebouncedsearch;