import {useState,useEffect} from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
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
  <CounterDisplay  count={count}/>
  <CounterControls   increment={increment} decrement={decrement} reset={reset}/>
  </div>
   );
}
export default Counter;