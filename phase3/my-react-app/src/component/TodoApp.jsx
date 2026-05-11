import {useState} from "react";
function TodoApp(){
    const[text,setText]=useState("");
    const[todos,setTodos]=useState([]);

  function todo(){
    if(text.trim()===""){
      return;
    }
    const newtodo = {
      text: text,
      completed: false
    };
    setTodos([...todos,newtodo]);
    setText("");
  }
 function deletetodos(deleteindex){
       const updatedtodos = todos.filter((todo,index)=>{
        return index !== deleteindex;
       });
       setTodos(updatedtodos);
 }
 function strike(strikeindex){
     const updatedtodos = todos.map((todo,index)=>{
      if(index==strikeindex){
      return{
         ...todo,
         completed:!todo.completed
      };
    }
    return todo;
     })
     setTodos(updatedtodos);
 }
  const remainingTasks = todos.filter((todo) => {
  return todo.completed === false;
}).length;
  return(
      <div>
      <input placeholder="type todo" type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
      <button onClick={todo}>Add</button>
      {todos.map((todo,index) => {
        return(
        <div>
        <p onClick ={()=>{strike(index)}} key={index} style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</p>
        <button onClick={()=>{deletetodos(index)}}>delete</button>
        </div>
        );
      })}
       <h3>{remainingTasks} tasks remaining</h3>
      </div>
  );
}
export default TodoApp;