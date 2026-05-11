import {useState} from "react";
function Practise(){
const[text,setText]=useState("");



    return(
    <div>
    <input placeholder="type something" type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
    <h1>{text}</h1>
    </div>
    );
}
export default Practise;