import { useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function PatientRecords({ setSelected }) {
    setSelected('patients');

    const [info, setInfo] = useState([
        {
            id: 1,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
        {
            id: 2,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
        {
            id: 3,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
        {
            id: 4,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
        {
            id: 5,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
        {
            id: 6,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
        {
            id: 7,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
        {
            id: 8,
            name: "Jhon Doe",
            rollNo: "21CS001",
        },
    ]);

    return (
        // <>
        //     <section className="font-Fredoka font-semibold text-[40px] mb-[30px] text-[#26148ca4] ">
        //         Waiting List
        //     </section>
        //     <section >
        //         {info.map((item) => <LogField currentInfo={item} />)}
        //     </section>
        // </>
        <>patients

        </>
    );
}