import { useState } from 'react';
import dummy from '../../../assets/avatar-dummy.png';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';

export default function EditProfile({ setSelected, user, profileInfo, setProfileInfo, setAppointmentOverlay, setPosted }) {
    setSelected('edit');

    const navigate = useNavigate();

    const [name, setName] = useState(profileInfo ? profileInfo.name : "");
    const [year, setYear] = useState(profileInfo ? profileInfo.year : "");
    const [rollNo, setRollNo] = useState(profileInfo ? profileInfo.rollno : "");
    const [classAndSec, setClassAndSec] = useState(profileInfo ? profileInfo.classAndSec : "");
    const [gender, setGender] = useState(profileInfo ? profileInfo.gender : "");
    const [dob, setDob] = useState(profileInfo ? profileInfo.dob : "");
    const [blood, setBlood] = useState(profileInfo ? profileInfo.bloodGroup : "");
    const [age, setAge] = useState(profileInfo ? profileInfo.age : "");
    const [height, setHeight] = useState(profileInfo ? profileInfo.height : "");
    const [weight, setWeight] = useState(profileInfo ? profileInfo.weight : "");
    const [allergies, setAllergies] = useState(profileInfo ? profileInfo.allergies : "");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (profileInfo) {

            let changes = {};
            if (profileInfo.name !== name) changes.name = name;
            if (profileInfo.year !== year) changes.year = year;
            if (profileInfo.rollno !== rollNo) changes.rollno = rollNo;
            if (profileInfo.classAndSec !== classAndSec) changes.classAndSec = classAndSec;
            if (profileInfo.gender !== gender) changes.gender = gender;
            if (profileInfo.dob !== dob) changes.dob = dob;
            if (profileInfo.bloodGroup !== blood) changes.bloodGroup = blood;
            if (profileInfo.age !== age) changes.age = age;
            if (profileInfo.height !== height) changes.height = height;
            if (profileInfo.weight !== weight) changes.weight = weight;
            if (profileInfo.allergies !== allergies) changes.allergies = allergies;


            const response = await fetch("/api/patientProfiles/" + profileInfo._id, {
                method: "PATCH",
                body: JSON.stringify(changes),
                headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}` },
            });
            const json = await response.json();
            // If request is not successful, display error message
            if (!response.ok) {
                console.log(json.error);
            }
            else {
                console.log("PATCHED");
                console.log(json);

                Object.keys(changes).forEach(key => {
                    profileInfo[key] = changes[key];
                })
                setProfileInfo(profileInfo);

                setAppointmentOverlay(true);
                setPosted('profile');
                setTimeout(() => {
                    setAppointmentOverlay(false);
                    setPosted('');
                    navigate("/myProfile");
                }, 3500);
            }
        }
        else {
            const response = await fetch("/api/patientProfiles/", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    year,
                    rollno: rollNo,
                    classAndSec,
                    gender,
                    dob,
                    bloodGroup: blood,
                    age,
                    height,
                    weight,
                    allergies,
                }),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${user.token}`
                },
            });
            const json = await response.json();
            // If request is not successful, display error message
            if (!response.ok) {
                console.log(json.error);
            }
            else {
                console.log("POSTED");
                setAppointmentOverlay(true);
                setPosted('profile');
                setTimeout(() => {
                    setAppointmentOverlay(false);
                    setPosted('');
                    navigate("/myProfile");
                }, 3500);
            }
        }
    }


    return (
        <div className='text-[30px] font-Fredoka '>
            {(profileInfo === 'no') && <div className='p-[20px] '>Please Fill All The Details !</div>}
            <div className="w-full flex bg-[#cde1f08a] shadow-lg p-[20px] rounded-[20px] items-center">
                <form className="flex justify-evenly w-full  ">
                    <div className="py-[10px] ">
                        <img className="w-[200px] h-[200px] rounded-full border-[1px] mb-[20px] " src={dummy} alt='profile avathar' />
                    </div>
                    <div className='w-[70%] '>
                        <div className="p-[30px] gap-y-[20px] flex flex-col justify-between rounded-[20px] bg-[#daf9ff] shadow-lg mb-[20px] ">
                            <InputField title={"Name"} value={name} setValue={setName} placeholder={"Jhon Doe"} />
                            <InputField title={"Year"} value={year} setValue={setYear} placeholder={"2nd year"} />
                            <InputField title={"Roll Number"} value={rollNo} setValue={setRollNo} placeholder={"21CS001"} />
                            <InputField title={"Class"} value={classAndSec} setValue={setClassAndSec} placeholder={"CSE - B"} />
                            <InputField title={"Gender"} value={gender} setValue={setGender} placeholder={"Male"} />
                            <InputField title={"Date Of Birth"} value={dob} setValue={setDob} placeholder={"DD/MM/YYYY"} />
                            <InputField title={"Blood Group"} value={blood} setValue={setBlood} placeholder={"O+"} />
                            <InputField title={"Age"} value={age} setValue={setAge} placeholder={"18"} />
                            <InputField title={"Height"} value={height} setValue={setHeight} placeholder={"162"} />
                            <InputField title={"Weight"} value={weight} setValue={setWeight} placeholder={"68"} />
                            <InputField title={"Allergies"} value={allergies} setValue={setAllergies} placeholder={"Penuts"} />
                        </div>
                        <button type='submit' onClick={handleSubmit} className='px-[20px] py-[5px] bg-slate-600 text-white rounded-[20px]' >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}