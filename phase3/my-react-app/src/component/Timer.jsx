import {useState,useEffect} from "react";
function Timer(){
      const [seconds,setSeconds] = useState(0);

      useEffect(()=>{
        
       const timer= setInterval(()=>{
             setSeconds((prev)=>{
                return prev+1;
             })
        },1000)

        return ()=>{
            clearInterval(timer);
        }
      },[]);

    return(
        <div>
            <h2>Hello{seconds}</h2>
        </div>
    );
}
export default Timer;