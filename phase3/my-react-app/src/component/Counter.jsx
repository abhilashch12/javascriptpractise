import {useState,useEffect} from "react";
function Counter(){
   const[count,setCount]=useState(0);
   function increment(){
    setCount(count+1);
   }
   function decrement(){
    if(count>0){
    setCount(count-1);
    }
   }
   function reset(){
    setCount(0);
   }
   useEffect(()=>{
    document.title=`${count}`;
   },[count])
   return(
  <div>
  <button onClick={increment}>
    increment
  </button>
  <button onClick={decrement}>
    decrement
  </button>
  <button onClick={reset}>
  reset
  </button>
  count:{count}
  </div>
   );
}
export default Counter;