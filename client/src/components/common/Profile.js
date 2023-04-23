import dummy from '../../assets/avatar-dummy.png';

export default function Profile() {

    //component
    function Field({ content }) {

        return (
            <div className="flex gap-x-[16px] border-1 rounded-[10px] px-[20px] py-[2px] bg-[#cfeaf0a4] ">
                <div>{content[0]} :</div>
                <div>{content[1]}</div>
            </div>
        );
    }

    return (
        <div className="w-full flex text-[30px] bg-[#cde1f08a] p-[20px] rounded-[20px] items-center">
            <div className="flex justify-evenly w-full  ">
                <div className="py-[10px] ">
                    <img className="w-[200px] h-[200px] rounded-full border-[1px] mb-[20px] " src={dummy} alt='profile avathar' />
                    <div className="pl-[25px] ">
                        <div className=" ">Jhon Doe</div>
                        <div className="text-[24px] ">2nd year</div>
                    </div>
                </div>
                <div className="p-[30px] w-[60%] gap-y-[20px] font-Fredoka flex flex-col justify-between  rounded-[20px] bg-[#f8feff] shadow-lg ">
                    <Field content={["Roll Number", "21CS001"]} />
                    <Field content={["Class", "CSE - A"]} />
                    <Field content={["Gender", "Unknown"]} />
                    <Field content={["Date Of Birth", "01 / 01 / 0001"]} />
                    <Field content={["Blood Group", "O+"]} />
                    <Field content={["Age", "18"]} />
                    <Field content={["Height", "152 cm"]} />
                    <Field content={["Weight", "60 kg"]} />
                    <Field content={["Allergies", "Air, Water, Sand"]} />
                </div>
            </div>
        </div>
    );
}