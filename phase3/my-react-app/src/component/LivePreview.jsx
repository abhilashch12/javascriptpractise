import {useState} from "react";
function LivePreview(){
    const[text,setText]=useState("");
  return(
  <div>
 <input type="text" vlaue={text} placeholder="type something"
 onChange={(e)=>{
    setText(e.target.value)
 }}/>
 <h2>preview:{text}</h2>
 <h2>length:{text.length}</h2>
  </div>

  );

}
export default LivePreview;