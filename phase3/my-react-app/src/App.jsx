import Greeting from "./component/Greeting";
import StudentCard from "./component/StudentCard";
import Counter from "./component/Counter";
import LivePreview from "./component/LivePreview";
import ToggleCard from "./component/ToggleCard";
import TodoApp from "./component/TodoApp";
import Practise from "./component/Practise";
import UserCard from "./component/UserCard";
import Timer from "./component/Timer";
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
  <Counter />
  <LivePreview />
  <ToggleCard />
  <TodoApp/>
  <Practise />
  <UserCard />
  <Timer />
  </div>
  );
}

export default App;