import {useState , useRef} from "react";
function Stopwatch(){
    const[count,setCount]=useState(0);
    const intervalRef=useRef();
    function increment(){
       intervalRef.current= setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000)
    }
    function stop(){
        clearInterval(intervalRef.current);
    }
    function reset(){
        clearInterval(intervalRef.current);
        setCount(0);
    }

    return(
        <div>
         <h2>{count}</h2>
         <button onClick={increment}>start</button>
         <button onClick={stop}>stop</button>
         <button onClick={reset}>reset</button>
        </div>
    );
}
export default Stopwatch;