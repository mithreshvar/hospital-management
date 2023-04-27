import { Link } from "react-router-dom";
import { ImCross, ImCheckmark } from "react-icons/im";
import { useWaitingListsContext } from "../../../../hooks/useWaitingListsContext";

export default function LogField({ currentWaitingList, user }) {

    const { dispatch } = useWaitingListsContext();

    const handleClick = async () => {
        const response = await fetch("/api/waitingList/" + currentWaitingList._id, {
            method: "DELETE",
            headers: { 'Authorization': `Bearer ${user.token}` },
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_WAITINGLIST', payload: json });
        }

    }

    return (
        <div className="z-0 bg-white h-[80px] w-full  flex items-center justify-between text-[25px] text-[#1a1a61db] font-Fredoka font-medium rounded-[10px] self-center hover:border-[3px] hover:border-[#e1a3ff] mb-[20px] " >
            <Link to={'/patients/' + currentWaitingList.user_id} className="w-full p-[25px]">
                <span>{currentWaitingList.rollno}</span> <span className="h-full w-0 my-[-10px] mx-[15px] rounded-[50px] border-2 border-solid " />  <span>{currentWaitingList.name}</span>
            </Link>
            <div className="flex gap-x-[15px] p-[25px] ">
                <Link to={'/fillRecord/' + currentWaitingList.user_id + '/' + currentWaitingList._id} className="w-[40px] h-[40px] text-[18px] bg-[#7ed957] text-white flex items-center justify-center rounded-[100px]  " ><ImCheckmark /></Link>
                <div className="w-[40px] h-[40px] z-10 text-[18px] bg-[#ff3131] text-white flex items-center justify-center rounded-[100px] cursor-pointer " onClick={handleClick} > <ImCross /></div>
            </div>
        </div>
    );
}