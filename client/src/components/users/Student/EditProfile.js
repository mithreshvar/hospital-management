import { useState } from 'react';
import dummy from '../../../assets/avatar-dummy.png';
import InputField from './InputField';

export default function EditProfile({ setSelected }) {
    setSelected('edit');

    const [name, setName] = useState("Jhon Doe");
    const [year, setYear] = useState("2nd year");
    const [rollNo, setRollNo] = useState("21CS001");
    const [userclass, setUserClass] = useState("CSE - A");
    const [gender, setGender] = useState("Unknown");
    const [dob, setDob] = useState("01 / 01 / 0001");
    const [blood, setBlood] = useState("O+");
    const [age, setAge] = useState("18");
    const [height, setHeight] = useState("152 cm");
    const [weight, setWeight] = useState("60 kg");
    const [allergies, setAllergies] = useState("Air, Water, Sand");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const response = await fetch("/api/patientProfile/", {
        //     method: "P",
        //     body: JSON.stringify({ rollno: "21CS999", name: "Jhon Doe" }),
        //     headers: { "Content-Type": "application/json" },
        // });
        // const json = await response.json();
        // // If request is not successful, display error message
        // if (!response.ok) {
        //     console.log(json.error);
        // }
        // else {
        //     console.log("POSTED");
        // }


    }


    return (
        <div className="w-full flex text-[30px] font-Fredoka bg-[#cde1f08a] p-[20px] rounded-[20px] items-center">
            <form className="flex justify-evenly w-full  ">
                <div className="py-[10px] ">
                    <img className="w-[200px] h-[200px] rounded-full border-[1px] mb-[20px] " src={dummy} alt='profile avathar' />
                </div>
                <div className='w-[70%] '>
                    <div className="p-[30px] gap-y-[20px] flex flex-col justify-between rounded-[20px] bg-[#f8feff] shadow-lg mb-[20px] ">
                        <InputField title={"Name"} value={name} setValue={setName} />
                        <InputField title={"Year"} value={year} setValue={setYear} />
                        <InputField title={"Roll Number"} value={rollNo} setValue={setRollNo} />
                        <InputField title={"Class"} value={userclass} setValue={setUserClass} />
                        <InputField title={"Gender"} value={gender} setValue={setGender} />
                        <InputField title={"Date Of Birth"} value={dob} setValue={setDob} />
                        <InputField title={"Blood Group"} value={blood} setValue={setBlood} />
                        <InputField title={"Age"} value={age} setValue={setAge} />
                        <InputField title={"Height"} value={height} setValue={setHeight} />
                        <InputField title={"Weight"} value={weight} setValue={setWeight} />
                        <InputField title={"Allergies"} value={allergies} setValue={setAllergies} />
                    </div>
                    <button type='submit' onClick={handleSubmit} className='px-[20px] py-[5px] bg-slate-600 text-white rounded-[20px]' >Submit</button>
                </div>
            </form>
        </div>
    );
}