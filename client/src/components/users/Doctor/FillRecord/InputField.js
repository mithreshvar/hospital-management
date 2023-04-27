export default function InputField({ title, value, setValue, placeholder }) {

    const handleValue = (event) => {
        setValue(event.target.value);
    }

    if (title === 'Prescription') {
        return (
            <div className="grid gap-y-[5px] border-1 rounded-[10px] px-[20px] py-[2px] w-full ">
                <label className="whitespace-nowrap justify-self-start">{title} :</label>
                <textarea type="text" value={value} className={'bg-[#ffffff] rounded-[10px] px-[20px] py-[10px] justify-self-stretch  h-[100px] overflow-scroll '} onChange={handleValue} required={true} placeholder={placeholder} />
            </div>
        );
    }

    return (
        <div className="grid gap-y-[5px] border-1 rounded-[10px] px-[20px] py-[2px] w-full ">
            <label className="whitespace-nowrap justify-self-start">{title} :</label>
            <input type="text" value={value} className={'bg-[#ffffff] rounded-[10px] px-[20px] h-[35px] justify-self-stretch s'} onChange={handleValue} required={true} placeholder={placeholder} />
        </div>
    );
}