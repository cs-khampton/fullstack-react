import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to={'/'} className="nav-button">Home</Link>
            <Link to={'/skills'} className="nav-button">Skills</Link>
            <Link to={'/projects'} className="nav-button">Projects</Link >
            <Link to={'/resume'} className="nav-button">Resume</Link >
        </nav >
    )
}
export default Navbar;