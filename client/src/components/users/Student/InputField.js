export default function InputField({ title, value, setValue, placeholder }) {

    const handleValue = (event) => {
        setValue(event.target.value);
    }

    if (title === 'Allergies') {
        return (
            <div className="flex gap-x-[16px] border-1 rounded-[10px] px-[20px] py-[2px] w-full ">
                <label className="w-[200px] whitespace-nowrap justify-self-start">{title} :</label>
                <textarea type="text" value={value} className={'bg-[#ffffff] rounded-[10px] px-[20px] py-[10px] h-[100px] overflow-scroll '} onChange={handleValue} required={true} placeholder={placeholder} />
            </div>
        );
    }

    return (
        <div className="flex gap-x-[16px] border-1 rounded-[10px] px-[20px] py-[2px] w-full ">
            <label className="w-[200px] whitespace-nowrap">{title} :</label>
            <input type="text" value={value} className='bg-[#ffffff] rounded-[10px] px-[20px] ' onChange={handleValue} required={true} placeholder={placeholder} />
        </div>
    );
}