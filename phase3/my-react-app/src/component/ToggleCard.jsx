import {useState} from "react";
function ToggleCard(){
   const [show,setShow]=useState(false);
   return(
     <div>
        <button onClick={()=>{setShow(!show)}}>
            {show? "Hide":"Show"}
        </button>
        {show && <h3>the para is visible</h3>}
     </div>
   );
}
export default ToggleCard;