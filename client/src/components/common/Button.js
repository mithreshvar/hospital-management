import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Button(props) {

    let commonStyle = " flex items-center justify-center h-[70px] w-[180px] text-[18px] font-Fredoka font-semibold rounded-[10px] text-center self-center cursor-pointer mb-[50px]  "
    let [style, setStyle] = useState();

    useEffect(() => {
        if (props.theme === 'purple') {
            if (props.selected === props.id) {
                setStyle("bg-[#9886f4] text-white ");
            }
            else {
                setStyle("bg-white hover:bg-[#fadeff] text-[#8671f4] ");
            }
        }
        else if (props.theme === 'blue') {
            if (props.selected === props.id) {
                setStyle("bg-[#4a60c4] text-white ");
            }
            else {
                setStyle("bg-white hover:bg-[#e4e9ff] text-[#3a49b8] ");
            }
        }
    }, [props.selected]);

    return (
        <Link className={style + commonStyle} to={props.id} onClick={() => { props.setSelected(props.id) }}>
            {props.children}
        </Link>
    );
}