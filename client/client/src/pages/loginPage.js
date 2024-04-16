import { useState } from "react"

export default function LoginPage(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
     
    const login = async (e) => {
        e.preventDefault();
    await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {"Content-Type": "application/json"}
    })
    }
    return(
        <div>
            <form className="login" onSubmit={login}>
                <h1>Login</h1>
                <input type="text"
                       placeholder="user name"
                       value={username}
                       onChange={e => setUsername(e.target.value)}/>
                <input type="password" 
                       placeholder="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </div>
    )
}