export default function HistoryTab({ currentHistory }) {

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
        <div className="w-full flex text-[30px] p-[20px] rounded-[20px] items-center" >
            <div className="flex justify-evenly w-full  ">
                <div className="p-[30px] gap-y-[20px] font-Fredoka flex flex-col justify-between  rounded-[20px] bg-[#f8feff] shadow-lg ">
                    <Field content={["Date", currentHistory.date]} />
                    <Field content={["Medical Problem", currentHistory.medicalProblem]} />
                    <Field content={["Temperature", currentHistory.temperature]} />
                    <Field content={["Days", currentHistory.days]} />
                    <Field content={["Prescription", currentHistory.prescription]} />
                </div>
            </div>
        </div>
    );
}