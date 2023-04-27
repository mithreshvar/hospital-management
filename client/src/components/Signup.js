import { useEffect, useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passNotSameError, setPassNotSameError] = useState(false);
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (confirmPassword === password)
            await signup(email, password)
    }

    useEffect(() => {
        if (confirmPassword !== password) {
            setPassNotSameError(true);
        }
        else {
            setPassNotSameError(false);
        }
    }, [confirmPassword]);

    return (
        <div className="flex justify-center items-center h-screen relative">
            <img src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg" className="h-screen w-[65%] object-cover" alt='' />
            <div className="flex  items-center  h-full w-[35%] bg-[#f7f7f7]  " >
                <form className=" text-[22px] w-full px-[30px] " onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <input
                            type="text"
                            className='border-[2px] h-[70px] w-full px-[30px] rounded-[10px] '
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="flex justify-between mt-[15px] relative">
                        <input
                            type="password"
                            className='border-[2px] h-[70px] w-full px-[30px] rounded-[10px] '
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="flex justify-between mt-[15px] relative">
                        <input
                            type="password"
                            className='border-[2px] h-[70px] w-full px-[30px] rounded-[10px] '
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                        {passNotSameError && <div className="text-red-600 text-[16px] absolute bottom-[-28px] ">Your Password doesn't match!</div>}
                        {error && <div className="text-red-600 text-[16px] absolute bottom-[-28px] ">{error}</div>}
                    </div>
                    <button type="submit" disabled={isLoading} className=" border-[2px] mt-[35px] h-[50px] w-full rounded-[10px] hover:bg-[#333333] bg-[#6675DE] text-white " >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup