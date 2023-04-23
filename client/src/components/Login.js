import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

export default function Login({ onLoginSuccessful }) {
    const navigate = useNavigate();
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
            const { name, token, userType } = loginResult;
            // Save user IDs on local storage
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("token", token);
            onLoginSuccessful(userType);
            navigate('/');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen relative">
            <img src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg" className="h-screen w-[65%] object-cover" alt='' />
            <div className="flex  items-center  h-full w-[35%] bg-[#f7f7f7]  " >
                <form className=" text-[22px] w-full px-[30px] " onSubmit={onSubmit}>
                    <div className="flex justify-between">
                        <input
                            type="text"
                            className='border-[2px] h-[70px] w-full px-[30px] rounded-[10px] '
                            placeholder="Email"
                            onChange={onEmailChange}
                            value={email}
                        />
                    </div>
                    <div className="flex justify-between mt-[15px] relative">
                        <input
                            type="password"
                            className='border-[2px] h-[70px] w-full px-[30px] rounded-[10px] '
                            placeholder="Password"
                            onChange={onPasswordChange}
                            value={password}
                        />
                        {hasError && (
                            <div className="text-red-600 text-[16px] absolute bottom-[-28px] ">
                                The username and/or password you specified are not correct.
                            </div>
                        )}
                    </div>
                    <button type="submit" className=" border-[2px] mt-[35px] h-[50px] w-full rounded-[10px] hover:bg-[#333333] bg-[#6675DE] text-white " >Submit</button>
                </form>
            </div>
        </div>
    );
}