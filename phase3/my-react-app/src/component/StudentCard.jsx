function StudentCard({name, marks, passing}){
  return (
    <div>
    <h3>{name}</h3>
    <h3>{marks}</h3>
    <p
      style={{
        color:passing?"green":"red",
      }}>
     { passing?"pass":"fail"}
    </p>
    </div>
  );
}
export default StudentCard;