import Button from "../../common/Button";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import WaitingList from "./WaitingList";
import History from "./History";
import PatientRecords from "./PatientRecords";
import Profile from "../../common/Profile";

export default function Doctor() {

    let [selected, setSelected] = useState('');

    return (
        <div className=" flex h-screen ">
            <div className="flex justify-center bg-[#e1a3ff] h-full w-[17%] " >
                <div className="self-center ">
                    <Button id={'waiting'} selected={selected} setSelected={setSelected} theme={'purple'} >Waiting List</Button>
                    <Button id={'patients'} selected={selected} setSelected={setSelected} theme={'purple'} >Patient Records</Button>
                    <Button id={'history'} selected={selected} setSelected={setSelected} theme={'purple'} >Record History</Button>
                </div>
            </div>
            <div className="bg-[#e1a3ff] h-full w-[83%] p-[20px]  ">
                <div className="bg-[#f8ebff] h-full py-[40px] px-[70px] rounded-[40px] overflow-scroll  " >
                    <Routes>
                        <Route path="/waiting" element={<WaitingList setSelected={setSelected} />} />
                        <Route path="/patients" element={<PatientRecords setSelected={setSelected} />} />
                        <Route path="/patients/:rollNo" element={<Profile />} />
                        <Route path="/history" element={<History setSelected={setSelected} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}