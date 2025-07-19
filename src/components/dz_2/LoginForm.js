import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ initialLogin = "", initialPassword = "" }) {
    const [login, setLogin] = useState(initialLogin);
    const [password, setPassword] = useState(initialPassword);
    const [edit, setEdit] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    };

    const handleEdit = () => {
        setEdit(true);
    };
    return (
        <section className="login-section">
            <h2>Логін і пароль</h2>
            {edit ? (
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Логін" value={login}
                            onChange={e => setLogin(e.target.value)} required />
                    </div>
                    <div>
                        <input type="password" placeholder="Пароль" value={password}
                            onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Зберегти</button>
                </form>
            ) : (
                <div className="login-data">
                    <p><b>Логін:</b> {login}</p>
                    <p><b>Пароль:</b> {password}</p>
                    <button onClick={handleEdit}>Змінити</button>
                </div>
            )}
        </section>
    );
}

export default LoginForm;