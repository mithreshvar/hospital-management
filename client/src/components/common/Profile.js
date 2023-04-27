import dummy from '../../assets/avatar-dummy.png';

export default function Profile({ profileInfo }) {

    //component
    function Field({ content }) {

        return (
            <div className="flex gap-x-[16px] border-1 rounded-[10px] px-[20px] py-[2px] bg-[#cfeaf0a4] ">
                <div className="whitespace-nowrap">{content[0]} :</div>
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
                        <div className=" ">{profileInfo.name}</div>
                        <div className="text-[24px] ">{profileInfo.year}</div>
                    </div>
                </div>
                <div className="p-[30px] w-[60%] gap-y-[20px] font-Fredoka flex flex-col justify-between  rounded-[20px] bg-[#f8feff] shadow-lg ">
                    <Field content={["Roll Number", profileInfo.rollno]} />
                    <Field content={["Class", profileInfo.classAndSec]} />
                    <Field content={["Gender", profileInfo.gender]} />
                    <Field content={["Date Of Birth", profileInfo.dob]} />
                    <Field content={["Blood Group", profileInfo.bloodGroup]} />
                    <Field content={["Age", profileInfo.age]} />
                    <Field content={["Height", profileInfo.height]} />
                    <Field content={["Weight", profileInfo.weight]} />
                    <Field content={["Allergies", profileInfo.allergies]} />
                </div>
            </div>
        </div>
    );
}