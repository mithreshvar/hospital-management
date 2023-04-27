import { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { useWaitingListsContext } from "../../../../hooks/useWaitingListsContext";

export default function FillPrescription({ id, wid, user }) {


    const { dispatch } = useWaitingListsContext();

    const d = new Date();
    const [date, setDate] = useState(d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear());
    const [medicalProblem, setMedicalProblem] = useState("");
    const [temperature, setTemperature] = useState("");
    const [days, setDays] = useState("");
    const [prescription, setPrescription] = useState("");

    const [submitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let response = await fetch("/api/prescription/", {
            method: "POST",
            body: JSON.stringify({
                date,
                medicalProblem,
                temperature,
                days,
                prescription,
                user_id: id,
            }),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
        });
        let json = await response.json();
        // If request is not successful, display error message
        if (!response.ok) {
            console.log(json.error);
            return
        }


        let prescription_id = json._id;

        response = await fetch("/api/waitingList/" + wid, {
            method: "DELETE",
            headers: { 'Authorization': `Bearer ${user.token}` },
        });
        json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_WAITINGLIST', payload: json });
            console.log("POSTED");
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                navigate('/waiting');
            }, 3500);
        }
        else {
            console.log(json.error);
        }

        const { rollno, name, user_id } = json;

        response = await fetch("/api/historyLog/", {
            method: "POST",
            body: JSON.stringify({
                rollno,
                name,
                user_id,
                prescription_id
            }),
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
        });
        json = await response.json();
        // If request is not successful, display error message
        if (!response.ok) {
            console.log(json.error);
            return
        }

    }

    return (
        <div className="w-full flex text-[22px] rounded-[20px] items-center mt-[20px] " >
            <div className="flex justify-evenly w-full  ">
                <div className="w-full p-[30px] gap-y-[10px] font-Fredoka flex flex-col justify-between  rounded-[20px] bg-[#def9ff] shadow-lg ">
                    <InputField title={"Date"} value={date} setValue={setDate} placeholder={date} />
                    <InputField title={"Medical Problem"} value={medicalProblem} setValue={setMedicalProblem} placeholder={"Fever"} />
                    <InputField title={"Temperature"} value={temperature} setValue={setTemperature} placeholder={"98°"} />
                    <InputField title={"Days"} value={days} setValue={setDays} placeholder={"3"} />
                    <InputField title={"Prescription"} value={prescription} setValue={setPrescription} placeholder={"Paracetamol"} />
                    <div className={(submitted) ? "flex w-full justify-between " : "flex w-full justify-end "}>
                        {submitted && <div className="ml-[20px] mt-[10px] text-[#68b448] text-[28px] ">This Prescription has been Recorded! </div>}
                        <button type="submit" className=" w-[200px] h-[40px] mt-[10px] mr-[30px] bg-[#7ed957] hover:bg-[#6fc14c] text-white rounded-[15px] " onClick={handleSubmit} >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}