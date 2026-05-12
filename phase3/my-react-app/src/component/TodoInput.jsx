function TodoInput(props){

    return(
        <div>
         <input
        placeholder="type todo"
        type="text"
        value={props.text}
        onChange={(e) => {
          props.setText(e.target.value);
        }}
      />

      <button onClick={props.addTodo}>
        Add
      </button>
      <button onClick={()=>{
         props.setFilter("all");
      }}>show all</button>
      <button onClick={()=>{
         props.setFilter("active");
      }}>show active</button>
      <button onClick={()=>{
         props.setFilter("completed");
      }}>show completed</button>
      </div>
    );
}
export default TodoInput;