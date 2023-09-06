import { useState } from "react";

const Login = () =>
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault()
        console.log(username, password)
    }

    return(
        <form className="Login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
            <label>Username:</label>
            <input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

        <button>Log In!</button>
        </form>
    )
}

export default Login