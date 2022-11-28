import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" exact activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/todo" activeClassName="active">
                Todo
            </NavLink>
            <NavLink to="/covid" activeClassName="active">
                Covid
            </NavLink>
            <NavLink to="/blog" activeClassName="active">
                Blogs
            </NavLink>
        </div>
    );
};
export default Nav;
