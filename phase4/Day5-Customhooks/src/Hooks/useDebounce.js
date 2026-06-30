import {useState,useEffect} from "react";
function useDebounce(value,delay){
const[debouncedvalue,setDebouncedvalue]=useState(value);
useEffect(()=>{
    const timer = setTimeout(()=>{setDebouncedvalue(value)},delay);
    return ()=> {clearTimeout(timer)};
},[value,delay])
 return debouncedvalue;
    
}
export default useDebounce;