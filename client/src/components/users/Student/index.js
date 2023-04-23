import { Route, Routes } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import Button from "../../common/Button";
import { useState, useEffect } from "react";
import StudentHistory from "./StudentHistory";
import EditProfile from "./EditProfile";

import { useWaitingListsContext } from "../../../hooks/useWaitingListsContext";

export default function Student() {
    const { dispatch } = useWaitingListsContext()
    let [profileInfo, setProfileInfo] = useState(null);

    // useEffect(() => {
    //     const fetchWaitingList = async () => {
    //         const response = await fetch("/api/patientProfile/id"); // ????????  id  ??????????
    //         const json = await response.json();

    //         if (response.ok) {
    //             setProfileInfo(json);
    //         }
    //     }

    //     fetchWaitingList();
    // }, []);

    let [selected, setSelected] = useState('');
    let [postedAppointment, setPostedAppointment] = useState(false);
    let [error, setError] = useState(false);
    let [appointmentOverlay, setAppointmentOverlay] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/api/waitingList/", {
            method: "POST",
            body: JSON.stringify({ rollno: "21CS009", name: "Jhon Doe" }),
            headers: { "Content-Type": "application/json" },
        });
        const json = await response.json();
        setPostedAppointment(true); // Appointment sent overlay message
        // If request is not successful, display error message
        if (!response.ok) {
            console.log(json.error);
            setError(true);
        }
        else {
            console.log("POSTED");
            dispatch({ type: "CREATE_WAITINGLIST", payload: json })
        }

        setTimeout(() => {
            setAppointmentOverlay(false);
            setError(false);
            setPostedAppointment(false);
        }, 4000); // hide the overlay
    }

    return (
        <div className=" flex h-screen w-full ">
            <div className="flex justify-center bg-[#8fcfff] h-full w-[17%]  " >
                <div className="self-center ">
                    <Button id={'myProfile'} selected={selected} setSelected={setSelected} theme={'blue'} >My Profile</Button>
                    <Button id={'history'} selected={selected} setSelected={setSelected} theme={'blue'} >My History</Button>
                    <Button id={'edit'} selected={selected} setSelected={setSelected} theme={'blue'} >Edit Profile</Button>
                </div>
            </div>
            <div className="bg-[#8fcfff] h-full w-[83%] p-[20px]  ">
                <div className="bg-[#f4f6fc] h-full py-[40px] px-[70px] rounded-[40px] overflow-scroll  " >
                    <Routes>
                        <Route path="/myProfile" element={<StudentProfile setOverlay={setAppointmentOverlay} setSelected={setSelected} />} />
                        <Route path="/history" element={<StudentHistory setSelected={setSelected} />} />
                        <Route path="/edit" element={<EditProfile setSelected={setSelected} />} />
                    </Routes>
                </div>
            </div>
            {appointmentOverlay &&
                <div className="z-[3] absolute top-0 bg-[#515a7be0] h-full w-full py-[40px] px-[70px] flex items-center justify-center " >
                    <div className={(error) ? "z-[5] bg-[#f4f6fc] w-[600px] h-[280px] px-[30px] text-center rounded-[40px] text-[32px] flex items-center justify-center border-[#ff3131] border-[3px] " : "z-[5] bg-[#f4f6fc] w-[600px] h-[280px] px-[30px] text-center rounded-[40px] text-[32px] flex items-center justify-center "} >
                        {
                            (postedAppointment) ?
                                ((error) ?
                                    <div className="text-[#ff3131] ">
                                        Something Went Wrong Please Try Again Later!
                                    </div>
                                    :
                                    <div>
                                        Your Appointment has been sent successfully!
                                    </div>
                                )
                                :
                                <div>
                                    <div>Would you like to Fix Appointment?</div>
                                    <div className="flex justify-evenly mt-[35px] ">
                                        <button type="submit" className="w-[100px] h-[50px] bg-[#7ed957] flex items-center justify-center rounded-[15px] " onClick={handleSubmit} >Yes</button>
                                        <button className="w-[100px] h-[50px] bg-[#ff3131] flex items-center justify-center rounded-[15px] " onClick={() => setAppointmentOverlay(false)}  >No</button>
                                    </div>
                                </div>

                        }
                    </div>
                </div>
            }
        </div >

    );
}