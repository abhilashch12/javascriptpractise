import {Link} from "react-router-dom";
function Home(){


    return(
        <div>
         <Link to= "/">Home</Link>
         <Link to= "/UserList">UserList</Link>
         <Link to= "/Contact">Contact</Link>
         <Link to= "/About">About</Link>
         
        </div>
    )
}
export default Home;