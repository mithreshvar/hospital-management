import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import dummy from '../../../../assets/avatar-dummy.png';
import FillPrescription from "./FillPriscription";

export default function FillRecord() {

    const { id, wid } = useParams();
    const { user } = useAuthContext();

    const [profileInfo, setProfileInfo] = useState(null);

    useEffect(() => {

        const fetchPatientProfile = async () => {
            console.log(id);
            const response = await fetch("/api/patientProfiles/user/" + id, {
                headers: { 'Authorization': `Bearer ${user.token}` },
            });

            const json = await response.json();

            if (!response.ok) {
                console.log(json.error);
            }

            if (response.ok) {
                setProfileInfo(json);
            }
        }

        fetchPatientProfile();

    }, [])


    //component
    function Profile() {

        function Field({ content }) {

            if (content[0] === 'Allergies') {
                return (
                    <div className="flex gap-x-[16px] border-1 rounded-[10px] px-[10px] py-[2px] bg-[#cfeaf0a4] ">
                        <div className="whitespace-nowrap" >{content[0]} :</div>
                        <div>{content[1]}</div>
                    </div>
                );
            }

            return (
                <div className="flex w-[50%] gap-x-[16px] border-1 rounded-[10px] px-[10px] py-[2px] bg-[#cfeaf0a4] ">
                    <div className="whitespace-nowrap">{content[0]} :</div>
                    <div>{content[1]}</div>
                </div>
            );
        }

        return (
            <div className="w-full flex text-[22px] bg-[#def9ff] p-[20px] py-[15px] rounded-[20px] shadow-lg items-center">
                <div className="flex justify-evenly w-full  ">

                    <div className="py-[5px] ">
                        <img className="w-[200px] h-[200px] rounded-full border-[1px] mb-[10px] " src={dummy} alt='profile avathar' />
                        <div className="pl-[25px] ">
                            <div className=" ">{profileInfo.name}</div>
                            <div className="text-[18px] ">{profileInfo.year}</div>
                        </div>
                    </div>

                    <div className="p-[30px] py-[15px] w-[70%] font-Fredoka flex flex-col justify-between  rounded-[20px] bg-[#f8feff] shadow-lg ">

                        <div className="flex justify-stretch w-full gap-x-[15px] ">
                            <Field content={["Roll Number", profileInfo.rollno]} />
                            <Field content={["Class", profileInfo.classAndSec]} />
                        </div>

                        <div className="flex justify-stretch w-full gap-x-[15px] ">
                            <Field content={["Gender", profileInfo.gender]} />
                            <Field content={["Date Of Birth", profileInfo.dob]} />
                        </div>

                        <div className="flex justify-stretch w-full gap-x-[15px] ">
                            <Field content={["Blood Group", profileInfo.bloodGroup]} />
                            <Field content={["Age", profileInfo.age]} />
                        </div>

                        <div className="flex justify-stretch w-full gap-x-[15px] ">
                            <Field content={["Height", profileInfo.height]} />
                            <Field content={["Weight", profileInfo.weight]} />
                        </div>

                        <Field content={["Allergies", profileInfo.allergies]} />

                    </div>

                </div>
            </div>
        );
    }


    return (
        <>
            {profileInfo && <Profile />}
            {profileInfo && <FillPrescription id={id} wid={wid} user={user} />}
        </>
    );
}