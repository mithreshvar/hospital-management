
import Profile from "../../common/Profile";


export default function StudentProfile({ setOverlay, setSelected }) {
    setSelected('myProfile');


    return (
        <div className="relative ">
            <div className={" py-[40px] px-[70px] "}>
                <Profile />
                <div className="flex justify-end">
                    <div className="p-[20px] bg-[#5bc42e] text-[22px] text-white font-Fredoka font-medium rounded-[35px] mr-[10%] mt-[20px] cursor-pointer " onClick={() => setOverlay(true)}>Fix Appointment</div>
                </div>
            </div>
        </div >
    );
} 