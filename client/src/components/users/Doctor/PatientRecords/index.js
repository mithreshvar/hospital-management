import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export default function PatientRecords({ setSelected }) {
    setSelected('patients');

    const { user } = useAuthContext();

    const [info, setInfo] = useState(null);

    useEffect(() => {

        const fetchPatientProfile = async () => {
            const response = await fetch("/api/patientProfiles/", {
                headers: { 'Authorization': `Bearer ${user.token}` },
            });

            const json = await response.json();

            if (!response.ok) {
                console.log(json.error);
            }

            if (response.ok) {
                setInfo(json);
            }
        }

        fetchPatientProfile();

    }, [])

    function LogField({ currentInfo }) {
        return (
            <div className="z-0 bg-white h-[80px] w-full  flex items-center justify-between text-[25px] text-[#1a1a61db] font-Fredoka font-medium rounded-[10px] self-center hover:border-[3px] hover:border-[#e1a3ff] mb-[20px] " >
                <Link to={`${currentInfo.user_id}`} className="w-full p-[25px]">
                    <span>{currentInfo.rollno}</span> <span className="h-full w-0 my-[-10px] mx-[15px] rounded-[50px] border-2 border-solid " />  <span>{currentInfo.name}</span>
                </Link>
            </div>
        );
    }

    return (
        <>
            <section className="font-Fredoka font-semibold text-[40px] mb-[30px] text-[#26148ca4] ">
                Patient Records
            </section>
            <section >
                {(info && info.length !== 0 && info.map((item) => <LogField currentInfo={item} />))}
            </section>
        </>
    );
}