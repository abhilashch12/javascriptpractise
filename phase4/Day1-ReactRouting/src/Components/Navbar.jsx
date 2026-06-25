import { NavLink } from "react-router-dom";

function Navbar(){

    return(
        <div>
            <NavLink to="/" end >
            Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
        </div>
    )
}
export default Navbar;