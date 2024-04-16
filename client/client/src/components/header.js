import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
           <Link className="logo" to="/">MyBlog</Link>
           <div className="nav-bar">
             <Link to="/login">Login</Link>
             <Link to="/register">Register</Link>
           </div>
        </div>
    )
}