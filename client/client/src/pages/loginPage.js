export default function LoginPage(){
    return(
        <div>
            <form className="login">
                <h1>Login</h1>
                <input type="text" placeholder="user name"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}