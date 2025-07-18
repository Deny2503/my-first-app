import { useState } from "react";


const USERNAME = "admin";
const PASSWORD = "123456";

function Fastlogin() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const style = {
        color: isLoggedIn ? "green" : "red"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (login === USERNAME && password === PASSWORD) {
            setIsLoggedIn(true);
            setError("");
        } else {
            setIsLoggedIn(false);
            setError("Неверный логин или пароль.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onClick={handleSubmit}>
                <input type="text" placeholder="login" value={login} onChange={e => setLogin(e.target.value)} required></input>
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6}></input>
                <button type="submit">login</button>
            </form>
            {isLoggedIn
                ? <h1 style={style}>Welcome! {login}</h1>
                : <h1 style={style}>{error}</h1>
            }
            
        </div>
    )

}

export default Fastlogin;