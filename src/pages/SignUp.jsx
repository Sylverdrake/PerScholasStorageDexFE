import { useState } from "react";

const SignUp = () =>
{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>
    {
        e.preventDefault()
        console.log(username, email, password)
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up!</h3>
            <label>Username:</label>
            <input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

        <button>Sign Up!</button>
        </form>
    )
}

export default SignUp