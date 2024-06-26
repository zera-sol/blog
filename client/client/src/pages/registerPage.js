import { useState } from "react"

export default function RegisterPage(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const register = async (e)=> {
        e.preventDefault();
       const Response =  await fetch("http://localhost:4000/register", {
            method: "POST", 
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        })
       if(Response.status ===  200){
         alert("Registeration id done successfully")
       }
       else{
        alert("Registration faild!")
       }
    }
    return(
        <div>
            <form className="register" onSubmit={register}>
                <h1>Register</h1>
                <input 
                    type="text" 
                    placeholder="user name"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}/>
                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button>Register</button>
            </form>
        </div>
    )
}