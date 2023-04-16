import { useState } from "react";
import { login } from "../api";

export default function Login({ onLoginSuccessful }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasError, setHasError] = useState(false);

    const onEmailChange = (event) => setEmail(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);

    const onSubmit = async (event) => {
        event.preventDefault();
        setHasError(false);
        const loginResult = await login({ email, password });
        if (!loginResult) setHasError(true);
        else {
            const { name, token } = loginResult;
            // Save user IDs on local storage
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("token", token);
            onLoginSuccessful();
        }
    };

    return (
        <div className="flex justify-center items-center relative">
            <form className=" self-center" onSubmit={onSubmit}>
                <div className="flex justify-between">
                    <label>User ID</label>
                    <input
                        type="text"
                        className='border-[2px]'
                        placeholder="Enter email"
                        onChange={onEmailChange}
                        value={email}
                    />
                </div>
                <div className="flex justify-between">
                    <label>Password</label>
                    <input
                        type="password"
                        className='border-[2px]'
                        placeholder="Password"
                        onChange={onPasswordChange}
                        value={password}
                    />
                </div>
                {hasError && (
                    <div className="text-red-600">
                        The email address and password you entered don't match any
                        account. Please try again.
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}