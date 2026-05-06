function StudentCard(props){
  return (
    <div>
    <h3>{props.name}</h3>
    <h3>{props.marks}</h3>
    <p
      style={{
        color:props.passing?"green":"red",
      }}>
     { props.passing?"pass":"fail"}
    </p>
    </div>
  );
}
export default StudentCard;