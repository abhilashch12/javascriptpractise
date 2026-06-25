import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import UserDetail from "./Pages/UserDetail";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";
import UserList from "./Pages/UserList";
import Team from "./Pages/Team";
import Mission from "./Pages/Mission";
function App(){


  return(
    <div>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/users/:id" element={<UserDetail/>}/>
           <Route path= "/Contact" element= {<Contact/>} />
           <Route path= "/About" element= {<About/>} >
               <Route path= "Team" element= {<Team/>}/>
               <Route path= "Mission" element= {<Mission/>}/>
           </Route>
           <Route path = "/UserList" element = {<UserList/>}/>
           <Route path="*" element=  {<Notfound/>}/>
       </Routes>
    </div>
  )
}
export default App;