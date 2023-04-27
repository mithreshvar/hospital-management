import { Link } from "react-router-dom";

export default function HistoryLogs({ currentHistory }) {

    return (
        <div className="z-0 bg-white h-[80px] w-full  flex items-center justify-between text-[25px] text-[#1a1a61db] font-Fredoka font-medium rounded-[10px] self-center hover:border-[3px] hover:border-[#e1a3ff] mb-[20px] " >
            <Link to={'/prescription/' + currentHistory.prescription_id} className="w-full p-[25px]">
                <span>{currentHistory.rollno}</span> <span className="h-full w-0 my-[-10px] mx-[15px] rounded-[50px] border-2 border-solid " />  <span>{currentHistory.name}</span>
            </Link>
            <div className="flex gap-x-[15px] p-[25px] ">

            </div>
        </div>
    );
}