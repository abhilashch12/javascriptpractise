import {useRef , useEffect} from "react";
function Focus(){
   const inputRef = useRef();
   useEffect(()=>{
    inputRef.current.focus();
   },[])
   function handleFocus(){
    inputRef.current.focus();
   }

    return(
        <div>
         <input ref={inputRef} type="text" placeholder="type"/>
         <button onClick={handleFocus}>focus</button>
        </div>
    );
}
export default Focus;