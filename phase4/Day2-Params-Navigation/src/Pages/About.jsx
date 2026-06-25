import {Link,Outlet} from "react-router-dom";
function About(){


    return(
        <div>
            <h2>About</h2>
            <Link  to="Team">Team</Link>
            <br/>
            <Link to="Mission">Mission</Link>
            <br/>
            <Outlet />
        </div>
    )
}
export default About;