export default function RegisterPage(){
    return(
        <div>
            <form className="register">
                <h1>Register</h1>
                <input type="text" placeholder="user name"/>
                <input type="password" placeholder="password"/>
                <button>Register</button>
            </form>
        </div>
    )
}