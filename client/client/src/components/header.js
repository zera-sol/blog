export default function Header(){
    return(
        <div className="header">
           <a className="logo" href="/">MyBlog</a>
           <div className="nav-bar">
             <a href="/login">Login</a>
             <a href="/register">Register</a>
           </div>
        </div>
    )
}