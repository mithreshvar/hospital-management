import { Link } from "react-router-dom";
import Navbar from "./common/Navbar";

export default function Prelogin() {
    // const [windowSize, setWindowSize] = useState([
    //     window.innerWidth,
    //     window.innerHeight,
    // ]);

    // useEffect(() => {
    //     const handleWindowResize = () => {
    //         setWindowSize([window.innerWidth, window.innerHeight]);
    //     };

    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     };
    // });


    return (
        <body className="relative box-border">
            <div id="home"></div>
            <Navbar />
            <home className={" overflow-hidden  grid relative items-center h-[100vh] "}>
                <div className="z-[-1] grid h-full absolute w-full">
                    <div className="bg-[#26567b] w-full relative opacity-[1.0] h-full  ">
                        <div className=" w-full absolute h-[100%] opacity-[0.15] ">
                            <img src="https://secemedicalcenter.my.canva.site/images/f504185f7ca7bb362f4f9d2f50c4b2a2.jpg" alt="Elderly Man Recovering in a Hospital Bed " loading="lazy" className={"block object-cover w-full h-full"} />
                        </div>
                    </div>
                </div>
                <content className="z-1 flex flex-col items-center justify-center mt-[-30px]  ">
                    <div className=" text-[rgb(255,251,230)] font-bold leading-[1em] text-[110px] mb-[20px] ">SECE</div>
                    <div className=" text-[rgb(255,242,167)] font-bold leading-[1em] text-[55px] mb-[10px] " >MEDICAL CENTER</div>
                    <div className=" text-[#f4f1ec] leading-[1.2em] text-[30px] mb-[20px] ">Making health accessible and hassle free</div>
                    <div className="flex justify-evenly gap-x-[30px] ">
                        <div className="h-[50px] w-[120px] bg-[#2f2f2f] flex p-[5px] rounded-[5px] hover:bg-[#3c3c3c]    ">
                            <Link to='/login' className=" font-Fredoka text-[#f4f1ec] h-full w-full text-center self-center leading-[1.2em] text-[30px]  ">Login</Link>
                        </div>
                        <div className="h-[50px] w-[130px] bg-[#2f2f2f] flex p-[5px] rounded-[5px] hover:bg-[#3c3c3c]    ">
                            <Link to='/signup' className=" font-Fredoka text-[#f4f1ec] h-full w-full text-center self-center leading-[1.2em] text-[30px]  ">Sign Up</Link>
                        </div>
                    </div>
                </content>
            </home>
            <about id="about" className="p-[60px] flex h-screen justify-evenly  ">
                <img src="https://secemedicalcenter.my.canva.site/images/b438256dae9a33baecc2c4ecaeba3278.jpg" alt="Doctor Hand with Heart Close up" loading="lazy" className=" w-[50%] h-[100%]  " />
                <div className="w-[40%] h-[105%] flex items-center pl-[50px] ">
                    <div>
                        <div className="text-[#0c2030] text-[52px] leading-[1.2em] h-[50%]  ">MAKING THE WORLD A HEALTHIER, HAPPIER PLACE</div>
                        <div className="border-[#0c2030] border-2 h-0 w-full my-[20px] rounded-[30px] " />
                        <div className="text-[#0c2030] text-[20px] leading-[1.5em] h-[50%] text-justify ">WITH EXPERIENCED DOCTORS, SRI ESHWAR COLLEGE OF ENGINEERING PROVIDES MEDICAL FACILITIES TO THE STUDENTS AND FACULTIES. NOW WE ARE HERE WITH OUR ONLINE MEDICAL SYSTEM FOR OUR STUDENTS TO GET ACCESS TO OUR MEDICAL CENTER IN AN  EFFICIENT WAY</div>
                    </div>
                </div>
            </about>
            <contact id="contact"></contact>
        </body>
    )
}