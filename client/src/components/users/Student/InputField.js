export default function InputField({ title, value, setValue }) {

    const handleValue = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="flex gap-x-[16px] border-1 rounded-[10px] px-[20px] py-[2px] w-full ">
            <label className="w-[200px] whitespace-nowrap">{title} :</label>
            <input type="text" value={value} className='bg-[#cfeaf0a4] rounded-[10px] px-[20px] ' onChange={handleValue} required={true} />
        </div>
    );
}