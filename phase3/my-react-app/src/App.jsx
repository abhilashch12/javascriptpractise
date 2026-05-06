import Greeting from "./component/Greeting";
import StudentCard from "./component/StudentCard";

let studentDetails = [{name:"Abhi",marks:35},
                      {name:"ravi",marks:50},
                      {name:"raju",marks:90},
                      {name:"karthik",marks:85},
                      {name:"ramesh",marks:75},
                      {name:"raja",marks:83}];
function App(){
  return(
  <div>
  <h1>hello react</h1>
  <Greeting name="Abhilash" />
  <Greeting name="Ramesh" />
  <Greeting name="Rajesh" />
  {studentDetails.map((students) => {
    return (
      <div key={students.name}>
        <StudentCard name={students.name} marks={students.marks} passing={students.marks >= 60 }/>
      </div>
    );
  })}
  </div>
  );
}

export default App;