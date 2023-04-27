import { useLogout } from '../../hooks/useLogout'
export default function LogoutButton() {
    const { logout } = useLogout();

    const handleClick = () => {
        logout()
    }

    return (
        <div className="absolute h-[45px] w-[110px] bottom-0 left-0 m-[30px] border-[3px] border-white text-white text-[20px] bg-[#ff5757] hover:bg-[#ff3131] rounded-[10px] flex items-center justify-center cursor-pointer " onClick={handleClick} >Log Out</div>
    )
}